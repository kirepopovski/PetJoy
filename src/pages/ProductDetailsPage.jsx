// src/pages/ProductDetailsPage.jsx
import { useParams } from "solid-app-router";
import products from "../data/products"; // Ensure this path is correct
import "./ProductDetailsPage.css"; // Import the CSS file

// Utility function for formatting currency
const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div class="container mt-5">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} class="product-image" />
      <p class="product-description">{product.description}</p>
      <p class="product-price">{formatCurrency(product.price)}</p>
      <button class="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
