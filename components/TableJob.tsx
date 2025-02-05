import { getJobAction } from "@/actions/job";
import { JobTypes } from "@/libs/types";
import Link from "next/link";
import DeleteJob from "./DeleteJob";

export default async function TableJob() {
  const { data } = await getJobAction();

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
          {data?.map((item: JobTypes, index: number) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.companyName}</td>
              <td>{item.title}</td>

              <td className="space-x-2">
                <Link
                  href={`/admin/job/${item._id}`}
                  className="btn btn-sm btn-success text-white"
                >
                  Detail
                </Link>
                <Link
                  href={`/admin/job/${item._id}/edit`}
                  className="btn btn-sm btn-info text-white"
                >
                  Edit
                </Link>
                <DeleteJob id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
