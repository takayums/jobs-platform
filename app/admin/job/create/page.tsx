import { getCategory } from "@/actions/category";
import FormJob from "@/components/FormJob";

export default async function CreateJob() {
  const { data } = await getCategory();

  return (
    <section>
      <h1 className="text-3xl text-primary font-bold text-center mb-4">
        Create Jobs
      </h1>
      <FormJob category={data} />
    </section>
  );
}
