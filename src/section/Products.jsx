import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCategory } from "../redux/action/categorySlicer";
import { fetchProducts } from "../redux/action/productSlicer";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Category() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);
  const product = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, []);
  const navigation = useNavigate()
  const handleDetail =(id)=> {
    navigation(`/product/${id}`)
  }
  return (
    <div className="container py-2 px-24 mx-auto">
      <ul className="container flex w-full my-5  gap-x-5">
        <li>
          <NavLink className="">
            <button
              type="button"
              className="text-white bg-blue-800 rounded-full focus:ring-4 focus:ring-blue-200 font-medium text-sm px-6 py-3 "
            >
              all
            </button>
          </NavLink>
        </li>
        {data.map((category, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-3"
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-10 my-16 mx-auto">
        {product.map((product) => {
          return (
            <div onClick={()=> handleDetail(product.id)} className="card cursor-pointer  rounded-md  bg-gray-100  hover:bg-gray-200 hover:-translate-y-2 ease-in duration-100">
              <div>
                <img src={product.image} alt="" className="w-[300px] h-[300px]" />
              </div>
              <div className="flex flex-col px-4 py-2 justify-between h-[150px]">
                <h1 className="">{product.title}</h1>
                <div className="flex justify-between items-center">
                  <h1 className=""> ${product.price}</h1>
                  <MdFavoriteBorder className="cursor-pointer" fontSize="1.3em"/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
