// src/components/FooterComponent.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./FooterComponent.css"; // Import custom CSS for additional styling
import fblogo from "../assets/fblogo.png";
import instalogo from "../assets/instalogo.jpeg";
import linkedinlogo from "../assets/linkedinlogo.jpeg";

function FooterComponent() {
  return (
    <footer class="footer bg-dark text-white py-4">
      <div class="ftr">
        <div class="row">
          {/* Contact Information */}
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email:{" "}
              <a href="mailto:info@petjoy.com" class="text-white">
                info@petjoy.com
              </a>
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Pet Street, Petville, PA 12345
            </p>
          </div>

          {/* Useful Links */}
          <div class="col-md-4">
            <h5>PetJoy</h5>
            <ul class="list-unstyled">
              <li>
                <a href="/" class="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" class="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/aboutus" class="text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <div class="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon me-3"
              >
                <img src={fblogo} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon me-3"
              >
                <img src={instalogo} alt="Instagram" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <img src={linkedinlogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <p class="mb-0">© 2024 PetJoy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
