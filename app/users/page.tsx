import { User, columns } from "./columns";
import DataTable from "@/components/data-table";

interface PageProps {
  searchParams: { [key: string]: string | undefined };
}

export default function Page({ searchParams }: PageProps) {
  return (
    <div className="flex-col justify-center items-center container mx-auto py-10">
      <h1 className="flex mb-6 m-10 text-2xl font-bold text-center">User Managment Table</h1>
      <DataTable columns={columns} searchParams={searchParams} />
    </div>
  );
}
