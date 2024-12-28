import React from "react";
import { LuBell } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
function Modal() {
  return (
    <>
      {/* <div className="h-screen w-screen fixed inset-0 bg-black/50"></div> */}
      <div className="modal w-96 h-72 absolute top-1/2 left-1/2 p-4 -translate-x-2/4 -translate-y-2/3 bg-white">
        <div className="modal__header flex items-center justify-between ">
          <h3></h3>
          <button>
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center  gap-8">
          <div className="relative p-4 bg-zinc-100 rounded-full">
            <div className="w-3 h-3 bg-red-500 rounded-full absolute  left-12"></div>
            <LuBell className="h-12 w-12" />
          </div>
          <h1 className="font-bold">Gift Suggestions</h1>
          <NavLink>
            <button className="w-72 h-12 font-semibold  bg-zinc-700 hover:bg-zinc-950 duration-300 text-white">
              Start Shopping
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Modal;
