import React from "react";
import { Link } from "react-router";
import { IoRemove } from "react-icons/io5";

const PhonesCard = ({ phone, delatable,handleDelete }) => {
  const { name, image, description, id } = phone || {};
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={image} alt="card Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/phone-details/${id}`}>
              <button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View All
                </span>
              </button>
            </Link>
          </div>
        </div>

        {delatable && (
          <div onClick={()=>handleDelete(id)} className="absolute -top-0 -right-0 px-2 bg-gray-900 rounded hover:bg-red-400 group text-white cursor-pointer">
            <IoRemove size={25} className="text-gray-100 group-hover:text-gray-900" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhonesCard;
