import React from "react";
import { FaRegMoneyBillAlt, FaStar, FaTools, FaUsers } from "react-icons/fa";
import CountUp from 'react-countup';

const BusinessSummary = () => {
  return (
    <div className="bg-white p-10 my-20 shadow-sm">
      <h2 className="text-center text-2xl mb-3">Millions Business Trust Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  gap-5">
        <div className="bg-white w-full p-10 text-center shadow-lg rounded-md">
          <div className="stat-title text-xl">Customers</div>
          <div>
            <FaUsers className="text-4xl text-orange-500 mx-auto" />
          </div>
          <div className="stat-value text-primary"><CountUp end={100} suffix='+' duration={2.5} enableScrollSpy /></div>
        </div>
        <div className="bg-white w-full p-10 text-center shadow-lg rounded-md">
          <div className="stat-title text-xl">Annual Revenue</div>
          <div>
            <FaRegMoneyBillAlt className="text-4xl text-orange-500 mx-auto" />
          </div>
          <div className="stat-value text-primary"><CountUp end={120} suffix='+M' duration={3} enableScrollSpy /></div>
        </div>
        <div className="bg-white w-full p-10 text-center shadow-lg rounded-md">
          <div className="stat-title text-xl">Tools</div>
          <div>
            <FaTools className="text-4xl text-orange-500 mx-auto" />
          </div>
          <div className="stat-value text-primary"><CountUp end={100} suffix='+' duration={3} enableScrollSpy /></div>
        </div>
        <div className="bg-white w-full p-10 text-center shadow-lg rounded-md">
          <div className="stat-title text-xl">Reviews</div>
          <div className="flex">
            <FaStar className="text-3xl text-orange-500 mx-auto" />
            <FaStar className="text-3xl text-orange-500 mx-auto" />
            <FaStar className="text-3xl text-orange-500 mx-auto" />
            <FaStar className="text-3xl text-orange-500 mx-auto" />
            <FaStar className="text-3xl text-orange-500 mx-auto" />
          </div>
          <div className="stat-value text-primary"><CountUp end={100} suffix='K+' duration={3} enableScrollSpy /></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
