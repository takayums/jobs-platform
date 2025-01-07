import TableCategory from "@/components/TableCategory";

export default function Dashboard() {
  return (
    <section>
      <h1 className="text-3xl text-primary font-bold">Dashboard</h1>
      <div className="mt-4">
        <TableCategory />
      </div>
    </section>
  );
}
