"use client";

import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { createCategoryAction } from "@/actions/category";

export default function FormCategory() {
  const [state, action, pending] = useActionState(
    createCategoryAction,
    undefined,
  );

  useEffect(() => {
    if (state?.data) {
      toast.success("Data Sent Successfully");
    }
  }, [state?.data]);

  return (
    <form action={action} className="space-y-3">
      <label className="form-control w-full max-w-xs">
        <div className="label ">
          <span className="label-text text-lg">Name Category</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          name="name"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      {state?.errors?.name && (
        <p className="text-sm text-error">{state.errors.name}</p>
      )}
      <label className="form-control w-full max-w-xs">
        <div className="label ">
          <span className="label-text text-lg">Description Category</span>
        </div>
        <textarea
          name="description"
          className="textarea text-base textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
      </label>
      {state?.errors?.description && (
        <p className="text-sm text-error">{state.errors.description}</p>
      )}
      <button type="submit" className="btn btn-primary">
        {pending && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Submit
      </button>
    </form>
  );
}
