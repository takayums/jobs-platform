"use client";

import { deleteJobAction } from "@/actions/job";
import { toast } from "sonner";

export default function DeleteJob({ id }: { id: string }) {
  const handleDelete = async () => {
    alert("anda yakin untuk menghapus data");
    await deleteJobAction(id);
    toast.warning(`Delete  ${id}`);
  };

  return (
    <button className="btn btn-sm btn-error text-white" onClick={handleDelete}>
      Delete
    </button>
  );
}
