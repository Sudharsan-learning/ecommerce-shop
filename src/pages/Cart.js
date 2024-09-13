import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  emptyCart,
  increaseQuantity,
  removeFromCart,
} from "../store/slice/cartSlice";
import { addOrder } from "../store/slice/orderSlice";

function Cart() {
  const [orderId, setOrderId] = useState(1);
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseQuantityHandler = (id) => dispatch(increaseQuantity(id));
  const decreaseQuantityHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalAmount = products.reduce((total, product) => {
    return total + product.discounted_price * product.quantity;
  }, 0);

  let tax = totalAmount / 10;
  let result = totalAmount + 99 + tax;

  const addOrderHandler = () => {
    setOrderId(orderId + 1);
    const order = {
      orderId: orderId,
      products: products,
      totalAmount: totalAmount,
      totalAmountWithTax: result,
    };
    dispatch(addOrder(order));
    dispatch(emptyCart());
  };
  return (
    <>
      {products.length ? (
        <section className="container">
          <div>
            <h1 className="text-center text-4xl mt-5 mb-5 font-bold">Cart</h1>
          </div>
          <div className="flex gap-7">
            <div className="" style={{ width: "70%" }}>
              {products.map((product, index) => (
                <div className="rounded-lg border p-4 shadow-sm md:p-6 mt-5">
                  <div className="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
                    <Link
                      to={`/shop/${product.product_name}`}
                      className="shrink-0 md:order-1"
                    >
                      <img
                        className="w-20"
                        src={product.image[0]}
                        alt={product.product_name}
                      />
                    </Link>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          style={{ padding: "10px" }}
                          onClick={() =>
                            decreaseQuantityHandler(product.uniq_id)
                          }
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                          placeholder=""
                          value={product.quantity}
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                          style={{ padding: "10px" }}
                          onClick={() =>
                            increaseQuantityHandler(product.uniq_id)
                          }
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 ">
                          &#8377;{" "}
                          {Number(
                            (
                              product.discounted_price * product.quantity
                            ).toFixed(2)
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="/"
                        className="text-base font-medium text-gray-900 hover:underline "
                      >
                        {product.product_name}
                      </a>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          onClick={() => removeFromCartHandler(product.uniq_id)}
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mx-auto mt-12 max-w-4xl flex-1 space-y-6 lg:mt-0"
              style={{ width: "30%" }}
            >
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        &#8377; {Number(totalAmount).toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        &#8377; 99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax (10%)
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        &#8377; {Number(tax).toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      &#8377; {Number(result).toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <Link to={"/order"}>
                  <div
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 cursor-pointer "
                    onClick={() => addOrderHandler()}
                  >
                    Place Order
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container">
          <div className="flex justify-center mt-10">
            <h1 className="text-4xl font-bold text-gray-900">
              No products in Cart
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
