import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResults from "./components/SearchResults";
import { FOOD_DATA } from "./server";
import NotFound from "./components/NotFound";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        setData(FOOD_DATA);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(null);
      setSelectedButton("all");
    } else {
      const filtered = data?.filter((food) => {
        const foodTypes = food.type?.toLowerCase().split(",");
        return foodTypes.includes(type.toLowerCase());
      });
      setFilteredData(filtered);
      setSelectedButton(type);
    }
  };

  const FilterBtns = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
    { name: "Snack", type: "midnight snack" },
  ];

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    } else {
      const filtered = data.filter((food) => {
        const nameMatch = food.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
        const typeMatch = food.type
          .toLowerCase()
          .split(",")
          .some((type) => type.trim().includes(searchValue.toLowerCase()));
        return nameMatch || typeMatch;
      });
      setFilteredData(filtered);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto text-white no-scrollbar">

    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    <nav className=" w-full h-[clamp(200px, 20%, 300px)] flex flex-col items-center fixed bg-neutral-900 justify-center lg:flex-row lg:justify-around pb-6  lg:pt-10">
  <div className="flex p-4 text-4xl">
    <span className="font-extrabold text-yellow-400">Food </span>
    <span className="font-semibold text-green-600">Zone</span>
  </div>
  <div>
    <input
    onChange={searchFood}
    className="p-1 border rounded bg-neutral-800 focus:ring-2 focus:outline-none focus:ring-red-500"
    type="text" />
  </div>
</nav>

<section className="w-[clamp(80%,100%,100%)] h-[clamp(5%,20%,7%)] mt-[120px] pb-4  fixed bg-neutral-900 items-center justify-center flex gap-4 m-1  lg:justify-center">
  {FilterBtns?.map((value)=>(
    <button 
    onClick={()=>filterFood(value.type)}
    style={{ backgroundColor: selectedBtn === value.type ? '#7f10a0' : 'red' }}
    className="w-[clamp(120px,20%,40px)] p-2  rounded-lg  hover:scale-110 text-sm lg:p-3 transition-all"
    key={value.name}>{value.name}</button>
  ))}
</section>

<section>
  {filteredData && filteredData.length === 0 ? (
    <NotFound />
  ) : (
    <SearchResults data={filteredData || data} />
  )}
</section>

      
    </div>
    </>
  );
};
export default App;

