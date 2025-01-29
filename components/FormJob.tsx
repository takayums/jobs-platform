"use client";

import { useActionState } from "react";
import InputForm from "./InputForm";
import Textarea from "./Textarea";

export default function FormJob() {
  const [state, action, pending] = useActionState();

  return (
    <div className="w-full mx-auto max-w-2xl">
      <form action="" className="space-y-3 w-full">
        <div className="flex gap-4">
          <InputForm
            label="Company Name"
            type="text"
            placeholder="Nama Company"
            name="companyName"
            className="input input-bordered w-full"
          />
          <InputForm
            label="Contact Phone"
            type="text"
            placeholder="No. Hp"
            name="contactPhone"
            className="input input-bordered w-full"
          />
          <InputForm
            label="Contact Email"
            name="contactEmail"
            placeholder="jhondoe@gmail.com"
            type="email"
          />
        </div>
        <div className="flex gap-4">
          <InputForm
            label="City"
            type="text"
            placeholder="Nama Kota"
            name="city"
          />
          <InputForm
            name="state"
            placeholder="Nama Jalan"
            type="text"
            label="State"
          />
        </div>
        <div className="flex gap-4">
          <InputForm
            label="Job Title"
            type="text"
            placeholder="Masukkan Job"
            name="title"
            className="input input-bordered w-full"
          />
          <InputForm
            name="salary"
            placeholder="Masukkan Salary"
            type="text"
            label="Salary"
          />
        </div>
        <div className="flex gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select className="select select-bordered" defaultValue={"default"}>
              <option disabled value="default">
                Pick one
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Beckend Developer</option>
              <option value="mobile">Mobile Developer</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Type</span>
            </div>
            <select className="select select-bordered" defaultValue={"default"}>
              <option disabled value="default">
                Pick one
              </option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="freetime">Free Time</option>
            </select>
          </label>
        </div>
        <Textarea label="Requirtmens" />
        <Textarea label="Benefits" />
        <Textarea label="Alamat" />
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
        <button type="submit" className="btn bg-primary-shade-100 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
