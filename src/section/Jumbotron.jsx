import React from "react";

import image from "../assets/shop.svg";


function Jumbotron() {
  return (
    <section className="container mx-auto bg-blue-700">
      <div className="flex justify-between px-28">
        <div className=" flex-1 w-1/2 flex flex-col justify-center gap-y-5">
          <h1 className="font-bold text-5xl text-start text-white">
            Grab Up To 50% Off On <br/> Selected Items
          </h1>
          <button type="button" className=" w-1/6 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">Explore</button>
        </div>
        <img src={image} alt="" className="w-2/5" />
      </div>
    </section>
  );
}

export default Jumbotron;
