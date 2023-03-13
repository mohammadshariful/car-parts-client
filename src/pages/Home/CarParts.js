import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import Parts from "./Parts";

const CarParts = () => {
  const [carsParts, setCarsParts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const url = `http://localhost:5000/tools`;
    setIsLoading((prevState) => !prevState);
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        setIsLoading((prevState) => !prevState);
        setCarsParts(data)

      }).catch(error => {
        setIsLoading((prevState) => !prevState);
        setError('No Result Found!')
      })
  }, [])

  // data fecth from vercel.app
  // const url = `http://localhost:5000/tools`;
  // const { data: carsParts, isLoading } = useQuery("parts", () =>
  //   fetch(url).then((res) => res.json())
  // );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="w-full h-24 flex justify-center items-center text-red-500 text-sm sm:text-xl">{error}</p>
  }


  const newCarParts = [...carsParts].reverse();
  const sliceCarParts = newCarParts.slice(0, 6);
  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h2 className="text-center text-2xl mb-4">
        Millions of High-quality Products
      </h2>
      <p className="text-center mb-4">
        Proper Parts Industry currently has more than 40 million pieces of
        product information from 27 industries. Besides, based on different
        procurement demands from different buyers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8">
        {sliceCarParts.map((parts) => (
          <Parts key={parts?._id} parts={parts} />
        ))}
      </div>
    </div>
  );
};

export default CarParts;
