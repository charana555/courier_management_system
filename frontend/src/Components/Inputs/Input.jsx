import React from "react";

const Input = ({ type, name, place, value, onChange, disabled }) => {
  return (
    <input
      disabled={disabled}
      value={value}
      onChange={onChange}
      type={type}
      className="block border-2 placeholder-gray-600 disabled:bg-slate-200 text-black font-semibold border-slate-600 w-full p-2 outline-none bg-transparent rounded mb-4"
      name={name}
      placeholder={place}
    />
  );
};

export default Input;
