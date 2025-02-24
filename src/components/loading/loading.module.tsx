import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-amber-600 border-t-transparent rounded-full animate-spin">
          <img
            className="w-16 h-16"
            src="https://w7.pngwing.com/pngs/231/417/png-transparent-sunflower-oil-cooking-oils-frying-greas-food-cooking-oil.png"
            alt=""
          />
          {/* <p className="mt-4 text-lg font-semibold text-black">Loading ...</p> */}
        </div>
      </div>
    </div>
  );
}
