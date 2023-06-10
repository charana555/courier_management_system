import React from "react";
import useFetch from "../../Hooks/useFetch";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";

const Completed = () => {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:5000/api/v1/order/orders/completed"
  );

  if (error) {
    console.log(error);
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
        <div className="p-3">
          <Table values={data} />
        </div>
      </div>
    </section>
  );
};

export default Completed;
