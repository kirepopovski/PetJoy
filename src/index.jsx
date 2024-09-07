// In src/index.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/custom.css";
import { render } from "solid-js/web";
import App from "./App";

render(() => <App />, document.getElementById("root"));
