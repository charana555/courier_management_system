import React from "react";

import Navbar from "../Misscelanious/Navbar";
import Table from "../Table/Table";

const Orders = () => {
  return (
    <section className="flex">
      <div className=" w-1/5 ">
        <Navbar />
      </div>
      <div className=" w-4/5 h-screen bg-slate-100 ">
        <h1 className=" text-center py-4 text-4xl font-semibold bg-slate-300 ">
          CURRENT ORDERS
        </h1>

        <div className=" flex justify-end ">
          <button className=" text-center px-2 py-2  rounded bg-green-600 cursor-pointer font-semibold text-white hover:bg-green-dark focus:outline-none m-3">
            Add New Order
          </button>
        </div>
        <div className="p-3">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Orders;
