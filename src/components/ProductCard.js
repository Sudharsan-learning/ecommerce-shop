import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slice/cartSlice";

function ProductCard(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const products = useSelector((state) => state.cart);

  const cartProducts = products.find((data) => data.uniq_id.includes(product.uniq_id));

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-80">
      <Link to={`/shop/${product.product_name}`} className="overflow-hidden rounded">
        <img className="mx-auto h-44 w-44" src={product.image[0]} alt={product.product_name} />
      </Link>
      <div>
        <Link
          to={`/shop/${product.product_name}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline product-title"
        >
          {product.product_name}
        </Link>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 product-description">
          {product.description}
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900">
          <span className="line-through">&#8377; {product.retail_price}</span>
        </p>
        <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
          &#8377;{product.discounted_price}
        </p>
      </div>

      {cartProducts ? (
        <Link to={"/cart"}>
          <div className="mt-6 flex items-center gap-2.5">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-slate-400"
            >
              View cart
            </button>
          </div>
        </Link>
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
  );
}

export default ProductCard;
