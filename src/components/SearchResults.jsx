import React from "react";

function SearchResults({ data }) {
  return (
    <section className="w-full overflow-y-auto mt-44 no-scrollbar">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap justify-center w-full max-w-screen-xl gap-6 p-4 transition-all duration-300 ">
          {data?.map(({ name, image, text, price }) => (
            <div className="flex items-center w-full overflow-hidden rounded-lg shadow-lg bg-neutral-900 sm:w-80 md:w-96">
              <div className="w-full">
                <img src={image} alt="food_image" className="w-[80%] h-auto" />
              </div>
              <div className="flex flex-col p-3">
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-gray-400">{text}</p>
                <button 
                  className="px-4 py-2 mt-4 text-sm bg-orange-500 rounded-lg tover:ext-white hover:scale-105 hover:bg-red-500 lg:text-base ">
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
