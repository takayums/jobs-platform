import dbConnect from "@/config/db";
import Category from "@/models/category";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  try {
    dbConnect();
    const data = await Category.findById(slug);
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  const { name, description } = await request.json();
  try {
    dbConnect();
    const data = await Category.findByIdAndUpdate(slug, { name, description });
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  try {
    dbConnect();
    const data = await Category.findByIdAndDelete({ _id: slug });
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}
