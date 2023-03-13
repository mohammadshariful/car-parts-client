import React from "react";
import { toast } from "react-toastify";

const ManageSingleOrder = ({ index, order, refetch, setOrderDelete }) => {
  const handleStatus = (id) => {
    const url = `http://localhost:5000/manageOrder/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.upsertedCount) {
          toast.success("Order Shippment");
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src={order?.img} alt={order?.purchaseName} />
          </div>
        </div>
      </td>
      <td>{order?.purchaseName}</td>

      <td>
        {order?.paid ? (
          <p className="text-success">Paid</p>
        ) : (
          <p className="text-error">UnPaid</p>
        )}
      </td>
      <td>
        <p className="font-bold">{order?.status}</p>
        {order?.status === "pending" && (
          <button
            onClick={() => handleStatus(order?._id)}
            className="btn btn-sm capitalize font-normal text-white "
          >
            Shipped
          </button>
        )}
      </td>
      <td>
        {order?.paid ? (
          <p className="text-success">Already Paid</p>
        ) : (
          <label
            onClick={() => setOrderDelete(order)}
            htmlFor="orderModal"
            className="btn btn-sm btn-error  modal-button text-white"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default ManageSingleOrder;
