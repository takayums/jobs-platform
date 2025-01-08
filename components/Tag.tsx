export default function Tag({ name }: { name: string }) {
  return (
    <button className="btn rounded-3xl border border-gray-200 text-sm font-medium bg-white hover:bg-primary-shade-40 hover:border-primary-shade-40 hover:text-white capitalize text-primary-shade-10">
      {name}
    </button>
  );
}
