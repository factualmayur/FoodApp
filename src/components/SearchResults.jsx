import React from "react";

function SearchResults({ data }) {
  return (
    <section className="w-full overflow-y-auto mt-44 no-scrollbar">
      <div className="flex items-center justify-center h-full w-f ull">
        <div className="flex flex-wrap justify-center w-full max-w-screen-xl gap-6 p-4 ">
          {data?.map(({ name, image, text, price }) => (
            <div className="flex items-center w-full overflow-hidden rounded-lg shadow-lg bg-neutral-900 sm:w-80 md:w-96">
              <div className="w-full">
                <img src={image} alt="food_image" className="w-full h-full" />
              </div>
              <div className="flex flex-col p-3">
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-gray-400">{text}</p>
                <button 
                  className="px-4 py-2 mt-4 text-sm text-white bg-red-600 rounded-lg lg:text-base">
                  ₹ {price.toFixed(2)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
