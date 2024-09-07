// src/components/HomePageComponent.jsx
import coverPhoto from "../assets/cover-photo.png"; // Adjust the path and filename as needed
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePageComponent.css"; // Import custom CSS for additional styling

function HomePageComponent() {
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
    </div>
  );
}

export default HomePageComponent;
