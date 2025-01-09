import React, { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ product, onClose, onSave }) => {
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSave = () => {
    onSave({
      ...product,
      price: price || 0,
      quantity: quantity || 0,
      value: (price || 0) * (quantity || 0),
    });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="modal-title">Edit Product</h2>
        <h5>{product.name}</h5>
        <form className="modal-form">
          <div className="fields-container">
            <div className="modal-field">
              <label>Category</label>
              <input type="text" value={product.category} disabled />
            </div>
            <div className="modal-field">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="modal-field">
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-field">
              <label>Value</label>
              <input type="text" value={price * quantity} disabled />
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
