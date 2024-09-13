import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Order() {
  const orderDetails = useSelector((state) => state.order);

  console.log("orderDetails", orderDetails);
  return (
    <section>
      {orderDetails.length ? (
        <div className="container">
          <div style={{ width: "70%" }}>
            <h1 className="text-4xl font-bold text-gray-900 mt-5 mb-5 text-center">
              Order
            </h1>
            {orderDetails.map((order) => (
              <>
                <div className="border p-5 rounded-lg mt-3">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Order Id - {order.orderId}
                    </h2>
                    <div>Total - &#8377; {order.totalAmountWithTax}</div>
                  </div>
                  {order.products.map((product) => (
                    <div className="rounded-lg border p-4 shadow-sm md:p-6 mt-5">
                      <div className="space-y-4 md:flex md:items-start md:justify-between md:gap-6 md:space-y-0">
                        <Link
                          to={`/shop/${product.product_name}`}
                          className="shrink-0 order-1"
                        >
                          <img
                            className="w-20"
                            src={product.image[0]}
                            alt={product.product_name}
                          />
                        </Link>
                        <div className="w-full min-w-0 flex-1 space-y-4 order-2 md:max-w-md">
                          <div className="text-base font-medium text-gray-900 hover:underline">
                            {product.product_name}
                          </div>
                        </div>
                        <div className="order-3">
                          <p>
                            {product.quantity} X &#8377;
                            {product.discounted_price} = &#8377;
                            {Number(
                              (
                                product.discounted_price * product.quantity
                              ).toFixed(2)
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="flex justify-center mt-10">
            <h1 className="text-4xl font-bold text-gray-900">
              No Order Recently
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}

export default Order;
