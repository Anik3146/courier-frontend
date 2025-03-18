import { useState } from "react";
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

export default function Sidebar() {
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
}
