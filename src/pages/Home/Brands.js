import React from "react";
const Brands = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-50 brandsBackground"></div>
      <div className="bg-black text-white p-10 lg:w-50">
        <h2>Brands We Trust</h2>
        <p>
          We carry over 250 of the worlds highest quality automotive parts brand
          across 42 product categories.
        </p>
        <button className="btn btn-primary mt-4 text-white">
          Sell All Brands
        </button>
      </div>
    </div>
  );
};

export default Brands;
