import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="relative background flex flex-col h-screen w-full items-center overflow-x-hidden">
      <h1 className="bg-white text-center text-4xl font-bold w-11/12 rounded-lg mt-[30px] py-2 ">
        RANDOM GIFS
      </h1>
      <Random />
      <Tag />
    </div>
  );
};

export default App;
