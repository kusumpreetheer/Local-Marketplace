"use client"

import react, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { serviceItemDefaultValues } from "@/constants"
import { serviceItemSchema } from "@/lib/validator"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { serviceFormSchema } from "@/lib/validator"
import { IService } from "@/lib/database/models/service.model"
import { ServiceItem } from '@/types'

type ServiceItemModalProps = {
  type: "Create" | "Update"
  serviceItem?: ServiceItem | null
  serviceItems: ServiceItem[]
  setServiceItems: (serviceItems: ServiceItem[]) => void
  setIsModalOpen: (isOpen: boolean) => void
  isModalOpen?: boolean
}

const ServiceItemModal = ({ type, serviceItem, serviceItems, setServiceItems, setIsModalOpen, isModalOpen }: ServiceItemModalProps) => {
  const [files, setFiles] = useState<File[]>([])
  const initialValues = serviceItem && type === 'Update'
    ? { ...serviceItem }
    : serviceItemDefaultValues;

  // form setup with react-hook-form and zod
  const form = useForm<z.infer<typeof serviceItemSchema>>({
    resolver: zodResolver(serviceItemSchema),
    defaultValues: initialValues
  })

  // submit form
  function onSubmit(values: z.infer<typeof serviceItemSchema>) {
     // assign an _id to newServiceID
    setServiceItems && setServiceItems([...serviceItems, { ...values, id: Math.random().toString() }])
    setIsModalOpen(false)
    form.reset()
  }

  return (
    <section className="px-4 pt-2 md:px-20">
      <div className='cursor-pointer border-y hover:bg-grey-50'>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {/* Content */}
          <DialogContent className="sm:max-w-[425px] bg-primary">
            <DialogHeader>
              <DialogTitle>Add a service item</DialogTitle>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Service Image */}

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


                {/* price */}
                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <div className="flex-center h-[54px] w-full overflow-hidden rounded-sml bg-grey-50 px-4 py-2">
                            <Input
                              type="number"
                              placeholder="Price" {...field}
                              className="border-0 p6-regular bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
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

              </form>
            </Form>


          </DialogContent>
        </Dialog>
      </div>

    </section>
  )
}

export default ServiceItemModal

