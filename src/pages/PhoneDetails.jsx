import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { addFavorite, addToCart, getCart } from "../utility/Utility";
import { CartContext } from "../provider/Context";

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };
  const handleCart = () => {
    addToCart(singlePhone);
    setCart(getCart())
  };

  return (
    <div>
      <div className="card py-6 ">
        <figure>
          <img
            className="lg:w-8/12 md:h-10/12 w-full mx-auto rounded-md"
            src={image}
            alt="phones"
          />
        </figure>
        <div className="card-body">
          <div className="lg:flex md:flex  justify-between">
            <h2 className=" text-7xl font-thin">{name}</h2>
            <div className="flex items-center space-x-4 justify-around py-4">
              <button
                onClick={handleCart}
                className="relative inline-block text-lg group cursor-pointer"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    <FaCartShopping size={30} />
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
              <button
                onClick={handleFavorite}
                className="relative inline-block text-lg group cursor-pointer"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    <MdBookmarkAdd size={30} />
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </div>
          <div className="text-xl space-y-8">
            <h1 className="font-thin text-5xl">Details:</h1>
            <h5>
              <span className="font-bold">Brand: </span>
              {brand}
            </h5>
            <h5>Model:{model}</h5>
            <h5>
              <span className="font-bold">Storage: </span>
              <ul className="list-disc list-inside">
                {storage?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </h5>
            <h5>
              <span className="font-bold">Price: </span>

              <ul className="list-disc list-inside">
                {price &&
                  Object.entries(price).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
              </ul>
            </h5>
            <h5>
              <span className="font-bold">Camera Info: </span> {camera_info}
            </h5>
            <p>
              <span className="font-bold">Brand: </span> {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
