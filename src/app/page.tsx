"use client";

import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  FaBox,
  FaBoxes,
  FaCreditCard,
  FaExclamationCircle,
  FaFacebook,
  FaFileInvoice,
  FaGlobe,
  FaLifeRing,
  FaLink,
  FaStore,
  FaStoreAlt,
  FaTag,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar for large screens */}
      <div
        className={`lg:w-64 bg-white border-r border-gray-200 text-black p-4 h-screen ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="space-y-4 max-h-screen overflow-y-auto text-gray-500">
          <li className="flex items-center space-x-2">
            <MdDashboard className="text-gray-600" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaTruck className="text-gray-600" />
            <span>Deliveries</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaFileInvoice className="text-gray-600" />
            <span>Invoice</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaStore className="text-gray-600" />
            <span>Stores</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaLifeRing className="text-gray-600" />
            <span>Help Center</span>
          </li>
          <div className="divider"></div>
          <li className="text-xs text-gray-400 flex items-center space-x-2">
            <FaLink className="text-gray-400" />
            <span>Quick Links</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaFacebook className="text-gray-600" />
            <span>Facebook Group</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxes className="text-gray-600" />
            <span>Bulk Delivery</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaStoreAlt className="text-gray-600" />
            <span>Create Store</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCreditCard className="text-gray-600" />
            <span>Pricing Plan</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-gray-600" />
            <span>Operators</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaGlobe className="text-gray-600" />
            <span>Coverage Area</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaExclamationCircle className="text-gray-600" />
            <span>Report Issue</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCreditCard className="text-gray-600" />
            <span>Payment Info</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaTag className="text-gray-600" />
            <span>Promo</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBox className="text-gray-600" />
            <span>Packing Poly</span>
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="lg:hidden p-4 inline-flex text-gray-600"
        onClick={toggleSidebar}
      >
        <CiMenuFries className="text-xl font-bond mx-2" />
        {isSidebarOpen ? "Close Sidebar Menu" : "Open Sidebar Menu"}{" "}
      </button>
    </div>
  );
};

const NewDeliveryForm = () => (
  <div className="flex flex-col space-y-4 p-4 w-full lg:w-2/3 border-1 border-gray-200">
    <div className="flex justify-between items-center">
      <h2 className="text-xl text-gray-700 font-bold">New Delivery</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <button className="btn text-white bg-[#008000] w-full sm:w-auto">
          Create Delivery
        </button>
        <button className="btn text-[#008000] bg-white ring-1 ring-[#008000] w-full sm:w-auto">
          Bulk Delivery
        </button>
        <button className="btn text-[#008000] bg-white ring-1 ring-[#008000] w-full sm:w-auto">
          Partial Delivery
        </button>
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex space-x-6">
        <div className="form-control w-auto">
          <label className="label text-gray-700">
            Store <FaExclamationCircle className="text-gray-600 text-sm" />
          </label>
          <input type="text" className="input input-bordered bg-[#eeffee]" />
        </div>

        <div className="form-control w-auto">
          <label className="label text-gray-700">Product Type</label>
          <select className="select select-bordered text-gray-300 bg-[#eeffee]">
            <option>Parcel</option>
            <option>Option 2</option>
          </select>
        </div>

        <div className="form-control w-auto">
          <label className="label text-gray-700">
            Merchant Order ID <FaExclamationCircle className="text-gray-500" />
          </label>
          <input type="text" className="input input-bordered bg-[#eeffee]" />
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Recipient Details
          </h3>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Repient's Phone
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Repient's Secondary Phone
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter secondary phone"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Repient's Name
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter name"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Delivery Area
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter delivery area"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Division
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter division"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">Zilla</label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter zilla"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">Thana</label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter thana"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Second Instructions{" "}
              <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter second instructions"
            />
          </div>
        </div>

        <div className="w-1/2 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Delivery Details
          </h3>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Delivery Type{" "}
              <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <select className="select select-bordered bg-[#eeffee]">
              <option>Express</option>
              <option>Free Shipping</option>
              <option>Super Delivery</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Total Weight{" "}
              <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter total weight"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Quantity <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter quantity"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Amount to Collect{" "}
              <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter amount"
            />
          </div>
          <div className="form-control">
            <label className="label text-semibold text-gray-800">
              Description & Price
              <FaExclamationCircle className="text-gray-600 text-sm" />
            </label>
            <input
              type="text"
              className="input input-bordered bg-[#eeffee] placeholder-gray-400"
              placeholder="Enter description & price"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="bg-[#008000] text-white px-5 py-2 rounded-lg">
          save
        </button>
        <button className="bg-[#CCFFCC] text-[#008000] px-5 py-2 rounded-lg">
          cancel
        </button>
      </div>
    </div>
  </div>
);

const CostOfDelivery = () => (
  <div className="sm:ml-2 mt-2 sm:mt-0 p-4 w-full lg:w-1/3 border-1 border-gray-200 text-xs">
    <div className="space-y-4">
      <h2 className="text-xl text-gray-700 font-bold">Cost of Delivery</h2>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Delivery Fee
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">500</span>{" "}
          {/* Static value for Delivery Fee */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">COD Fee</label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">200</span>{" "}
          {/* Static value for COD Fee */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">Discount</label>
        <div className="flex items-center">
          <span className="text-red-400 font-semibold">-৳</span>
          <span className="text-red-400 font-semibold">50</span>{" "}
          {/* Static value for Discount with minus */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Promo Discount
        </label>
        <div className="flex items-center">
          <span className="text-red-400 font-semibold">-৳</span>
          <span className="text-red-400 font-semibold">30</span>{" "}
          {/* Static value for Promo Discount with minus */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Additional Charge
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">100</span>{" "}
          {/* Static value for Additional Charge */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Communication Cost
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">20</span>{" "}
          {/* Static value for Communication Cost */}
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex justify-between items-center font-bold text-sm">
        <span>Total Cost</span>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">800</span>{" "}
          {/* Static value for Total Cost */}
        </div>
      </div>
    </div>
    <div className="text-gray-600 pt-3">
      Suspendisse quis quam eget lacus finibus convallis eget pellentesque
      lorem. Donec accumsan molestie diam vel maximus. In hac habitasse platea
      dictumst. Nulla sit amet dui sem. Nullam ac facilisis magna. Nullam eget
      porta nisi. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Maecenas in aliquet risus. Etiam interdum,
      metus ac faucibus pharetra, arcu sem congue enim, et ullamcorper tortor
      nibh nec dui. Cras vulputate tempus commodo. Nulla eget dui posuere,
      rhoncus nunc eget, tincidunt leo. Praesent convallis dapibus mauris
      ultrices scelerisque. Nunc porttitor, nibh eu pellentesque posuere, erat
      neque accumsan nisl, vel mollis purus justo eget turpis. Donec scelerisque
      nisi et est pellentesque rutrum. Donec volutpat sit amet ligula quis
      congue. Praesent condimentum porta ex fermentum accumsan. Donec ac justo
      eget mauris tincidunt fermentum. In convallis blandit nisi, non cursus
      diam mattis eget. Aenean tempor malesuada quam at elementum.
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row mt-2">
        <Sidebar />
        <div className="flex flex-col lg:flex-row flex-grow p-4">
          <NewDeliveryForm />
          <CostOfDelivery />
        </div>
      </div>
      <Footer />
    </>
  );
}
