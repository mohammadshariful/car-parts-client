import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Parts = ({ parts }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [admin] = useAdmin(user);
  const {
    _id,
    availableQuantity,
    description,
    img,
    minimumOrderQuantity,
    name,
    price,
  } = parts;

  return (
    <div data-aos="fade-up" className="card h-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {description.length >= 250 ? (
          <p>
            {description.slice(0, 250)}
            <span className="text-gray-500 cursor-pointer">...see more</span>
          </p>
        ) : (
          <p>{description}</p>
        )}
        <p className="font-bold text-xl">Price :${price}</p>
        <p>Minimum Order Quantity :{minimumOrderQuantity}</p>
        <p>Available Quantity : {availableQuantity}</p>
        <div className="card-actions justify-end">
          <button
            disabled={admin && true}
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary text-white"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
