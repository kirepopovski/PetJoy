// src/App.jsx
import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomePageComponent from "./components/HomePageComponent";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router
      root={(props) => (
        <>
          <HeaderComponent />
          <div class="main-content">{props.children}</div>
          <FooterComponent />
        </>
      )}
    >
      <Route path="/" component={HomePage} />
      <Route path="/aboutus" component={AboutUsPage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/product/:id" component={ProductDetailsPage} />
    </Router>
  );
}

export default App;
