import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order, index, setCancel }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{order?.purchaseName}</th>
      <th>{order?.quantity}</th>
      <th>${order?.price}</th>
      <td>
        {order.price && order.paid ? (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction Id:
              <span className="text-success">{order.transactionId}</span>
            </p>
          </div>
        ) : (
          <button
            onClick={() => navigate(`/dashboard/payment/${order._id}`)}
            className="btn-success btn btn-sm text-white"
          >
            Pay
          </button>
        )}
      </td>
      <td>{order.status}</td>
      <td>
        {!order.paid && (
          <label
            onClick={() => setCancel(order)}
            htmlFor="cancelModal"
            className="btn btn-sm btn-error  modal-button text-white"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
