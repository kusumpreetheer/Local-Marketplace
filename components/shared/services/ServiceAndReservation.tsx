import { IService } from "@/lib/database/models/service.model";
import { ServiceOffered, columns } from "./columns"
import { ServiceTable } from "./serviceTable"

import { auth } from "@clerk/nextjs";


async function getData(): Promise<ServiceOffered[]> {
  // Fetch data from API here.
  return [
    {
      id: "728ed52x",
      title: "Wall Painting",
      // rating: 4.5,
      description: "100",
      // availability: "Today",
      price: 100,
    },
    {
      id: "728ed52f",
      title: "Premium Wall Painting",
      // rating: 4.8,
      description: "20",
      // availability: "Today",
      price: 300,
    },
    {
      id: "728ed52A",
      title: "Quick & Dirty",
      // rating: 2.3,
      description: "200",
      // availability: "Today",
      price: 60,
    },
  ]
}

export default async function ServiceAndReservation({ service }: { service: IService }) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const formattedData = service.servicesOffered.map((item) => ({
    ...item,
    price: parseFloat(item.price),
  }));

  return (
    <div className="pt-6 pb-3">
      <ServiceTable columns={columns} data={formattedData} service={service} userId={userId}/>
    </div>
  )
}