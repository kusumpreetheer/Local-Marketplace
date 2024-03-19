import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { dummyReservations } from '@/constants/dummyReservations'
import { dummyUsers } from '@/constants/dummyUsers'
import { dummyServices } from '@/constants/dummyServices'
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled'
import { StarFilled } from '@/public/assets/icons/StarFilled'
import { SearchParamProps } from '@/types'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const profile = dummyUsers[0];
  const services = dummyServices.filter(service => profile.serviceIDs.includes(service._id));

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  // const orders = await getOrdersByUser({ userId, page: ordersPage})

  // const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  // const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

  return (
    <>
      <section className='flex justify-end p-6'>
        <UserButton afterSignOutUrl="/" />
      </section>

      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center md:py-10">
        <div className="wrapper flex flex-col items-center justify-center sm:justify-between">
          {/* profile image */}
          <div className="w-40 h-40 border border-black rounded-full flex items-center justify-center overflow-hidden">
            <Image 
              src={profile.imageURL}
              alt={profile.username}
              width={500}
              height={500}
            />
          </div>
          {/* name */}
          <h3 className='h3-bold text-center sm:text-left my-2'>{profile.firstName} {profile.lastName}</h3>
          <h3 className='text-center sm:text-left font-thin text-xl'>@{profile.username}</h3>
        </div>
      </section>

      <section className="flex gap-x-2">
        <div className='wrapper flex items-center justify-center sm:justify-between gap-x-4'>
          {/* Reviews */}
          <Link href="/profile/reviews">
            <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center">
              <StarFilled className='w-9 h-9'/>
            </div>
          </Link>

          {/* Saved */}
          <Link href="/profile/saved">
            <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center">
              <BookmarkFilled className='w-9 h-9'/>
            </div>
          </Link>
        </div>
      </section>

      <section className="wrapper my-5">
          <Collection 
            title='My Reservations'
            direction='horizontal'
            itemType='reservation'
            items={dummyReservations}
            hasButton={true}
            hasViewMore={true}
            link={"/profile/reservations"}
          />
      </section>
      
      <section className="wrapper my-5">
        <Link href="/profile/services">
          <Collection 
            title='My Services'
            direction='horizontal'
            itemType='service'
            items={services}
            hasButton={true}
          />
        </Link>
      </section>

    </>
  )
}

export default ProfilePage