import React from "react";
import { toast } from "react-toastify";

const OrderModal = ({ orderDelete, refetch, setOrderDelete }) => {
  const deleteOrder = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/manageOrder/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${orderDelete?.purchaseName} - Order is deleted.`);
          setOrderDelete(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="orderModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="orderModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center lg:text-lg text-error">
            Are You sure want to delete{" "}
            <span className="text-xl font-bold">
              {orderDelete?.purchaseName}
            </span>
          </h3>
          <div className="avatar">
            <div className="w-16 rounded">
              <img src={orderDelete?.img} alt={orderDelete?.purchaseName} />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={() => deleteOrder(orderDelete?._id)}
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

export default OrderModal;
