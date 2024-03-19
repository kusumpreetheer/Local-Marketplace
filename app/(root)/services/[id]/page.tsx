import React, { useEffect, useState } from 'react'
import { dummyServices } from '@/constants/dummyServices';
import { dummyUsers } from '@/constants/dummyUsers';
import { ServiceItem } from '@/lib/database/models/service.model';
import Collection from '@/components/shared/Collection';
import { SearchParamProps } from '@/types'
import Image from 'next/image'
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { Phone } from '@/public/assets/icons/Phone';
import { Mail } from '@/public/assets/icons/Mail';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { Globe } from '@/public/assets/icons/Globe';
import ServiceReviews from '@/components/shared/ServiceReviews';
import CommonHeader from '@/components/shared/CommonHeader';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

const ServicePost = async ({ params: { id }, searchParams }: SearchParamProps) => {

  // dummy for now, later fetch from the database

  const service = dummyServices[Number(id)-1] as ServiceItem;
  console.log("service: ", service);
  
  const serviceProvider = dummyUsers.find(user => user._id === service.serviceProvider[0].userId);

  return (
    <>
      {/* Header */}
      <section>
        <CommonHeader title={service.title} savedButton={true} />
      </section>

      {/* Provider Info */}
      <section className="justify-center mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl ">

          <div className='h-48 overflow-auto my-4 relative rounded-lg'>
            <div className="absolute inset-0 bg-white">
              {/* <Swiper
                  
                  spaceBetween={50}
                  slidesPerView={3}
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                 */}
              <Image
                src={service.image[0]}
                alt="hero image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4"> {/* Add gap-4 for spacing between items */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
              <Image priority src={serviceProvider?.imageURL ?? ''} alt="Profile" width={40} height={40} className="rounded-full" />
            </div>
            <p className="">{serviceProvider?.firstName} {serviceProvider?.lastName}</p>
          </div>
          <section>
            <div className="flex items-center gap-2">
              <StarEmpty className="w-5 h-5" />
              <p className="">{service.averageRating}</p>
              <p className="text-gray-500">({service.totalReviews})</p>
            </div>
          </section>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <a href={`tel:$`} className="text-black">{serviceProvider?.contactNumber}</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <a href={`mailto:${serviceProvider?.email}`} className="text-black">{serviceProvider?.email}</a> {/* Link email for email */}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <LocationPin className="w-5 h-5" />
            </div>
            <p className="">{serviceProvider?.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <a href={'{serviceProvider?.website}'} className="text-black" target="_blank" rel="noopener noreferrer">{serviceProvider?.website}</a> {/* Link website and open in new tab */}
          </div>
        </div>

        <div className='my-7'>
          <p>{service.description}</p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="wrapper flex flex-col gap-8 md:gap-10">
        <h2 className="h2-bold">Services Offered</h2>
        <div className="w-full overflow-auto rounded-lg shadow-md">
          <table className="w-full min-w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-500 text-gray-100 text-sm font-medium">
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(service.servicesOffered).map((serviceKey, index) => (
                <tr key={index} className="bg-gray-100 text-gray-600 text-sm">
                  <td className="px-4 py-2">{service.servicesOffered[serviceKey as keyof typeof service.servicesOffered].title}</td>
                  <td className="px-4 py-2">${service.servicesOffered[serviceKey as keyof typeof service.servicesOffered].price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reviews */}
      <ServiceReviews service={service} />

      {/* Services with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Services</h2>

        <Collection
          selectedCategory={"All_Services"}
          title={""}
        //   data={relatedServices?.data}
        //   emptyTitle="No Events Found"
        //   emptyStateSubtext="Come back later"
        //   collectionType="All_Events"
        //   limit={3}
        //   page={searchParams.page as string}
        //   totalPages={relatedServices?.totalPages}
        />
      </section>
    </>
  )
}

export default ServicePost;