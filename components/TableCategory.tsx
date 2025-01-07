import { getCategory } from "@/actions/action-category";
import { CategoryTypes } from "@/libs/types";

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
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.data?.map((item: CategoryTypes, index: number) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
