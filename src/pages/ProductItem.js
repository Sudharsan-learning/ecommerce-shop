import React from "react";
import products from "../data/product.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../store/slice/cartSlice";

function ProductItem() {
  let { id } = useParams();
  const dispatch = useDispatch();

  console.log("name", id);

  let product = products.find((data) => data.product_name === id.toString());

  console.log("product", product);

  const listProducts = useSelector((state) => state.cart);

  let cartProducts = listProducts.find((data) =>
    data.uniq_id.includes(product.uniq_id)
  );

  console.log("cartProducts", cartProducts);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const increaseQuantityHandler = (id) => {
    dispatch(increaseQuantity(id));
  };
  const decreaseQuantityHandler = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <section className="container">
      <div className="flex mt-10">
        <div className="w-1/2">
          <img
            className="p-6"
            src={product.image[0]}
            alt={product.product_name}
          />
        </div>
        <div className="w-1/2">
          <div className="overflow-hidden rounded-lg bg-white p-6">
            <div>
              <div className="text-2xl font-semibold leading-tight text-gray-900 hover:underline ">
                {product.product_name}
              </div>
              <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 ">
                {product.description}
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">
                <span className="line-through">
                  &#8377; {product.retail_price}/-
                </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                &#8377; {product.discounted_price}/-
              </p>
            </div>
            <div className="mt-6 ">
              {cartProducts ? (
                <div className="flex items-center justify-between md:order-1">
                  <div className="flex items-center">
                    <button
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="counter-input"
                      className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      style={{ padding: "10px" }}
                      onClick={() =>
                        decreaseQuantityHandler(cartProducts.uniq_id)
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
                      value={cartProducts.quantity}
                      required
                    />
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                      style={{ padding: "10px" }}
                      onClick={() =>
                        increaseQuantityHandler(cartProducts.uniq_id)
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
                </div>
              ) : (
                <div className="mt-6 flex items-center gap-2.5">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-slate-400"
                    onClick={() => addToCartHandler(product)}
                  >
                    <svg
                      className="-ms-2 me-2 h-5 w-5"
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
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
