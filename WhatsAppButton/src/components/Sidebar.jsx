

import { useState } from "react";
import { validate } from "../utils/validation";
import { BsWhatsapp } from "react-icons/bs";

const Sidebar = ({ data, setData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    const updatedData = { ...data, [name]: updatedValue };
    setData(updatedData);
    setErrors(validate(updatedData));
  };

  return (
    <div className="flex justify-center   px-4 bg-gray-50  font-inter">
      <div className="w-full max-w-6xl bg-white rounded-xl flex flex-col md:flex-row overflow-hidden">
        
        <div className="flex-1 flex flex-col relative p-6 bg-gray-50 font-inter">
          
          <div className="absolute top-6 left-6 rounded-lg">
            <a
              href={`https://wa.me/${data.phone}?text=${encodeURIComponent(data.message)}`}
              target={data.newTab ? "_blank" : "_self"}
              style={{ backgroundColor: data.color }}
              className={`text-white font-medium flex items-center gap-2 px-6 py-3
                ${data.shape === "pill" ? "rounded-full" : data.shape === "square" ? "rounded-none" : "rounded-lg"}
                ${data.size === "small" ? "text-sm py-2 px-4" : data.size === "large" ? "text-xl py-4 px-8" : "text-base py-3 px-6"} 
                transition-transform transform hover:scale-105
              `}
            >
              <BsWhatsapp size={20} /> {data.label}
            </a>
          </div>

          <div className="mt-24 flex-1 overflow-y-auto">
            <h2 className="text-2xl  text-gray-900 mb-4 font-bold">
              Customize WhatsApp Button
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700 ">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+918789876540"
                  value={data.phone}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 rounded-lg border border-gray-300 bg-white font-inter"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Default Message</label>
                <textarea
                  name="message"
                  rows={1}
                  value={data.message}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 rounded-lg border border-gray-300 bg-white font-inter"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Button Label</label>
                <input
                  type="text"
                  name="label"
                  value={data.label}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 rounded-lg border border-gray-300 bg-white font-inter"
                />
                {errors.label && <p className="text-red-500 text-sm">{errors.label}</p>}
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Size</label>
                <select
                  name="size"
                  value={data.size}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 rounded-lg border border-gray-300 bg-white font-inter"
                >
                  <option>small</option>
                  <option>medium</option>
                  <option>large</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Shape</label>
                <select
                  name="shape"
                  value={data.shape}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 rounded-lg border border-gray-300 bg-white font-inter"
                >
                  <option>rounded</option>
                  <option>pill</option>
                  <option>square</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Color</label>
                <input
                  type="color"
                  name="color"
                  value={data.color}
                  onChange={handleChange}
                  className="w-full h-10 mt-1 font-inter"
                />
                {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 font-inter">
              <input
                type="checkbox"
                name="newTab"
                checked={data.newTab}
                onChange={handleChange}
              />
              <span className="text-gray-700">Open in new tab</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

