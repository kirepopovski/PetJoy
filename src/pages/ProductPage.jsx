import products from "../data/products";
import "./ProductPage.css"; // Link to external CSS file for additional styling
import { A } from "@solidjs/router";
function ProductPage() {
  return (
    <div className="container-fluid product-page">
      {" "}
      {/* Used 'container-fluid' to take full width */}
      <h1 className="my-4 text-center">Products</h1>
      <div className="row justify-content-center">
        {products.map((product) => {
          const imageUrl = product.image[Object.keys(product.image)[0]];

          return (
            <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card product-card">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="card-img-top product-image"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text product-description">
                    {product.description}
                  </p>
                  <p className="card-text text-center">
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  <A
                    href={`/product/${product.id}`}
                    className="btn btn-primary btn-block"
                  >
                    View Details
                  </A>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
