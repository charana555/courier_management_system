import React from "react";
import Input from "../Inputs/Input";

import { useState } from "react";

import { getCustomer, createOrder } from "../../api/api";

const NewCourierModal = ({ setToggle }) => {
  const [customerDisable, setCustomerDisable] = useState(false);

  const [customer, setCustomer] = useState({
    cid: "",
    cphone: "",
    cname: "",
    caddress: "",
    ccity: "",
    cpincode: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
  });

  let name, value;
  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCustomer({ ...customer, [name]: value });
  };

  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return re.test(phone);
  };

  const handleGet = async () => {
    if (!validatePhone(customer.cphone)) {
      alert("Please Enter Valid Phone number");
      return false;
    }

    try {
      setCustomerDisable(true);
      const customerExists = await getCustomer(customer.cphone);
      if (customerExists) {
        const { cid, cname, cphone, caddress, ccity, cpincode } =
          customerExists.data.result[0];

        setCustomer({
          cid,
          cname,
          cphone,
          caddress,
          ccity,
          cpincode,
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert("Customer Doesn't Exists , Please enter customer details");
      }

      setCustomerDisable(false);
    }
  };

  const handleOrder = async () => {
    if (!validatePhone(customer.phone)) {
      alert("Please Enter Valid Phone number");
      return false;
    }
    const new_order = {
      cid: customer.cid,
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
      city: customer.city,
      pincode: customer.pincode,
      date: customer.date,
    };
    const orderCreate = await createOrder(new_order);
    if (orderCreate.status === 201) {
      alert("Order Created Successfully");
      setToggle(false);
    }
  };

  return (
    <section className=" w-full  flex justify-center pt-10 ">
      <div className=" w-[70%] h-[70%] bg-white bg-opacity-60 p-4 rounded-md ">
        <h1 className=" text-center font-semibold text-2xl pt-4 pb-6">
          Add new Order
        </h1>

        {/* customer details  */}

        <fieldset className=" w-full h-full flex gap-2 border-2 border-slate-500 p-4 rounded-md">
          <legend className=" font-bold px-2 ">Customer Details</legend>
          <div className=" w-1/2 ">
            <Input
              disabled={customerDisable}
              value={customer.cphone}
              onChange={handlechange}
              type={"Number"}
              name={"cphone"}
              place={"Customer Phone"}
            />
            <Input
              disabled={customerDisable}
              value={customer.cname}
              onChange={handlechange}
              type={"text"}
              name={"cname"}
              place={"Customer Name"}
            />
            <Input
              disabled={customerDisable}
              value={customer.caddress}
              onChange={handlechange}
              type={"text"}
              name={"caddress"}
              place={"Customer Address"}
            />
          </div>
          <div className=" w-1/2 ">
            <button
              disabled={customerDisable}
              onClick={handleGet}
              className=" w-full text-center py-2 rounded-lg bg-blue-600 cursor-pointer text-[17px] text-white hover:bg-green-dark focus:outline-none mb-4 disabled:cursor-not-allowed"
            >
              Get customer details
            </button>
            <Input
              disabled={customerDisable}
              value={customer.ccity}
              onChange={handlechange}
              type={"text"}
              name={"ccity"}
              place={"City"}
            />
            <Input
              disabled={customerDisable}
              value={customer.cpincode}
              onChange={handlechange}
              type={"Number"}
              name={"cpincode"}
              place={"Pin Code"}
            />
          </div>
        </fieldset>

        {/* Order Details  */}

        <fieldset className=" w-full h-full flex gap-2 border-2 border-slate-500 p-4 rounded-md">
          <legend className=" font-bold px-2 ">Order Details</legend>
          <div className=" w-1/2 ">
            <Input
              value={customer.name}
              onChange={handlechange}
              type={"text"}
              name={"name"}
              place={"Recivers Name"}
            />
            <Input
              value={customer.phone}
              onChange={handlechange}
              type={"Number"}
              name={"phone"}
              place={"Recivers Phone"}
            />
            <Input
              value={customer.address}
              onChange={handlechange}
              type={"text"}
              name={"address"}
              place={"Delivary Address"}
            />
          </div>
          <div className=" w-1/2 ">
            <Input
              value={customer.city}
              onChange={handlechange}
              type={"text"}
              name={"city"}
              place={"Delivary City"}
            />
            <Input
              value={customer.date}
              onChange={handlechange}
              type={"Date"}
              name={"date"}
              place={"Order Date"}
            />
            <Input
              value={customer.pincode}
              onChange={handlechange}
              type={"Number"}
              name={"pincode"}
              place={"Delivary Pincode"}
            />
          </div>
        </fieldset>
        <div className="flex justify-around ">
          <button
            onClick={() => setToggle(false)}
            className=" text-center p-2 rounded bg-red-600 cursor-pointer text-[17px] text-white hover:bg-green-dark focus:outline-none my-4"
          >
            Cancel Order
          </button>
          <button
            onClick={handleOrder}
            className=" text-center p-2 rounded bg-green-600 cursor-pointer text-[17px] text-white hover:bg-green-dark focus:outline-none my-4"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewCourierModal;
