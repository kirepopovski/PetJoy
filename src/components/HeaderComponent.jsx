import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import logo from "../assets/logo.jpg"; // Adjust the path as needed
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderComponent.css"; // Import custom CSS for additional styling

function HeaderComponent() {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle navigation on link click
  const handleNavigation = (path) => (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate(path); // Navigate to the specified path
  };

  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" class="navbar-brand" onClick={handleNavigation("/")}>
          <img src={logo} alt="PetJoy Logo" class="logo-img" />
          <h3 class="ms-2">PetJoy</h3>
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link" onClick={handleNavigation("/")}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/aboutus"
                class="nav-link"
                onClick={handleNavigation("/aboutus")}
              >
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/products"
                class="nav-link"
                onClick={handleNavigation("/products")}
              >
                Products
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/cart"
                class="nav-link"
                onClick={handleNavigation("/cart")}
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
