import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action/productSlicer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

function DetailProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  console.log(product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {product
        .filter((item) => item.id === +id)
        .map((item) => {
          return (
            <div className="grid grid-cols-2 px-10 container mx-auto h-screen test">
              <div className=" flex justify-center items-center">
                <img src={item.image} alt="" className="w-[400px] h-fit " />
              </div>
              <div className=" w-100 flex flex-col justify-center gap-y-10">
                <div className=" flex flex-col gap-y-5 ">
                  <h1 className="font-bold text-4xl">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div className="tst">
                  <h1 className="font-bold text-2xl">${item.price}</h1>
                </div>
                <div>
                    <Counter/>
                </div>
                <div>
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default DetailProduct;
