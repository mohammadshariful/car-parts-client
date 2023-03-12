import React from "react";
import { FaRegComment, FaRegHeart, FaStar } from "react-icons/fa";
import placeHolderImg from "../../assets/images/placeholderImg.jpeg";
const UserReview = ({ review }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 h-full mx-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ">
              <img src={review?.photoUrl || placeHolderImg} alt="" />
            </div>
          </div>
          <h2 className="mx-3">{review?.userName}</h2>
        </div>
        <div className="flex items-center">
          <FaStar className="mx-2 text-orange-500" />
          <p>
            <span className="font-bold text-xl">{review?.rating}</span>/5
          </p>
        </div>
      </div>
      <hr />
      <p>{review?.description}</p>
      <div className="card-actions justify-end cursor-pointer gap-x-5">
        <div className="flex items-center">
          <FaRegHeart /> <small>12</small>
        </div>
        <div className="flex items-center">
          <FaRegComment /> <small>10</small>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
