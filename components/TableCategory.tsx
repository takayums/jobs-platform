import Link from "next/link";
import { getCategory } from "@/actions/category";
import { CategoryTypes } from "@/libs/types";
import DeleteCategory from "./DeleteCategory";

export default async function TableCategory() {
  const data = await getCategory();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.data?.map((item: CategoryTypes, index: number) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className="space-x-2">
                <Link
                  href={`/admin/category/${item._id}/edit`}
                  className="btn btn-sm btn-info text-white"
                >
                  Edit
                </Link>
                <DeleteCategory id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
