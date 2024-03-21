import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions';
import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// This is the webhook handler from Clerk
export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  /*
  * Handle the user changes in clerk webhook in our database, make sure they are synchronized
  */

  // Create a new user in OUR database, whenever a user is created in Clerk
  if (eventType === 'user.created') {
    // this is the data from clerk webhook
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    // Create a new user object
    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username || first_name + last_name,
      firstName: first_name,
      lastName: last_name,
      imageURL: image_url,
    };

    console.log('Creating a new user:', user);

    // Create a new user in the database
    const newUser = await createUser(user);

    console.log('User created:', newUser);

    // Update the user's _id in MongoDB to the user's publicMetadata of Clerk
    if (newUser) {
      console.log('Updating user metadata in Clerk:', newUser._id);
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }

    console.log('User metadata updated.');

    return NextResponse.json({ message: 'OK', user: newUser });
  }

  // Update the user in OUR database, whenever a user is updated in Clerk
  if (eventType === 'user.updated') {
    const { id, image_url, first_name, last_name, username } = evt.data;

    const user = {
      firstName: first_name,
      lastName: last_name,
      username: username!,
      imageURL: image_url,
    };

    console.log('Updating user:', user);

    const updatedUser = await updateUser(id, user);

    console.log('User updated:', updatedUser);

    return NextResponse.json({ message: 'OK', user: updatedUser });
  }

  // Delete the user in OUR database, whenever a user is deleted in Clerk
  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    console.log('Deleting user:', id);

    const deletedUser = await deleteUser(id!);

    console.log('User deleted:', deletedUser);

    return NextResponse.json({ message: 'OK', user: deletedUser });
  }

  return new Response('', { status: 200 });
}
