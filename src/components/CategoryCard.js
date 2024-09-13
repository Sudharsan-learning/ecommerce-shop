import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  console.log("props.category", props);
  return (
    <section>
      <div className="border-2 rounded-2xl flex justify-center cursor-pointer">
        <Link to={`/shop?category=${props.category}`}>
          <div className="p-4 w-60 flex flex-col items-center justify-center">
            <div className="w-24">
              <img
                src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                alt="category-image"
              />
            </div>
            <div className="text-center text-base font-bold">
              {props.category}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default CategoryCard;
