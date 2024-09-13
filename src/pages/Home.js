import React from "react";
import CategoryCard from "../components/CategoryCard";
import category from "../data/category.json";

function Home() {
  return (
    <section className="container">
      <h1 className="text-center text-4xl mt-5 mb-5 font-bold">Categories</h1>
      <div className="flex items-center flex-wrap gap-5">
        {category.map((data) => (
          <CategoryCard category={data} />
        ))}
      </div>
    </section>
  );
}

export default Home;
