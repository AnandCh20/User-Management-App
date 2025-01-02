"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown  } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: number
  title: string
  body: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "body",
    header: "Body",
  },
  {
    accessorKey: "id",
    header: "Id",
  },
]
