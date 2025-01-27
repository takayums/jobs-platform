import Link from "next/link";
import TableJob from "@/components/TableJob";
import { CirclePlus } from "lucide-react";
import React from "react";

export default function JobPage() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-primary font-bold">Job</h1>
        <Link className="btn btn-neutral" href="/admin/job/create">
          Create
          <CirclePlus />
        </Link>
      </div>
      <div className="mt-4">
        <TableJob />
      </div>
    </section>
  );
}
