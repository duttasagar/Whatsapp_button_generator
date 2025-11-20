
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CodeBox from "../components/CodeBox";

const Home = () => {
  const [data, setData] = useState({
    phone: "",
    message: "Hello! I am contacting you!",
    label: "WhatsApp",
    color: "#16BE45",
    size: "medium",
    shape: "pill",
    position: "inline",
    newTab: false,
  });

  const link = `https://wa.me/${data.phone}?text=${encodeURIComponent(data.message)}`;

  return (
    <div className="flex  px-6  flex-col ">
        <section className="  px-6 text-center bg-transparent ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Free WhatsApp Chat Button & WhatsApp Chat Widget
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          Create a beautiful WhatsApp Live Chat Widget and add it to your website for free 
          using our simple WhatsApp button generator.
        </p>
      </section>


      <div className="flex w-full h-full">
          <div className="w-2/3 h-full p-4">
            <Sidebar data={data} setData={setData} />
          </div>

          <div className="w-1/3 h-full p-4">
            <CodeBox data={data} link={link} />
          </div>
      </div>


    </div>
  );
};

export default Home;
