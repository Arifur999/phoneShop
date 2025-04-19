import React, { useState } from "react";
import Home from "./Home";
import PhoneContainer from "./PhoneContainer";
import { useLoaderData } from "react-router";

const AllPages = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhones(data);
    const searchedPhone = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    );
    setPhones(searchedPhone);
  };
  return (
    <div>
      <Home handleSearch={handleSearch}></Home>
      <PhoneContainer phones={phones}></PhoneContainer>
    </div>
  );
};

export default AllPages;
