import React from "react";
import { toast } from "react-toastify";

const ProductModal = ({ product, refetch, setProduct }) => {
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/tools/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${product?.name} - product is deleted.`);
          setProduct(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="productModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="productModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center lg:text-lg text-error">
            Are You sure want to delete {product?.name}
          </h3>
          <div className="avatar">
            <div className="w-16 rounded">
              <img src={product?.img} alt={product?.purchaseName} />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={() => deleteProduct(product._id)}
              className="btn btn-error btn-sm text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
