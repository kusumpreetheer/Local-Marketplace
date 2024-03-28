import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { dummyServices } from '@/constants/dummyServices';
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
import { Slash } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ServiceTable from '@/components/shared/ServiceTable/ServiceTable';
// import { getServiceById } from '@/lib/actions/service.actions';

const ServicePost = async ({ params: { id }, searchParams }: SearchParamProps) => {

  // const service = await getServiceById(id);
  const service = dummyServices.find((service) => service?._id === id);

  const BreadcrumbBar = () => {
    return (
      <div className='py-4'>
        <Breadcrumb >
          <BreadcrumbList className='p5-regular'>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" >{service.category.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{service?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    )
  }

  return (
    <>
      <section className=''>
        <CommonHeader title={service?.title} savedButton={true} />
        <div className='wrapper'>
          <div className='px-8 md:pt-4'>
            <BreadcrumbBar />
            {/* Provider Info */}
            <section className="flex justify-center bg-dotted-pattern bg-contain pb-4 md:py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl gap-y-4 gap-x-4">
                {/* hero image */}
                <div className='w-full h-48 md:h-80 flex justify-center overflow-hidden rounded-md'>
                  <Image
                    src={service?.imageUrl}
                    alt="hero image"
                    width={1000}
                    height={1000}
                    className='object-cover '
                  />
                </div>
                {/* Details */}
                <div className="w-full md:h-80 flex justify-evenly flex-col gap-1 bg-primary px-4 rounded-md">
                  {/* image, name, rating */}
                  <div className="flex-between my-4 mx-2">
                    <div className='flex-between gap-x-3'>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          priority
                          src={service?.provider?.imageUrl ?? ''}
                          alt="Profile"
                          width={500}
                          height={500}
                        />
                      </div>
                      <p className="h5-medium text-end">{service?.provider?.firstName} {service?.provider?.lastName}</p>
                    </div>
                    {/* Rating & Reviews */}
                    <div className="flex items-center">
                      <StarEmpty className="w-4 h-4 mx-2" />
                      <p className="">{service?.averageRating}</p>
                      <p className="text-gray-500"> ({service?.totalReviews})</p>
                    </div>
                  </div>
                  {/* Contact Info */}
                  <div className='flex flex-col items-start justify-center w-full gap-y-2 px-4 pb-4'>
                    {/* Phone */}
                    <div className="flex items-center gap-x-6">
                      <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <a href={`tel:$`} className="text-black">{service?.provider?.contactNumber}</a>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-x-6">
                      <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <a href={`mailto:${service?.provider?.email}`} className="text-black">{service?.provider?.email}</a>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-x-6">
                      <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <LocationPin className="w-5 h-5" />
                      </div>
                      <p className="">{service?.provider?.location}</p>
                    </div>
                    {/* Website */}
                    <div className="flex items-center gap-x-6">
                      <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <a href={'{service?.provider?.website}'} className="text-black" target="_blank" rel="noopener noreferrer">{service?.provider?.website}</a>
                    </div>
                    {/* Service Description (for desktop) */}
                    <div className='mx-2 md:my-2'>
                      <p className='text-m'>{service?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Offered */}
            <ServiceTable service={service} />

            {/* Reviews */}
            <ServiceReviews service={service} />
          </div>

          {/* Services with the same category */}
          <section className="my-8 flex flex-col md:gap-y-0">
            <h2 className="h4-semibold px-8">Related Services</h2>
            <div className='pl-4'>
              <Collection
                direction="horizontal"
                itemType="service"
                items={dummyServices}
                nextPrevButton={true}
              />
            </div>
          </section>

        </div>
      </section>
    </>
  )
}

export default ServicePost