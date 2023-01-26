import axios from "axios";

export const getCustomer = async (phone) => {
  const response = await axios.get(
    `http://127.0.0.1:5000/api/v1/customers/customer/${phone}`
  );

  return response;
};
export const createOrder = async (order) => {
  const response = await axios.post(
    `http://127.0.0.1:5000/api/v1/order/create`,
    order
  );

  return response;
};
