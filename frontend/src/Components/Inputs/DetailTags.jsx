import React from "react";

const DetailTags = ({ keyType, value }) => {
  return (
    <p className=" text-xl font-[500] flex ">
      <div className=" font-bold text-slate-700 w-[28%] pl-5 ">{keyType}</div>
      <div className=" w-[4%]  text-center "> : </div>
      <div className="  w-[48%]  text-center ">{value}</div>
    </p>
  );
};

export default DetailTags;
