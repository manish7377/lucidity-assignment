import React, { useState, useEffect } from "react";
import InventoryTable from "./components/InventoryTable";
import StatsWidgets from "./components/StatsWidgets";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState();
  const [view, setView] = useState("admin");

  console.log(products);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
      );
      let data = await response.json();
      data = data.map((item) => ({
        ...item,
        price: Number(item.price.slice(1, item.price.length)),
        value: Number(item.value.slice(1, item.value.length)),
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = (updatedProduct) => {
    if(view==='user')return;
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (name) => {
    if(view==='user')return;
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== name)
    );
  };

  const disableProduct = (name) => {
    if(view==='user')return;
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === name ? { ...product, disabled: true } : product
      )
    );
  };

  

  return (
    <div className="App">
      <Navbar view={view} setView={setView} />
      <StatsWidgets products={products} />
      {products?.length>0 &&<InventoryTable
        products={products}
        view={view}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        disableProduct={disableProduct}
      />}
    </div>
  );
};

export default App;
