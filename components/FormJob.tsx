"use client";

import { useActionState, useEffect } from "react";
import InputForm from "./InputForm";
import Textarea from "./Textarea";
import { createJobAction } from "@/actions/job";
import { toast } from "sonner";
import { CategoryTypes } from "@/libs/types";

export default function FormJob({ category }: { category: CategoryTypes[] }) {
  const [state, action, pending] = useActionState(createJobAction, undefined);

  useEffect(() => {
    if (state?.data) {
      toast.success("Job Data Created Successfully");
    }
  }, [state?.data]);

  return (
    <div className="w-full mx-auto max-w-2xl">
      <form action={action} className="space-y-3 w-full">
        <div className="grid grid-cols-2 gap-4">
          <InputForm
            label="Company Name"
            type="text"
            placeholder="Nama Company"
            name="companyName"
            className="input input-bordered w-full"
            error={state?.errors?.companyName}
          />
          <InputForm
            label="Contact Phone"
            type="text"
            placeholder="No. Hp"
            name="contactPhone"
            className="input input-bordered w-full"
            error={state?.errors?.contactPhone}
          />
          <InputForm
            label="Contact Email"
            name="contactEmail"
            placeholder="jhondoe@gmail.com"
            type="email"
            error={state?.errors?.contactEmail}
          />
          <InputForm
            label="City"
            type="text"
            placeholder="Nama Kota"
            name="city"
            error={state?.errors?.city}
          />
          <InputForm
            label="Job Title"
            type="text"
            placeholder="Masukkan Job"
            name="title"
            className="input input-bordered w-full"
            error={state?.errors?.title}
          />
          <InputForm
            name="salary"
            placeholder="Masukkan Salary"
            type="number"
            label="Salary"
            error={state?.errors?.salary}
          />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              name="category"
              className="select select-bordered"
              defaultValue={"default"}
            >
              <option disabled value="default">
                Category Job
              </option>
              {category?.map((data: CategoryTypes) => (
                <option value={data._id} key={data._id}>
                  {data.name}
                </option>
              ))}
            </select>
            {state?.errors?.category && (
              <p className="text-sm text-error">{state.errors.category}</p>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Type</span>
            </div>
            <select
              name="jobType"
              className="select select-bordered"
              defaultValue={"default"}
            >
              <option disabled value="default">
                Type Job
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
            {state?.errors?.jobType && (
              <p className="text-sm text-red-600">{state.errors.jobType}</p>
            )}
          </label>
        </div>
        <Textarea
          label="Requirtmens"
          name="requirements"
          error={state?.errors?.requirements}
        />
        <Textarea
          label="Benefits"
          name="benefits"
          error={state?.errors?.benefits}
        />
        <Textarea
          label="Alamat"
          name="address"
          error={state?.errors?.address}
        />
        <div className="flex gap-5">
          <div className="form-control">
            <label className="label flex-col items-start cursor-pointer">
              <span className="label-text">Published</span>
              <input
                type="checkbox"
                className="toggle"
                name="isPublised"
                defaultChecked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label flex-col items-start cursor-pointer">
              <span className="label-text">Apakah Remote</span>
              <input
                type="checkbox"
                className="toggle"
                name="remote"
                defaultChecked
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {pending && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Submit
        </button>
      </form>
    </div>
  );
}
