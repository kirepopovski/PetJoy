import { createSignal } from "solid-js";
import products from "../data/products";
import "./ProductPage.css";
import { A } from "@solidjs/router";

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = createSignal("All");

  const categories = ["All", "Food", "Toys", "Apparel"];

  // Filter products based on the selected category
  const filteredProducts = () => {
    if (selectedCategory() === "All") {
      return products;
    }
    return products.filter(
      (product) => product.category === selectedCategory()
    );
  };

  return (
    <div className="container-fluid product-page">
      <div className="promo-text">
        <p>
          Find the perfect product for your pets. Browse our exclusive
          collection of high-quality toys and accessories!
        </p>
      </div>
      <div className="row">
        <div className="col-12 mb-4">
          <div className="btn-group" role="group" aria-label="Category Filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn-secondary ${
                  selectedCategory() === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredProducts().length > 0 ? (
          filteredProducts().map((product) => {
            const imageUrl = product.image[Object.keys(product.image)[0]];

            return (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <div
                  className="card product-card"
                  style={{ maxHeight: "650px" }}
                >
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="card-img-top product-image"
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div
                    className="card-body d-flex flex-column"
                    style={{ padding: "0.5rem", overflow: "hidden" }}
                  >
                    <h5
                      className="card-title text-center"
                      style={{ fontSize: "1rem" }}
                    >
                      {product.name}
                    </h5>
                    <p
                      className="card-text product-description text-center"
                      style={{
                        fontSize: "0.85rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="card-text text-center">
                      <strong>${product.price.toFixed(2)}</strong>
                    </p>
                    <div className="mt-auto">
                      <A
                        href={`/product/${product.id}`}
                        className="btn btn-primary btn-block"
                        style={{ padding: "0.4rem" }}
                      >
                        View Details
                      </A>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-12 text-center">
            No products available in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
