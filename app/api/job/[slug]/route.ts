import dbConnect from "@/config/db";
import Job from "@/models/job";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  try {
    dbConnect();
    const data = await Job.findByIdAndDelete({ _id: slug });
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}
