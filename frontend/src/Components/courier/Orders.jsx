import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch.js";

import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";
import NewCourierModal from "../Modal/NewCourierModal";

const Orders = () => {
  const [toggle, setToggle] = useState(false);

  const { data, loading, error } = useFetch(
    "http://127.0.0.1:5000/api/v1/order/orders"
  );

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  if (loading) return <h2> Loading....</h2>;

  return (
    <section className="flex">
      <div className=" w-1/5 ">
        <Navbar />
      </div>
      <div className=" w-4/5 min-h-screen bg-slate-100 ">
        <h1 className=" text-center py-4 text-4xl font-semibold bg-slate-300 ">
          CURRENT ORDERS
        </h1>
        {toggle ? (
          <NewCourierModal setToggle={setToggle} />
        ) : (
          <>
            <div className=" flex justify-end ">
              <button
                onClick={() => setToggle(true)}
                className=" text-center px-2 py-2  rounded bg-green-600 cursor-pointer font-semibold text-white hover:bg-green-dark focus:outline-none m-3"
              >
                Add New Order
              </button>
            </div>
            <div className="p-3">
              <Table values={data} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Orders;
