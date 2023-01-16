import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className=" w-full bg-slate-500 h-screen flex flex-col gap-16 items-center ">
      <img
        className=" m-10 "
        src="/courier.png"
        alt="courier"
        height={150}
        width={150}
      />
      <ul className=" w-full flex justify-center flex-col items-center gap-6 cursor-pointer">
        <Link className=" w-full " to="/">
          <li className=" text-slate-100 font-semibold  text-xl  hover:text-slate-500 hover:bg-slate-200 w-full text-center p-4">
            Current Orders
          </li>
        </Link>
        <Link className=" w-full " to="/completed">
          <li className=" text-slate-100 font-semibold  text-xl  hover:text-slate-500 hover:bg-slate-200 w-full text-center p-4">
            Compleated Orders
          </li>
        </Link>
        <Link className=" w-full " to="/canceled">
          <li className=" text-slate-100 font-semibold  text-xl  hover:text-slate-500 hover:bg-slate-200 w-full text-center p-4">
            Canceled Orders
          </li>
        </Link>
        <li className=" text-slate-100 font-semibold  text-xl  hover:text-slate-500 hover:bg-slate-200 w-full text-center p-4">
          Logout
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
