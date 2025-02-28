import Link from "next/link";
import TableCategory from "@/components/TableCategory";
import { CirclePlus } from "lucide-react";
import React from "react";

export default function Category() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-primary font-bold">Category</h1>
        <Link className="btn btn-neutral" href="/admin/category/create">
          Create
          <CirclePlus />
        </Link>
      </div>

      <div className="mt-4">
        <TableCategory />
      </div>
    </section>
  );
}
