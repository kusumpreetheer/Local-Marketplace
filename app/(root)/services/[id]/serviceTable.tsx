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
    <div className="pt-6 pb-3">
      <DataTable columns={columns} data={data} />
    </div>
  )
}