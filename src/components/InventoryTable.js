import React, { useState } from "react";
import "../styles/InventoryTable.css";
import Modal from "./Modal"; 

const InventoryTable = ({
  products,
  view,
  updateProduct,
  deleteProduct,
  disableProduct,
}) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditClick = (product) => {
    if(product.disabled || view==='user') return;
    setEditingProduct(product);
  };

  const handleSaveClick = (updatedProduct) => {
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  return (
    <div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name} className={product.disabled ? "disabled" : ""}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.value}</td>
              <td className="actions-button-container">
                    <img
                      onClick={() => handleEditClick(product)}
                      src="/icons/edit.svg"
                      width={20}
                      alt="Edit"
                    />
                    <img
                      onClick={() => disableProduct(product.name)}
                      src={
                        product.disabled
                          ? "/icons/eye-disable.svg"
                          : "/icons/eye.svg"
                      }
                      width={20}
                      alt="Disable"
                    />
                    <img
                      onClick={() => deleteProduct(product.name)}
                      src="/icons/delete.svg"
                      width={20}
                      alt="Delete"
                    />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProduct && (
        <Modal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSaveClick}
        />
      )}
    </div>
  );
};

export default InventoryTable;
