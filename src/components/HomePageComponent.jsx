import { createSignal } from "solid-js";
import products from "../data/products";
import coverPhoto from "../assets/cover-photo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePageComponent.css";

function HomePageComponent() {
  const getRandomProducts = (num) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const [randomProducts] = createSignal(getRandomProducts(4));

  return (
    <div class="home-container">
      <div class="cover-photo-container">
        <img
          src={coverPhoto}
          alt="PetJoy Cover Photo"
          class="cover-photo-img"
        />
        <div class="overlay">
          <div class="text-center">
            <h1 class="display-4 mb-3 text-white">Welcome to PetJoy!</h1>
            <p class="lead mb-4 text-white">
              Discover the best toys, food, and apparel for your furry friends.
            </p>
            <blockquote class="blockquote text-white">
              <p class="mb-0">
                "Every pet deserves a little joy. Let's make their lives
                happier!"
              </p>
            </blockquote>
            <blockquote class="blockquote text-white">
              <p class="mb-0">"Love your pets as much as they love you."</p>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <h2 class="featured-heading text-center mb-4">Featured Products</h2>
        <div class="row">
          {randomProducts().map((product) => (
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div class="card product-card">
                <img
                  src={product.image[Object.keys(product.image)[0]]}
                  alt={product.name}
                  class="card-img-top product-image"
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.description}</p>
                  <p class="card-text">
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  <a href={`/product/${product.id}`} class="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageComponent;
