import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
import { dummyUsers } from '@/constants/dummyUsers'
import { dummyServices } from '@/constants/dummyServices'
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled'
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import { Pen } from '@/public/assets/icons/Pen'
import { auth } from '@clerk/nextjs'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const profile = dummyUsers[0];
  const services = dummyServices.filter(service => profile.serviceIDs.includes(service._id));

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  return (
    <>
      <CommonHeader title='' signOutButton={true}/>

      {/* Profile Name */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center pt-4 pb-2 lg:pt-6 lg:pb-4">
        <div className="wrapper flex flex-col items-center justify-center sm:justify-between">
          {/* profile image */}
          <div className="w-40 h-40 border border-black rounded-full flex items-center justify-center overflow-hidden">
            <Image priority className="object-cover w-full h-full"
              src={profile.imageUrl}
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

      <section className="flex gap-x-2 mt-3">
        <div className='wrapper flex items-center justify-center gap-x-4'>
          {/* Reviews */}
          <Link href="/profile/reviews">
            <div className="flex-center w-14 h-14 rounded-full bg-primary text-grey-600 hover:bg-accent/60 transition-all duration-300 ease-in-out">
              <Pen className='w-9 h-9'/>
            </div>
          </Link>

          {/* Saved */}
          <Link href="/profile/saved">
            <div className="flex-center w-14 h-14 rounded-full bg-primary text-grey-600 hover:bg-accent/60 transition-all duration-300 ease-in-out">
              <BookmarkFilled className='w-9 h-9'/>
            </div>
          </Link>
        </div>
      </section>

      {/* My Reservations */}
      <section className="wrapper my-5">
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
      <section className="wrapper my-5">
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
    </>
  )
}

export default ProfilePage