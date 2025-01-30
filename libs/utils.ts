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
  jobType: z.nativeEnum(JOB_TYPE, {
    message: "Job Type harus fulltime, parttime, contract",
  }),
  title: z.string().min(5, { message: "Judul harus lebih dari 5 karakter" }),
  salary: z.coerce
    .number()
    .positive()
    .gt(3000000, { message: "Gaji minimal adalah Rp. 3.000.000" }),
  category: z.string({ message: "Harus ada category job" }),
  remote: z.coerce.boolean(),
  isPublised: z.coerce.boolean(),
  requirements: z.string().min(5, { message: "Minimal 5 huruf karakter" }),
  benefits: z.string().min(5, { message: "Minimal 5 huruf karakter" }),

  address: z.string().min(5, { message: "Minimal 5 huruf karakter" }),
  city: z.string().min(5, { message: "Minimal 5 huruf karakter" }),
  companyName: z.string().min(5, { message: "Company is required" }),
  contactPhone: z.string().min(5, { message: "Minimal 5 huruf karakter" }),
  contactEmail: z.string().email(),
  clerkId: z.string(),
});

export type FormStateCategory =
  | {
      errors?: {
        name?: string[];
        description?: string[];
      };
      message?: string;
    }
  | undefined;

export type FormStateJob =
  | {
      errors?: {
        jobType?: string[];
        title?: string[];
        salary?: string[];
        category?: string[];
        remote?: string[];
        isPublised?: string[];
        requirements?: string[];
        benefits?: string[];
        address?: string[];
        city?: string[];
        companyName?: string[];
        contactPhone?: string[];
        contactEmail?: string[];
        clerkId?: string[];
      };
      message?: string;
    }
  | undefined;
