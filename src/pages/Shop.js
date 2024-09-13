import React from "react";
import ProductCard from "../components/ProductCard";
import product from "../data/product.json";
import { useLocation } from "react-router-dom";

function Shop() {
  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const category = query.get("category");

  console.log("category", category);
  let categoryProducts;
  if (category) {
    categoryProducts = product.filter((data) => data.product_category_tree === category.toString());
  }

  console.log("categoryProducts", categoryProducts);
  return (
    <section className="container">
      <h1 className="text-center text-4xl mt-5 mb-5 font-bold">Shop</h1>
      <div className="flex items-center flex-wrap gap-5 ">
        {category
          ? categoryProducts.map((data) => <ProductCard product={data} />)
          : product.map((data) => <ProductCard product={data} />)}
      </div>
    </section>
  );
}

export default Shop;
