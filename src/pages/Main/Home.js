/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";

const Home = () => {

  const dispatch = useDispatch();
  
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  const products = data;


  const activeClass = "text-white bg-indigo-500 border-white";

  if (isLoading) { 
    return <p>loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }
 

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggle())}
          className="border px-3 py-2 rounded-full font-semibold"
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className="border px-3 py-2 rounded-full font-semibold"
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className="border px-3 py-2 rounded-full font-semibold"
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {
          products.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
        }
      </div>
    </div>
  );
};

export default Home;
