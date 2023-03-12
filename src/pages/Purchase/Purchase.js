import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";
import TitleChange from "../Shared/TitleChange/TitleChange";
const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const url = `https://proper-parts-server.vercel.app/tools/${id}`;
  const { data: tool, isLoading } = useQuery(["tool", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const {
    price,
    name,
    minimumOrderQuantity,
    availableQuantity,
    img,
    description,
  } = tool;

  const onSubmit = (data) => {
    const quantity = parseInt(data.quantity);
    if (minimumOrderQuantity > quantity || quantity > availableQuantity) {
      toast.error(
        `Order Quantity minimum ${minimumOrderQuantity} and less than ${availableQuantity} `,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    } else {
      const order = {
        purchaseName: name,
        quantity: quantity,
        price: price,
        img: img,
        userName: user?.displayName,
        email: user?.email,
        address: data.address,
        phone: data.phone,
      };
      fetch("https://proper-parts-server.vercel.app/purchase", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            toast.success(
              `Thanks For Purchase.
              Your Purchase Id ${result.insertedId}
              `,
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
            reset();
          }
        });
    }
  };
  return (
    <div className="w-[90%] mx-auto my-10">
      <TitleChange title="Purchase" />
      <div className="flex flex-col lg:flex-row justify-between bg-white shadow-sm gap-5">
        <div className=" w-full lg:w-50">
          <div className="card h-full bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <p className="font-bold text-xl">Price :$ {price}</p>
              <p>Minimum Order Quantity : {minimumOrderQuantity}</p>
              <p>Available Quantity : {availableQuantity}</p>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-50">
          <div className="card h-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl text-center text-primary">
                Purchase Now Your Parts
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 justify-items-center"
              >
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    disabled
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={minimumOrderQuantity}
                    placeholder="Enter Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Quantity is Required",
                      },
                    })}
                  />
                </div>
                <label className="label text-left">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="input input-bordered w-full max-w-xs"
                    {...register("address")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone")}
                  />
                </div>

                <input
                  className="btn btn-primary capitalize mt-4 font-normal w-full max-w-xs text-white"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
