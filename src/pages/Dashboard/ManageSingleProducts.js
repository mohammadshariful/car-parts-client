import React from "react";

const ManageSingleProducts = ({ product, index, setProduct }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src={product?.img} alt={product?.name} />
          </div>
        </div>
      </td>
      <td>{product?.name}</td>
      <td>${product?.price}</td>
      <td>
        <label
          onClick={() => setProduct(product)}
          htmlFor="productModal"
          className="btn btn-sm btn-error  modal-button text-white"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default ManageSingleProducts;
