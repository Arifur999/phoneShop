import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="py-24 text-center space-y-4">
        <h1 className="mb--3 text-7xl font-thin text-gray-900">404</h1>
        <p className="mb-8 text-xl text-gray-900 md:text-2xl">
          No route matches URL "/cart"
        </p>
        <Link to="/">
          <button class="relative inline-block text-lg group">
            <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">GO TO HOMEPAGE</span>
            </span>
            <span
              classN="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
