"use server";

import { categoryFormSchema, FormState } from "@/libs/utils";

export async function categoryAction(state: FormState, formData: FormData) {
  const validatedFields = categoryFormSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description } = validatedFields.data;

  try {
    const category = await fetch(`${process.env.LOCALHOST}/api/category`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    const data = await category.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory() {
  try {
    const data = await fetch(`${process.env.LOCALHOST}/api/category`);
    const item = await data.json();
    return item;
  } catch (error) {
    console.log(error);
  }
}
