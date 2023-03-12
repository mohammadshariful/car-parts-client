import React from "react";
import { toast } from "react-toastify";

const CancelModal = ({ cancel, refetch, setCancel }) => {
  const cancelOrder = (id) => {
    fetch(`https://proper-parts-server.vercel.app/myPurchase/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${cancel?.purchaseName} - order is deleted.`);
          setCancel(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="cancelModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="cancelModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center lg:text-lg text-error">
            Are You sure want to cancel {cancel?.purchaseName}
          </h3>
          <div className="avatar">
            <div className="w-14 rounded">
              <img src={cancel?.img} alt="" />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={() => cancelOrder(cancel._id)}
              className="btn btn-error btn-sm text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
