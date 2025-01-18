"use client";

import { deleteCategoryAction } from "@/actions/category";
import { toast } from "sonner";

export default function DeleteCategory({ id }: { id: string }) {
  const handleDelete = async () => {
    alert("anda yakin untuk menghapus data");
    await deleteCategoryAction(id);
    toast.warning(`Delete  ${id}`);
  };

  return (
    <button className="btn btn-sm btn-error text-white" onClick={handleDelete}>
      Delete
    </button>
  );
}
