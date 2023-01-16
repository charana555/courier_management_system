import { BsInfoSquareFill } from "react-icons/bs";

const rows = [
  "Order ID",
  "S-Name",
  "S-Phone",
  "R-Name",
  "R-Phone",
  "Date",
  "R-City",
  "R-Pincode",
  "Details",
];

const values = [
  {
    Order_ID: "Or001",
    S_Name: "Ajay",
    S_Phone: "8967451236",
    R_Name: "Abhishek",
    R_Phone: "4587963214",
    Date: "16/01/2023",
    R_City: "Banglore",
    R_Pincode: "540064",
  },
  {
    Order_ID: "Or001",
    S_Name: "Ajay",
    S_Phone: "8967451236",
    R_Name: "Abhishek",
    R_Phone: "4587963214",
    Date: "16/01/2023",
    R_City: "Banglore",
    R_Pincode: "540064",
  },
];

const Table = () => {
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
        {values.map((value, i) => (
          <tr key={i} className={i % 2 ? "bg-slate-200" : "bg-slate-50"}>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.Order_ID}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.S_Name}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.S_Phone}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.R_Name}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.R_Phone}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.Date}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.R_City}
            </td>
            <td className=" font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              {value.R_Pincode}
            </td>
            <td className="  font-bold whitespace-nowrap px-3 py-1.5 text-sm text-gray-800 text-center">
              <BsInfoSquareFill className=" text-2xl m-auto font-bold text-[#1d4f9c] cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
