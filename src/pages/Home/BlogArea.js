import React from "react";
import BlogAreaInfo from "./BlogAreaInfo";

const BlogArea = () => {
  const blogArea = [
    {
      name: "Industrial Revolution Factory",
      describe:
        "The Industrial Revolution created an increase in employment opportunities. Wages at factories were higher than what individuals were making as farmers. As factories became widespread, additional managers and employees were required to operate them, increasing the supply of jobs and overall wages.",
      img: "https://i.ibb.co/84CM5Nc/Industrial-Revolution-Factory.jpg",
      date: "January 20,2022",
    },
    {
      name: "Our Genius Engineer",
      describe:
        "Manage various factors that affect project quality and success. Also, responsible for solving problems and obstacles in order to meet the urgent needs of customers.",
      img: "https://i.ibb.co/qrDQXby/Our-Genius-Engineer.jpg",
      date: "February 03,2022",
    },
    {
      name: "Technical Solution Consultant",
      describe:
        "Technical solutions consultants are responsible for providing employees IT support to ensure smooth operations for carrying out their tasks. They install hardware and software, improve and maintain computer systems, and troubleshoot whenever necessary.",
      img: "https://i.ibb.co/VVxVT0S/Technical-Solution-Consultant.jpg",
      date: "March 10,2022",
    },
  ];
  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h2 className="text-center text-2xl mb-4">Our Blog Area</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8">
        {blogArea.map((blog, index) => (
          <BlogAreaInfo key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogArea;
