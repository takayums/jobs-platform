import dbConnect from "@/config/db";
import Job from "@/models/job";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  try {
    dbConnect();
    const data = await Job.findById(slug);
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
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
    return Response.json(
      {
        errors: error,
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
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
  } = await request.json();
  try {
    dbConnect();
    const data = await Job.findByIdAndUpdate(slug, {
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
    return Response.json({ message: "Success", data: data });
  } catch (error) {
    return Response.json({
      errors: error,
    });
  }
}
