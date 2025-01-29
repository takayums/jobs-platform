import { z } from "zod";

export enum JOB_TYPE {
  FULL_TIME = "full-time",
  PART_TIME = "part-time",
  CONTRACT = "contract",
}

export const categoryFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama harus lebih dari 3 karakter" })
    .trim(),
  description: z
    .string()
    .min(5, { message: "Descripsi harus lebih dari 5 karakter" })
    .trim(),
});

export const jobFormSchema = z.object({
  jobType: z.nativeEnum(JOB_TYPE),
  title: z.string().min(5, { message: "Judul harus lebih dari 5 karakter" }),
  salary: z
    .number()
    .positive()
    .gt(3000000, { message: "Gaji minimal adalah Rp. 3.000.000" }),
  category: z.string(),
  remote: z.boolean(),
  isPublised: z.boolean(),
  requirements: z.string(),
  benefits: z.string(),
  address: z.string(),
  city: z.string(),
  companyName: z.string(),
  contactPhone: z.string(),
  contactEmail: z.string().email(),
  clerkId: z.string(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        description?: string[];
      };
      message?: string;
    }
  | undefined;
