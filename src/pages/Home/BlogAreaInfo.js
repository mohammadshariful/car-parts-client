import React from "react";

const BlogAreaInfo = ({ blog }) => {
  const { date, describe, img, name } = blog;
  return (
    <div data-aos="fade-up" className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={img} alt={name} className="rounded-sm" />
        <div className="absolute left-0 bottom-0">
          <p className="bg-primary text-white p-2 ">{date}</p>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{describe}</p>
      </div>
    </div>
  );
};

export default BlogAreaInfo;
