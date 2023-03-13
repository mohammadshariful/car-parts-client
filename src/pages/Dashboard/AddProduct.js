import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProduct = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const imageStorageKey = "9cfe60cf67bc6290c60a930379ddadde";

  const onSubmit = async (data) => {
    console.log(data);
    const img = data.img[0];

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            img: img,
            description: data.description,
            minimumOrderQuantity: parseInt(data.minimumOrderQuantity),
            availableQuantity: parseInt(data.availableQuantity),
            price: parseInt(data.price),
          };

          //send to product database
          fetch("http://localhost:5000/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast.success("Product added Successfull");
                reset();
              } else {
                toast.error("Faild to added a Product");
              }
            });
        }
      });
  };

  return (
    <div className="card w-full mx-auto lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center">Add a new Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "Img is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="textarea textarea-bordered w-full max-w-xs"
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Add Minimum Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Minimum Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("minimumOrderQuantity", {
                required: {
                  value: true,
                  message: "Minimum is Required",
                },
              })}
            />
            <label className="label">
              {errors.minimumOrderQuantity?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.minimumOrderQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Add Qauantity</span>
            </label>
            <input
              type="number"
              placeholder="Add Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Add Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs  text-white"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
