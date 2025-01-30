import dbConnect from "@/config/db";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    jobType,
    title,
    salary,
    category,
    remote,
    isPublised,
    requirements,
    benefits,
    address,
    city,
    companyName,
    contactEmail,
    contactPhone,
    clerkId,
  } = await req.json();

  try {
    await dbConnect();
    const newJob = new Job({
      jobType,
      title,
      salary,
      category,
      remote,
      isPublised,
      requirements,
      benefits,
      address,
      city,
      companyName,
      contactEmail,
      contactPhone,
      clerkId,
    });

    await newJob.save();

    return NextResponse.json({
      message: "Success",
      data: newJob,
    });
  } catch (errors) {
    console.log("erorr: ", errors);
    return NextResponse.json(
      {
        errors: errors,
      },
      { status: 500 },
    );
  }
}
