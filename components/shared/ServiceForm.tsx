"use client"

import react, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/createServiceTable"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { FileUploader } from "@/components/shared/FileUploader"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { serviceFormSchema } from "@/lib/validator"
import { useUploadThing } from '@/lib/uploadthing'
import { serviceDefaultValues } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { IService } from "@/lib/database/models/service.model"
import { createService } from "@/lib/actions/service.actions"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Card from "@/components/shared/Card";
import Dropdown from "@/components/shared/Dropdown";
import Confetti from 'react-confetti';
import dummyServices from "@/constants/dummyServices"
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ServiceItem } from '@/types'

type ServiceFormProps = {
  userId: string
  type: "Create" | "Update"
  service?: IService,
  serviceId?: string
  serviceItem?: ServiceItem | null
  serviceItems?: ServiceItem[]
  setServiceItems: (serviceItems: ServiceItem[]) => void
  setIsModalOpen: (isOpen: boolean) => void
}

const ServiceForm = ({
  userId, type, service, serviceId, setIsModalOpen,
  serviceItem: parentServiceItem,
  serviceItems: parentServiceItems,
  setServiceItems: parentSetServiceItems }: ServiceFormProps) => {

  const [files, setFiles] = useState<File[]>([])
  const initialValues = service && type === 'Update'
    ? { ...service, servicesOffered: Array.from(service.servicesOffered.values()) }
    : serviceDefaultValues;
  const [opened, { open, close }] = useDisclosure(false); // for confetti
  const [alertOpen, setAlertOpen] = useState(false) // for alert dialog
  const [deleteItem, setDeleteItem] = useState<number>(0) // for deleting service item
  const { startUpload } = useUploadThing('imageUploader')
  const [newService, setNewService] = useState<IService>()
  const [serviceItems, setServiceItems] = useState<ServiceItem[]>([])
  const [noServiceItem, setNoServiceItem] = useState<boolean>(false)

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: initialValues
  })

  // submit form
  async function onSubmit(values: z.infer<typeof serviceFormSchema>) {

    // manually check whether we have at least one service item
    if (serviceItems.length === 0) {
      setNoServiceItem(true)
      return;
    }

    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files)
      if (!uploadedImages) { return }
      uploadedImageUrl = uploadedImages[0].url
    }

    if (type === 'Create') {

      try {
        const createdService = await createService({
          service: {
            ...values,
            servicesOffered: serviceItems,
            imageUrl: uploadedImageUrl
          },
          userId,
          path: '/profile'
        })

        if (createdService) {
          form.reset();
          setNewService(createdService);
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


  // update service items
  useEffect(() => {
    setServiceItems(parentServiceItems || [])
  }, [parentServiceItems])


  // delete service item
  const deleteServiceItem = (index: number) => {
    setAlertOpen(true);
    setDeleteItem(index);
  }

  // delete alert
  const DeleteAlert = () => {
    return (
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent className='text-black bg-primary'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your service item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  // confirm delete
  const confirmDelete = () => {
    setAlertOpen(false);
    const newServiceItems = serviceItems.filter((_, i) => i !== deleteItem);
    setServiceItems(newServiceItems);
    parentSetServiceItems(newServiceItems)
  }


  /***********************************************************************************
   * Success Modal
   **********************************************************************************/

  const SuccessModal = () => {
    // confetti props
    const confettiProps = typeof window !== 'undefined' ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {};

    return (
      <Modal
        opened={opened}
        onClose={close}
        title=""
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <div className='flex-center flex-col gap-7'>
          <h1 className="h4-medium text-center">Service created successfully!</h1>
          <Link href={`/services/${newService?._id}`} className='mb-7'>
            <Button variant="default">View Service</Button>
          </Link>
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

    )
  }

  /***********************************************************************************
   * Render
   **********************************************************************************/

  return (
    <section className="px-4 pt-2 md:px-20">
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

          {/* Service Description */}
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-20">
                    <Textarea placeholder="Description" {...field} className="rounded-sm textarea" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Services offered */}
          <div className='p-2 border-1 bg-grey'>
            <Table>
              <TableCaption>
                {/* <ServiceItemModal userId={userId} type="Create"/> */}
                <Button type='button' onClick={() => setIsModalOpen(true)}
                  className='w-full bg-transparent rounded-none hover:bg-grey-50'>+ Add Service</Button>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[30%]'>Service Item</TableHead>
                  <TableHead className='w-[50%]'>Description</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceItems.length > 0 ? (
                  serviceItems.map((serviceItem, index) => (
                    <TableRow key={index}>
                      <TableCell>{serviceItem.title}</TableCell>
                      <TableCell>{serviceItem.description}</TableCell>
                      <TableCell className="text-right">{serviceItem.price ? "CA$" + serviceItem.price : "n/a"}</TableCell>
                      <TableCell className="cursor-pointer" onClick={() => deleteServiceItem(index)}><MdOutlineModeEdit /></TableCell>
                      <TableCell className="cursor-pointer" onClick={() => deleteServiceItem(index)}><MdDelete /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className={`${noServiceItem ? "text-red-500" : "text-black/70"}`}>
                      No service items provided.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Location & Website */}
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
                      <Input placeholder="Service location" {...field} className="input-field" />
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
                      <Input placeholder="Website" {...field} className="input-field" />
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
            className="w-full col-span-2 button"
          >
            {form.formState.isSubmitting ? (
              'Submitting...'
            ) : `${type} `}
          </Button>


          {/* Delete Alert */}
          <DeleteAlert />

          {/* Successful Modal */}
          <SuccessModal />

        </form>
      </Form>
    </section >
  )
}

export default ServiceForm