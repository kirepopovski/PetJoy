import { Show } from "solid-js";
import { useCart } from "../contexts/CartContext";
import "./CartPage.css"; // Link to CSS file for additional styling

function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Calculate total price and total items
  const totalItems = () =>
    cart().reduce((total, item) => total + item.quantity, 0);
  const totalPrice = () =>
    cart()
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      <Show when={cart().length > 0} fallback={<div>Your cart is empty.</div>}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart().map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image[Object.keys(item.image)[0]]}
                    alt={item.name}
                    className="img-fluid cart-item-image"
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <i>{item.description}</i>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Items: {totalItems()}</td>
              <td>Total: ${totalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </Show>
    </div>
  );
}

export default CartPage;
