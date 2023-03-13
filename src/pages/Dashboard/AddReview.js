import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const review = {
      rating: data.rating,
      description: data.description,
      userName: user?.displayName,
      photoUrl: user?.photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success(
            `Review Add Successful
              `,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          reset();
        }
      });
  };

  return (
    <div className="card w-full lg:max-w-lg mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-xl">Give a Review</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 justify-items-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Give Rating"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="say something..."
              className="textarea  textarea-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary capitalize font-normal w-full max-w-xs text-white"
            type="submit"
            value="Add a Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
