"use client"

import react, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { serviceFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { serviceDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import { useUploadThing } from '@/lib/uploadthing'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useRouter } from "next/navigation"
import { IService, ServiceItem } from "@/lib/database/models/service.model"
import { createService } from "@/lib/actions/service.actions"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Card from "./Card"
import Link from "next/link"
import Confetti from 'react-confetti';
import dummyServices from "@/constants/dummyServices"
import { set } from 'mongoose'

type ServiceFormProps = {
  userId: string
  type: "Create" | "Update"
  service?: IService,
  serviceId?: string
}

const ServiceForm = ({ userId, type, service, serviceId }: ServiceFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues = service && type === 'Update'
    ? { ...service }
    : serviceDefaultValues;
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const { startUpload } = useUploadThing('imageUploader')

  const [ newServiceId, setNewServiceId ] = useState<string | null>(null)

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: initialValues
  })

  // submit form
  async function onSubmit(values: z.infer<typeof serviceFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages) { return }
      uploadedImageUrl = uploadedImages[0].url
    }

    if (type === 'Create') {
      try {
        const newService = await createService({
          service: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: '/profile'
        })

        if (newService) {
          form.reset();
          setNewServiceId(newService._id);
          open();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  // if(type === 'Update') {
  //   if(!serviceId) {
  //     router.back()
  //     return;
  //   }

  //   try {
  //     console.log('Update service');

  // const updatedService = await updateService({
  //   userId,
  //   service: { ...values, imageUrl: uploadedImageUrl, _id: serviceId },
  //   path: `/services/${serviceId}`
  // })

  // if(updatedService) {
  //   form.reset();
  //   router.push(`/services/${updatedService._id}`)
  // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const confettiProps = typeof window !== 'undefined' ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : {};

  return (
    <section className="px-4 md:px-20 pt-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Service Image */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-5 md:flex-row">

            {/* Service Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Service title" {...field} className="input-field" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Category */}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Dropdown onChangeHandler={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            {/* Service Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <Textarea placeholder="Description" {...field} className="textarea rounded-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            {/* Service Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/location-grey.svg"
                        alt="location"
                        width={24}
                        height={24}
                      />
                      <Input placeholder="Service location or Online" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Service Price */}
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/dollar.svg"
                        alt="dollar"
                        width={24}
                        height={24}
                        className="filter-grey"
                      />
                      <Input 
                        type="number" 
                        placeholder="Price" {...field} 
                        className="p6-regular border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                      />
                      <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Service</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                  id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                              </div>

                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Url */}
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />

                      <Input placeholder="Url" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting} 
            className="button col-span-2 w-full"
          >
            {form.formState.isSubmitting ? (
              'Submitting...'
            ) : `${type} `}
          </Button>

        {/* successful confetti */}
        <Modal
          opened={opened}
          onClose={close}
          title=""
          transitionProps={{ transition: 'fade', duration: 200 }}
        >

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mt-5 text-left">Service Created Successfully!</h1>

            <div className="my-20">
              {/* Display the card of the new service */}
              <Card
                direction="vertical"
                itemType="service"
                item={dummyServices[0]}
                hasButton={false}
              />
            </div>

            {/* Find the service under profile > services */}
            <h3 className="text-3xl font-semibold text-center mt-5">
              Find the service under <br />
              <Link href={`/services/${newServiceId}`} className="text-accent-light underline">
                profile {'>'} services
              </Link>
            </h3>
          </div>

          {/* show confetti */}
          <Confetti
            {...confettiProps}  
            numberOfPieces={500}
            recycle={false}
            initialVelocityY={10}
            initialVelocityX={10}
            colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
          /> 

        </Modal>
        </form>
      </Form>
    </section>
  )
}

export default ServiceForm