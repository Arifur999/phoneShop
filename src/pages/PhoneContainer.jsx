import React, { useEffect, useState } from "react";
import PhonesCard from "./PhonesCard";

const PhoneContainer = ({ phones }) => {
  const [displayPhone, setDisplayPhone] = useState([]);
  const [showAll, setShowAll] = useState(false);
//   console.log(phones);

  useEffect(() => {

  if (showAll) {
    setDisplayPhone(phones);
  } else {
    setDisplayPhone(phones.slice(0, 6));
  }
  }, [phones, showAll]);
  return (
    <div className="py-12">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhone.map((phone) => (
          <PhonesCard key={phone.id} phone={phone} />
        ))}
      </div>
      <button
        onClick={() => {
            setShowAll(prv => !prv)
        if(showAll)window.scrollTo(0,400)
        }}
        className="relative inline-block px-4 py-2 font-medium group cursor-pointer "
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          {showAll ? "Show Less" : "Show All"}
        </span>
      </button>
    </div>
  );
};

export default PhoneContainer;
