import { createSignal, createEffect, Show } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import { useCart } from "../contexts/CartContext";
import products from "../data/products";
import "./ProductDetailsPage.css"; // Link to CSS file for additional styling

function ProductDetailsPage() {
  const [product, setProduct] = createSignal(null);
  const params = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  createEffect(() => {
    const productId = parseInt(params.id, 10); // Get product ID from URL
    const selectedProduct = products.find((p) => p.id === productId);
    setProduct(selectedProduct);
  });

  const handleBackClick = () => {
    navigate("/products"); // Navigate back to the products page
  };

  return (
    <div class="container mt-5">
      <Show when={product()} fallback={<div>Loading...</div>}>
        <button class="btn btn-secondary back-button" onClick={handleBackClick}>
          Back to Products
        </button>
        <div class="row">
          <div class="col-md-6">
            <img
              src={product().image[Object.keys(product().image)[0]]}
              alt={product().name}
              class="img-fluid product-image"
            />
          </div>
          <div class="col-md-6">
            <h1 class="product-title">{product().name}</h1>
            <p class="product-description">{product().description}</p>
            <p class="product-price">
              <strong>${product().price.toFixed(2)}</strong>
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product())}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default ProductDetailsPage;
