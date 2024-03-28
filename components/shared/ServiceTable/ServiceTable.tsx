import { ServiceOffered, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<ServiceOffered[]> {
  // Fetch data from API here.
  return [
    {
      id: "728ed52f",
      service: "Wall Painting",
      rating: 4.5,
      comments: 100,
      availability: "Today",
      price: 100,
    },
    {
      id: "728ed52f",
      service: "Premium Wall Painting",
      rating: 4.8,
      comments: 20,
      availability: "Today",
      price: 300,
    },
    {
      id: "728ed52f",
      service: "Quick & Dirty",
      rating: 2.3,
      comments: 200,
      availability: "Today",
      price: 60,
    },


  ]
}

export default async function ServiceTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}




// "use client"

// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Checkbox } from "@/components/ui/checkbox"
// import { IService } from '@/lib/database/models/service.model'

// const ServiceTable = ({ service }: { service: IService[] }) => {

//   const handleOnClick = () => {
//     console.log('clicked')
//   }

//   return (
//       <section className="flex flex-col mt-2 gap-8 md:gap-4 ">
//         <h2 className="h4-semibold">Services Offered</h2>
//         {/* TABLE */}
//         <div className="mx-auto w-full overflow-auto rounded-lg shadow-md">
//           <Table >
//             <TableHeader>
//               <TableRow 
//                 onClick={handleOnClick}
//                 className='bg-secondary [&_*]:text-accent-foreground hover:bg-accent cursor-pointer'>
//                 <TableHead className=""><Checkbox/></TableHead>
//                 <TableHead className="">Service</TableHead>
//                 <TableHead>Availability</TableHead>
//                 <TableHead className="text-right">Price</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody className='bg-primary'>
//               {service?.servicesOffered && Object.keys(service?.servicesOffered).map((serviceKey, index) => (
//                 <TableRow 
//                   key={index} 
//                   className='hover:bg-accent cursor-pointer'

//                 >
//                   <TableCell className="font-medium"><Checkbox/></TableCell>
//                   <TableCell className="font-medium">{service?.servicesOffered[serviceKey].title}</TableCell>
//                   <TableCell>Today</TableCell>
//                   <TableCell className="text-right">{service?.servicesOffered[serviceKey].price}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table >
//         </div>
//       </section>
//   )
// }

// export default ServiceTable