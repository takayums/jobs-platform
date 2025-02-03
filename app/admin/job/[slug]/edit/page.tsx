import { getCategory, getCategoryById } from "@/actions/category";
import { getJobById } from "@/actions/job";
import EditJob from "@/components/EditJob";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data } = await getJobById(slug);

  const { data: category } = await getCategory();
  return (
    <div>
      <EditJob data={data} category={category} />
    </div>
  );
}
