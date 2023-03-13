import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading/Loading";
import CancelModal from "./CancelModal";
import OrderRow from "./OrderRow";
const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [cancel, setCancel] = useState(null);
  const [admin] = useAdmin(user);
  const url = `http://localhost:5000/purchase/${user?.email}`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrder", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {!admin && (
        <div>
          <h2 className="text-center text-xl">My Order({orders.length})</h2>
          <div className="overflow-x-auto mt-3">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>List</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <OrderRow
                    key={order?._id}
                    index={index}
                    order={order}
                    setCancel={setCancel}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {cancel && (
            <CancelModal
              cancel={cancel}
              refetch={refetch}
              setCancel={setCancel}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MyOrder;
