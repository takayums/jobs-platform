import dbConnect from "@/config/db";
import Category from "@/models/category";

export async function GET() {
  try {
    await dbConnect();
    const data = await Category.find({});
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}

export async function POST(req: Request) {
  const { name, description } = await req.json();

  try {
    await dbConnect();
    const newCategory = new Category({
      name,
      description,
    });
    await newCategory.save();

    return Response.json({
      message: "Success",
      data: newCategory,
    });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}
