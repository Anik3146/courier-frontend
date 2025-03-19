import { useEffect, useState } from "react";
import { baseUrl } from "../constant";
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

export default function NewDeliveryForm({
  delivery_charge,
  setDeliveryDivision,
  setDeliveryType,
  setWeightQuantity,
}: any) {
  // State to store product types
  const [productTypes, setProductTypes] = useState<any[]>([]);
  const [selectedProductType, setSelectedProductType] = useState<any>("");
  const [formData, setFormData] = useState<any>({
    store_name: "store_name", // Static value for the store name (for example purposes)
    product_type: "",
    recipient_name: "",
    recipient_phone: "",
    recipient_secondary_phone: "",
    delivery_area: "",
    division: "",
    zilla: "",
    thana: "",
    second_instructions: "",
    delivery_type: "",
    total_weight: 0,
    quantity: 0,
    amount_to_collect: 0,
    description_and_price: "",
    merchant_id: 1,
  });

  useEffect(() => {
    setDeliveryDivision(formData.division);
    setDeliveryType(formData.delivery_type);
    setWeightQuantity(formData.total_weight * formData.quantity);
  }, [
    formData.division,
    formData.quantity,
    formData.total_weight,
    formData.delivery_type,
  ]);

  useEffect(() => {}, [delivery_charge]);

  // Fetch product types from the backend when the component mounts
  useEffect(() => {
    const fetchProductTypes = async () => {
      try {
        const response = await fetch(`${baseUrl}/products`); // Replace with your backend API URL
        const data = await response.json();
        const productNames = data.map((item: any) => item.product_name);
        setProductTypes(productNames); // Set the fetched product names
      } catch (error) {
        console.error("Error fetching product types:", error);
      }
    };

    fetchProductTypes();
  }, []);

  // Handle changes in form input fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle product type selection change
  const handleProductTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProductType(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const postData = {
      merchant_id: formData.merchant_id,
      store_name: formData.store_name,
      product_type: selectedProductType,
      recipient_name: formData.recipient_name,
      recipient_phone: formData.recipient_phone,
      recipient_secondary_phone: formData.recipient_secondary_phone || null,
      address: formData.delivery_area,
      area: formData.delivery_area,
      instructions: formData.second_instructions || null,
      delivery_type: formData.delivery_type,
      total_weight: parseFloat(formData.total_weight),
      quantity: parseInt(formData.quantity),
      amount_to_collect: parseFloat(formData.amount_to_collect),
      price: parseFloat(formData.description_and_price), // Assuming the price is the second part of the input
      division: formData.division,
      zilla: formData.zilla,
      thana: formData.thana,
      delivery_status: "Pending",
      pickup_status: "Pending",
      delivery_charge: delivery_charge,
      // Example static values for agent, pickupMan, and deliveryMan
      // agent_id: 1,
      // pickup_man_id: 1,
      // delivery_man_id: 1,
      // delivery_charge: 10.0, // Example delivery charge, adjust based on your logic
    };

    try {
      const response = await fetch(`${baseUrl}/deliveries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("Delivery created successfully!");
        // Handle success (reset form or redirect, etc.)
      } else {
        console.error("Error creating delivery:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(postData);
  };

  return (
    <>
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
              <input
                type="text"
                disabled
                className="input input-bordered bg-[#eeffee]"
                value={formData.store_name}
                name="store_name"
              />
            </div>

            <div className="form-control w-auto">
              <label className="label text-gray-700">Product Type</label>
              <select
                className="select select-bordered text-gray-500 bg-[#eeffee]"
                value={selectedProductType}
                onChange={handleProductTypeChange}
              >
                <option value="">Select a product type</option>
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-auto">
              <label className="label text-gray-700">
                Merchant Order ID{" "}
                <FaExclamationCircle className="text-gray-500" />
              </label>
              <input
                disabled
                type="text"
                className="input input-bordered bg-[#eeffee]"
                name="merchant_id"
                value={formData.merchant_id}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Recipient Details
              </h3>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Recipient's Phone
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter phone number"
                  name="recipient_phone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Recipient's Secondary Phone
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter secondary phone"
                  name="recipient_secondary_phone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Recipient's Name
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter name"
                  name="recipient_name"
                  onChange={handleInputChange}
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
                  name="delivery_area"
                  onChange={handleInputChange}
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
                  name="division"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Zilla
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter zilla"
                  name="zilla"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Thana
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter thana"
                  name="thana"
                  onChange={handleInputChange}
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
                  name="second_instructions"
                  onChange={handleInputChange}
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
                <select
                  className="select select-bordered bg-[#eeffee]"
                  name="delivery_type"
                  value={formData.delivery_type}
                  onChange={handleInputChange}
                >
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
                  name="total_weight"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label text-semibold text-gray-800">
                  Quantity{" "}
                  <FaExclamationCircle className="text-gray-600 text-sm" />
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-[#eeffee] placeholder-gray-400"
                  placeholder="Enter quantity"
                  name="quantity"
                  onChange={handleInputChange}
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
                  name="amount_to_collect"
                  onChange={handleInputChange}
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
                  name="description_and_price"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              className="bg-[#008000] text-white px-5 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button className="bg-[#CCFFCC] text-[#008000] px-5 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
