import React from "react";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";

import { LuBell } from "react-icons/lu";
function Header() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex gap-5">
      <a href=""><HiMenuAlt2 className="h-8 w-7"/></a>
      <a href=""><GrSearch className="h-8 w-7"/></a>
        {/* <input
          type="text"
          className="outline-slate-700 border border-slate-400 rounded-md p-1"
          placeholder="Search for product..."
        /> */}
      </div>
      <div>
        <a href=""><img src="/src/assets/img/logo.png" alt="" className="w-18 h-6 ml-7 align-middle" /></a>
      </div>
      <div className="flex justify-end gap-5">
        <a href="" className="relative">
        <div class="w-2 h-2 bg-red-500 rounded-full absolute  right-1"></div>
          <LuBell className="h-8 w-7"/>
        </a>
        {/* <a href="">
          <HiOutlineUser className="h-8 w-7"/>
        </a> */}
        <a href="">
          <RiHeartLine  className="h-8 w-7"/>
        </a>
        <a href="">
          <HiOutlineShoppingBag className="h-8 w-7"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
