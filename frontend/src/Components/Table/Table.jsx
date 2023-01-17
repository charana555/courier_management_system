import { BsInfoSquareFill } from "react-icons/bs";

const rows = [
  "Order ID",
  "S-Name",
  "S-Phone",
  "R-Name",
  "R-Phone",
  // "Date",
  "R-City",
  "R-Pincode",
  "Details",
];

const Table = ({ values }) => {
  return (
    <table className=" w-full ">
      <thead className=" bg-gray-300">
        <tr>
          {rows.map((row, i) => (
            <th
              key={i}
              className=" p-3 font-semibold text-sm tracking-wide text-center"
            >
              {row}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200 ">
        {values.map((order, i) => (
          <tr key={i} className={i % 2 ? "bg-slate-200" : "bg-slate-50"}>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order?.OR_ID}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order?.cname}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order?.cphone}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order.NAME}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order.PHONE}
            </td>
            {/* <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order.Date}
            </td> */}
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order.CITY}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {order.PINCODE}
            </td>
            {order.STATUS === "Pending" && (
              <td className="  font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
                <BsInfoSquareFill className=" text-2xl m-auto font-bold text-[#1d4f9c] cursor-pointer" />
              </td>
            )}
            {order.STATUS === "Completed" && (
              <td className="  font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
                <BsInfoSquareFill className=" text-2xl m-auto font-bold text-[#16a34a] cursor-pointer" />
              </td>
            )}
            {order.STATUS === "Cancelled" && (
              <td className="  font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
                <BsInfoSquareFill className=" text-2xl m-auto font-bold text-[#e02424] cursor-pointer" />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
