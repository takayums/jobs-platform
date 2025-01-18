import TableCategory from "@/components/TableCategory";
import React from "react";

export default function Category() {
  return (
    <section>
      <h1 className="text-3xl text-primary font-bold">Category</h1>
      <div className="mt-4">
        <TableCategory />
      </div>
    </section>
  );
}
