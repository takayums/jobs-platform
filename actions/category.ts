"use server";

import { categoryFormSchema, FormStateCategory } from "@/libs/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategoryAction(
  state: FormStateCategory,
  formData: FormData,
) {
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
    const category = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/category`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, description }),
      },
    );

    if (!category.ok) {
      return { error: "Failed to create category" };
    }
    const data = await category.json();
    return data;
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin/category");
  redirect("/admin/category");
}

export async function editCategoryAction(
  state: FormStateCategory,
  formData: FormData,
) {
  const slug = state;
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
    const category = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/category/${slug}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, description }),
      },
    );

    if (!category.ok) {
      return { error: "Failed to create category" };
    }
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin/category");
  redirect("/admin/category");
}

export async function deleteCategoryAction(id: string) {
  const slug = id;
  try {
    const category = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/category/${slug}`,
      { method: "DELETE" },
    );

    if (!category.ok) {
      return { error: "Failed to create category" };
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/category");
}

export async function getCategory() {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/category`,
    );
    const item = await data.json();
    return item;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryById(slug: string) {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST}/api/category/${slug}`,
      {
        method: "GET",
      },
    );
    const item = await data.json();
    return item;
  } catch (error) {
    console.log(error);
  }
}
