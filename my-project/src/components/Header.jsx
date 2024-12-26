import React from "react";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { LuBell } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const navigate=useNavigate();
  const handleFavourite=()=>{
    navigate("./pages/Favorites");
  }
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex gap-5">
      <NavLink><HiMenuAlt2 className="h-8 w-7"/></NavLink>
      <NavLink><GrSearch className="h-8 w-7"/></NavLink>
        {/* <input
          type="text"
          className="outline-slate-700 border border-slate-400 rounded-md p-1"
          placeholder="Search for product..."
        /> */}
      </div>
      <div>
      <NavLink><img src="/src/assets/img/logo.png" alt="" className="w-18 h-6 ml-7 align-middle" /></NavLink>
      </div>
      <div className="flex justify-end gap-5">
      <NavLink className="relative">
        <div className="w-2 h-2 bg-red-500 rounded-full absolute  right-1"></div>
          <LuBell className="h-8 w-7"/>
          </NavLink>
        {/* <NavLink>
          <HiOutlineUser className="h-8 w-7"/>
        </NavLink> */}
        <NavLink to="favorites">
          <RiHeartLine  className="h-8 w-7"/>
          </NavLink>
          <NavLink>
          <HiOutlineShoppingBag className="h-8 w-7"/>
          </NavLink>
      </div>
    </div>
  );
}

export default Header;
