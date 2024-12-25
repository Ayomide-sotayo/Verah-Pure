/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCart } from "../Contexts/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  // Function to render stars for the rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`bi bi-star-fill ${
          index < rating ? "text-warning" : "text-secondary"
        }`}
        width="16"
        height="16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "2px" }}
      >
        <path d="M3.612 15.443c-.396.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.33-.315-.158-.888.283-.95l4.898-.696 2.126-4.29c.183-.37.68-.37.864 0l2.126 4.29 4.898.696c.441.063.613.635.283.95l-3.522 3.356.83 4.73c.078.443-.35.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    ));
  };

  return (
    <div
      className="card p-3 border-0"
      style={{
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Badge */}
      {product.badge && (
        <span className="badge bg-danger position-absolute top-0 start-0 m-2">
          {product.badge}
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        className="card-img-top rounded"
        alt={product.name}
        style={{
          height: "250px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Card Body */}
      <div className="card-body text-center">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <div className="d-flex align-items-center mb-2">
          {/* Rating */}
          <div className="d-flex me-auto">{renderStars(product.rating)}</div>
          <p className="card-text text-secondary fw-bold mb-1">
            ₦{product.price}
          </p>
        </div>
        <p className="small color">{product.description}</p>

        {/* Add to Cart Button */}
        <button className="but w-100" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
