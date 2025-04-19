import React, { useEffect, useState } from "react";
import PhonesCard from "./PhonesCard";
import { getFavorite, removeFavorite } from "../utility/Utility";
import Empty from "../ui/Empty";

const Favorite = () => {
  const [displayPhone, setDisplayPhone] = useState([]);
  useEffect(() => {
    const savedPhone = getFavorite();
    setDisplayPhone(savedPhone);
  }, []);
  const handleDelete = (id) => {
    removeFavorite(id);
    setDisplayPhone(getFavorite());
  };
  
  if (displayPhone.length < 1)  return <Empty></Empty>;
   
  

  return (
    <div>
      <div className="py-12">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayPhone.map((phone) => (
            <PhonesCard
              key={phone.id}
              phone={phone}
              delatable={true}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
