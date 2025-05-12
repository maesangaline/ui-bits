import { SortableTable } from "@/components/sortable-table"

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">Financial Products</h1>
      <SortableTable />
    </div>
  )
}
