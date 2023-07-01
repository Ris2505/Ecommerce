import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`md:text-xl   text-base  p-3   rounded-xl	cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-slate-800 text-white"}`}>
      <p className="text-center font-small my-1 capitalize">{category}</p>
      </div>
      
    </div>
  );
};

export default FilterProduct;
