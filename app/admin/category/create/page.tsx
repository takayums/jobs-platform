import FormCategory from "@/components/FormCategory";
import React from "react";

export default function CreateCategory() {
  return (
    <section>
      <h1 className="font-bold text-3xl text-primary">Category</h1>
      <div className="mt-4">
        <FormCategory />
      </div>
    </section>
  );
}
