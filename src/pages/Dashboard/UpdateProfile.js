import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
const UpdateProfile = ({ refetch, setUpdate }) => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const updateInfo = {
      city: data.city,
      education: data.education,
      phone: data.phone,
      link: data.link,
      email: user?.email,
    };

    // update user info
    const url = `http://localhost:5000/update/${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          toast.success("Profile update sccess");
          refetch();
          setUpdate(false);
          reset();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="updateProfileModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="updateProfileModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Your Information</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 justify-items-center gap-3"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder="Your Education"
                className="input input-bordered w-full max-w-xs"
                {...register("education")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="Your City Name"
                className="input input-bordered w-full max-w-xs"
                {...register("city")}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Your City Name"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Profile Link</span>
              </label>
              <input
                type="text"
                placeholder="Your Profile Link"
                className="input input-bordered w-full max-w-xs"
                {...register("link")}
              />
            </div>

            <input
              className="btn btn-success capitalize mt-4 font-normal w-full max-w-xs text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
