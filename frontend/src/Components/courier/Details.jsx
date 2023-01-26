import React from "react";
import Navbar from "../Navbar/Navbar";
import DetailTags from "../Inputs/DetailTags";

const Details = () => {
  return (
    <section className="flex">
      <div className=" w-1/5 ">
        <Navbar />
      </div>
      <div className=" w-4/5 min-h-screen bg-slate-100 ">
        <h1 className=" text-center py-4 text-4xl font-semibold bg-slate-300  ">
          CURRENT ORDERS
        </h1>
        <div className=" w-full flex justify-center pt-10  ">
          <div className=" w-[70%] h-[70%] bg-white bg-opacity-60 p-4 rounded-md ">
            <fieldset className="w-full h-full border-2 border-slate-500 p-4 rounded-md">
              <legend className=" text-black font-bold text-2xl px-4 ">
                Order Details
              </legend>
              <div className="flex flex-col gap-2">
                <DetailTags keyType={"Order No"} value={100} />
                <DetailTags keyType={"Customer Name"} value={100} />
                <DetailTags keyType={"Customer Phone"} value={100} />
                <DetailTags keyType={"Customer Address"} value={100} />
                <DetailTags keyType={"Customer City"} value={100} />
                <DetailTags keyType={"Customer Pincode"} value={100} />
                <DetailTags keyType={"Recivers Name"} value={100} />
                <DetailTags keyType={"Recivers Phone"} value={100} />
                <DetailTags keyType={"Delivary Address"} value={100} />
                <DetailTags keyType={"Delivary City"} value={100} />
                <DetailTags keyType={"Delivary Pincode"} value={100} />
                <DetailTags keyType={"Delivary Status"} value={100} />
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
