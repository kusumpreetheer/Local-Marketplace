import Collection from '@/components/shared/Collection'
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled'
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import { Pen } from '@/public/assets/icons/Pen'
import { auth } from '@clerk/nextjs'
import { getUserById } from '@/lib/actions/user.actions'
import { ReservationItem } from '@/lib/database/models/reservation.model'
import { IService } from '@/lib/database/models/service.model'
import { getServicesByUser } from '@/lib/actions/service.actions'
import { getReservationsByUser, getReservationsByProvider } from '@/lib/actions/reservation.actions'
import ProfileSwitchView from '@/components/shared/ProfileSwitchView'


const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log('userId:', userId);

  /*************************************************************************
   * get user profile
   *************************************************************************/
  const profile = await getUserById(userId)
  if (!profile) return null;


  /*************************************************************************
   * get requests
   *************************************************************************/
  const myRequests: ReservationItem[] = await fetchRequests();

  async function fetchRequests() {
    const reservations = await getReservationsByProvider(userId);
    if (!reservations) return null;
    return reservations.data;
  }

  /*************************************************************************
   * get reservations
   *************************************************************************/
  const myReservations: ReservationItem[] = await fetchReservations();

  async function fetchReservations() {
    const reservations = await getReservationsByUser(userId);
    if (!reservations) return null;
    return reservations.data;
  }

  /*************************************************************************
   * get services
   *************************************************************************/
  const myServices: IService[] = await fetchServices();

  async function fetchServices() {
    const services = await getServicesByUser(userId);
    if (!services) return null;
    return services.data;
  }

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  return (
    <>
      <CommonHeader title='' signOutButton={true} />

      {/* Profile Name */}
      <section className="flex-center pt-4 pb-2 lg:pt-6 lg:pb-4">
        <div className="flex flex-col items-center justify-center wrapper sm:justify-between">
          {/* profile image */}
          <div className="flex items-center justify-center w-40 h-40 overflow-hidden border border-black rounded-full">
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
          <h3 className='text-center sm:text-left font-thin text-xl'>{profile.location}, since {profile.createdAt.slice(0, 4)}</h3>
        </div>
      </section>

      <section className="flex mt-3 gap-x-2">
        <div className='flex items-center justify-center wrapper gap-x-4'>
          {/* Reviews */}
          <Link href="/profile/reviews">
            <div className="transition-all duration-300 ease-in-out rounded-full flex-center w-14 h-14 bg-primary text-grey-600 hover:bg-accent/60">
              <Pen className='w-9 h-9' />
            </div>
          </Link>

          {/* Saved */}
          <Link href="/profile/saved">
            <div className="transition-all duration-300 ease-in-out rounded-full flex-center w-14 h-14 bg-primary text-grey-600 hover:bg-accent/60">
              <BookmarkFilled className='w-9 h-9' />
            </div>
          </Link>
        </div>
      </section>
      {/* Switch for views */}
      <ProfileSwitchView
        myRequests={myRequests}
        myReservations={myReservations}
        myServices={myServices}
      />
    </>
  )
}

export default ProfilePage