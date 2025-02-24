import React from "react";
import { DataProduct } from "@/dummy/data";

export default function Card({
  id,
  title,
  description,
  price,
  image,
  category,
  onClick,
}: DataProduct) {
  return (
    <div id={id} className="border bg-slate-50 rounded shadow-sm hover:bg-slate-200 p-5 cursor-pointer"
    onClick={onClick}>
      <img
        src={image !== "" ? image : "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"}
        alt={title}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <div className="flex flex-col gap-y-5">
      <h2 className="text-lg font-semibold text-black">{title}</h2>
      <p className="text-slate-600">{description}</p>
      <p className="font-bold text-red-500 text-xl">Rp {price}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
    </div>
  );
}
