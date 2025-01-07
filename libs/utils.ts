import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: " Name must be at least 2 character long." })
    .trim(),
  description: z
    .string()
    .min(5, { message: " Description must be at least 5 character long." })
    .trim(),
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
