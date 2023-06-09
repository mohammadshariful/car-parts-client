import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0eDkIX01rI0JuNooewaoPydMJGC1dTqDrRkTBuz6GsN4wfCJvFMeFIlsm4eYXupX84rhJOaf4xekvuwUT6MjAv00LG7mU9kb"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://proper-parts-server-74zj.onrender.com/api/v1/myPurchase/${id}`;
  const { data: { data } = {}, isLoading } = useQuery(["order", id], () =>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
      <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2>
            Hello,<span className="text-success">{data?.userName}</span>
          </h2>
          <div className="flex justify-between gap-3">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={data?.img} alt={data?.purchaseName} />
              </div>
            </div>
            <div>
              <h3>Please pay for :- {data?.purchaseName} </h3>
              <p>Total Quantity : {data?.quantity}</p>
              <p className="text-primary font-bold">Price:$ {data?.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
