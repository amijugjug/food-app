// pages/index.js
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard";
import { MENU_ITEM } from "../../utils/constants";

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setMenuItems(MENU_ITEM);
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <Head>
        <title>Food App</title>
      </Head>

      <div className="bg-red-500 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Food App</h1>
        <p className="text-lg">Explore our delicious menu below:</p>
      </div>

      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
