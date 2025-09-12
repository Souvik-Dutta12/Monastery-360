import React from "react";


const Card = () => {
  return (
    <div className="bg-amber-50 shadow-xl border border-red-800 overflow-hidden p-5 hover:shadow-xl transition">
      <div className="w-full">
        <img src='/card.png' alt="card" className="w-full h-40 object-cover border border-gray-500 shadow-xl" />
      </div>
      <h1 className="text-lg font-semibold mt-4 text-red-800">RUMTEK MONASTERY</h1>
      <p className="text-gray-600 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quaerat
        pariatur laudantium quos a officiis, non eligendi quisquam tenetur libero
        repellat voluptas quas ratione, aliquid nemo porro minus veniam nobis?
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="inline-block mt-3 text-red-800 font-medium cursor-pointer hover:underline">
        Read more <i className="ri-arrow-right-line"></i>
      </span>
      <img src='/vector.png' alt="" className="w-10 "/>
      </div>
    </div>
  );
};

export default Card;
