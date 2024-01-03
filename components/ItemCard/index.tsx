import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{item?.name}</h2>
      <p className="text-gray-700">{item?.description}</p>
      <p className="text-red-500 font-bold mt-4">${item?.price}</p>
    </div>
  );
};

export default ItemCard;
