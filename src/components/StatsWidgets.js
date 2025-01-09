import React from "react";
import "../styles/StatsWidgets.css";

const StatsWidgets = ({ products }) => {
  const totalProducts = products?.length;
  const totalStoreValue = products?.reduce(
    (sum, product) => sum + product?.price * product?.quantity,
    0
  );
  const outOfStock = products?.filter(
    (product) => product?.quantity === 0
  ).length;
  const categories = [...new Set(products?.map((product) => product?.category))]
    .length;

  return (
    <div className="stats-widgets">
      <div className="widget">
        <img width={25} src="/icons/cart.svg" alt="cart" />
        <div>
          Total Products <h2>{totalProducts}</h2>
        </div>
      </div>
      <div className="widget">
        <img width={20} src="/icons/dollar.svg" alt="dollar" />
        <div>
          Total Store Value <h2>{totalStoreValue}</h2>
        </div>
      </div>
      <div className="widget">
        <img width={40} src="/icons/stock-out.svg" alt="stock out" />
        <div>
          Out of Stock <h2>{outOfStock}</h2>
        </div>
      </div>
      <div className="widget">
        <img width={25} src="/icons/category.svg" alt="category" />
        <div>
          Categories <h2>{categories}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatsWidgets;
