"use client";

import { useEffect, useState } from "react";
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
import { baseUrl } from "../../constant";
import Sidebar from "../../components/sidebar";
import NewDeliveryForm from "../../components/newDelivery";

const CostOfDelivery = () => (
  <div className="sm:ml-2 mt-2 sm:mt-0 p-4 w-full lg:w-1/3 border-1 border-gray-200 text-sm">
    <div className="space-y-4">
      <h2 className="text-xl text-gray-700 font-bold">Cost of Delivery</h2>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Delivery Fee
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">0</span>{" "}
          {/* Static value for Delivery Fee */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">COD Fee</label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">0</span>{" "}
          {/* Static value for COD Fee */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">Discount</label>
        <div className="flex items-center">
          <span className="text-red-400 font-semibold">-৳</span>
          <span className="text-red-400 font-semibold">0</span>{" "}
          {/* Static value for Discount with minus */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Promo Discount
        </label>
        <div className="flex items-center">
          <span className="text-red-400 font-semibold">-৳</span>
          <span className="text-red-400 font-semibold">0</span>{" "}
          {/* Static value for Promo Discount with minus */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Additional Charge
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">0</span>{" "}
          {/* Static value for Additional Charge */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="label text-gray-700 font-semibold">
          Communication Cost
        </label>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">0</span>{" "}
          {/* Static value for Communication Cost */}
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex justify-between items-center font-bold text-sm">
        <span>Total Cost</span>
        <div className="flex items-center">
          <span className="text-gray-500 font-semibold">৳</span>
          <span className="text-gray-500 font-semibold">0</span>{" "}
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
