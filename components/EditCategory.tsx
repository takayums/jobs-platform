"use client";

import { editCategoryAction } from "@/actions/category";
import { useActionState } from "react";

export default function EditCategory({ data }) {
  const [state, action, pending] = useActionState(editCategoryAction, data._id);
  return (
    <div>
      <h1 className="text-3xl text-primary font-bold">Edit Category Page</h1>
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
            defaultValue={data.name}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label ">
            <span className="label-text text-lg">Description Category</span>
          </div>
          <textarea
            name="description"
            className="textarea text-base textarea-bordered h-24"
            placeholder="Bio"
            defaultValue={data.description}
          ></textarea>
        </label>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
