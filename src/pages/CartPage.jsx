import { Show, createSignal } from "solid-js";
import { useCart } from "../contexts/CartContext";
import "./CartPage.css";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [removingItem, setRemovingItem] = createSignal(null);

  // Calculate total price and total items
  const totalItems = () =>
    cart().reduce((total, item) => total + item.quantity, 0);
  const totalPrice = () =>
    cart()
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  const handleRemoveClick = (itemId) => {
    setRemovingItem(itemId);

    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItem(null); // Reset the removing item state
    }, 300);
  };

  return (
    <div className="container cart-page-container">
      <div className="cart-page-content">
        <Show
          when={cart().length > 0}
          fallback={
            <div className="text-center mt-5">
              <h3>Your cart is currently empty.</h3>
              <p>
                It looks like you haven't added anything to your cart yet. Start
                exploring our amazing selection of products and find something
                you'll love!
              </p>
              <p>
                Why not head back to the <a href="/products">Products page</a>{" "}
                and discover the perfect items to add to your cart?
              </p>
              <p>
                We offer great deals and exclusive offers, so don’t miss out!
              </p>
            </div>
          }
        >
          <table className="table table-hover table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart().map((item) => (
                <tr
                  key={item.id}
                  className={`cart-item-row ${
                    removingItem() === item.id ? "removing" : ""
                  }`}
                >
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
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleRemoveClick(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end">
                  Items: {totalItems()}
                </td>
                <td colSpan="2" className="text-end">
                  Total: ${totalPrice()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </Show>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Thank you for shopping with us!</p>
      </footer>
    </div>
  );
}

export default CartPage;
