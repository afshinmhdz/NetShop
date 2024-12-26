import React from "react";
import { NavLink } from "react-router-dom";
import { LuFolderHeart } from "react-icons/lu";
function Favorites() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <LuFolderHeart className="w-16 h-16"/>
      <h3 className="mt-12 font-semibold">
        To see your favorite lists <NavLink className="underline hover:no-underline">log in.</NavLink>
      </h3>
      <NavLink><button className="w-72 h-12 font-semibold mt-12 mb-5 bg-zinc-700 hover:bg-zinc-950 duration-300 text-white">Log in</button></NavLink>
      <NavLink><button className="w-72 h-12 font-semibold border-solid border-2 border-gray-950">Sign Up</button></NavLink>
    </div>
  );
}

export default Favorites;
