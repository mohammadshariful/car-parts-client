import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ManageSingleProducts from "./ManageSingleProducts";
import ProductModal from "./ProductModal";

const ManageProducts = () => {
  const [product, setProduct] = useState(null);

  const { data: { data: products } = {}, isLoading, refetch, } = useQuery("products", () =>
    fetch("https://proper-parts-server-74zj.onrender.com/api/v1/tools", {
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
    <div>
      <h2 className="text-center text-xl">
        Manage all Products({products.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>List</th>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageSingleProducts
                key={product?._id}
                index={index}
                product={product}
                setProduct={setProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {product && (
        <ProductModal
          product={product}
          refetch={refetch}
          setProduct={setProduct}
        />
      )}
    </div>
  );
};

export default ManageProducts;
