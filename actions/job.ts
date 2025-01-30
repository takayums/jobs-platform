"use server";

import { FormStateJob, jobFormSchema } from "@/libs/utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Action Create Job
export async function createJobAction(
  previouseState: FormStateJob,
  formData: FormData,
) {
  const { userId } = await auth();

  const validatedFields = jobFormSchema.safeParse({
    jobType: formData.get("jobType"),
    title: formData.get("title"),
    salary: parseInt(formData.get("salary") as string),
    category: formData.get("category"),
    remote: formData.get("remote") === "on" ? true : false,
    isPublised: formData.get("isPublised") === "on" ? true : false,
    requirements: formData.get("requirements"),
    benefits: formData.get("benefits"),
    address: formData.get("address"),
    city: formData.get("city"),
    companyName: formData.get("companyName"),
    contactPhone: formData.get("contactPhone"),
    contactEmail: formData.get("contactEmail"),
    clerkId: userId,
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

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
  } = validatedFields.data;

  try {
    const job = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/job`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
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
      }),
    });

    if (!job.ok) {
      return { error: "Failed to create Job" };
    }
  } catch (error) {
    console.log("error action", error);
  }
  revalidatePath("/admin/job");
  redirect("/admin/job");
}

// Action Update Job
//
// Action Read Job
export async function getJobAction() {
  try {
    const job = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/job`);
    const item = await job.json();
    return item;
  } catch (error) {
    console.log(error);
  }
}

// Action Delete Job
export async function deleteJobAction(id: string) {
  const slug = id;
  try {
    const job = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/job/${slug}`,
      { method: "DELETE" },
    );

    if (!job.ok) {
      return { error: "Failed to delete job" };
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/job");
}
