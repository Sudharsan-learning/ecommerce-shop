import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const products = useSelector((state) => state.cart);
  return (
    <section className="container">
      <nav className="w-full p-5 border-b-2">
        <ul className="flex items-center justify-between list-none">
          <li className="logo-container ml-3">
            <Link to="/">
              <h4 className="primary-color logo-font cursor-pointer">
                Your Shop <br /> Order
              </h4>
            </Link>
          </li>
          <div className="flex items-center mr-3">
            <li className="p-4">
              <Link to="/cart" class="relative flex">
                <svg
                  class="-ms-2 me-2 h-10 w-10"
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
                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {products.length}
                </span>
              </Link>
            </li>
            <li className="p-4">
              <Link to="/order">Order</Link>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
