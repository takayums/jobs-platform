import { getCategoryById } from "@/actions/category";
import EditCategory from "@/components/EditCategory";

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { data, message } = await getCategoryById(slug);
  return (
    <section>
      <EditCategory data={data} />
    </section>
  );
}
