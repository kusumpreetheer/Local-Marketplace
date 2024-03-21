import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
import { dummyUsers } from '@/constants/dummyUsers'
import { dummyServices } from '@/constants/dummyServices'
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled'
import { SearchParamProps } from '@/types'
import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import { Pen } from '@/public/assets/icons/Pen'

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
    <div className='lg:wrapper'>
      <div className="flex justify-between items-center py-4 pr-4">
        {/* Common Header */}
        <CommonHeader title='' />
        {/* Sign Out Button */}
        <UserButton afterSignOutUrl="/"/>
      </div>

      {/* Profile Name */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center lg:py-10">
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
        <div className='wrapper flex items-center justify-center gap-x-4'>
          {/* Reviews */}
          <Link href="/profile/reviews">
            <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center">
              <Pen className='w-9 h-9'/>
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

      {/* My Reservations */}
      <section className="wrapper my-5 pl-4">
          <Collection 
            title='My Reservations'
            direction='horizontal'
            itemType='reservation'
            items={dummyReservations}
            hasButton={true}
            hasViewMore={true}
            link={"/profile/reservations"}
            nextPrevButton={true}
          />
      </section>
      
      {/* My Services */}
      <section className="wrapper my-5 pl-4">
        <Collection 
          title='My Services'
          direction='horizontal'
          itemType='service'
          items={services}
          hasButton={true}
          hasViewMore={true}
          link={"/profile/services"}
          nextPrevButton={true}
        />
      </section>
    </div>

    </>
  )
}

export default ProfilePage