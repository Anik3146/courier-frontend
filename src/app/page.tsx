"use client";

import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import NewDeliveryForm from "../../components/newDelivery";
import CostOfDelivery from "../../components/costOfDelivery";

export default function Home() {
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [deliveryType, setDeliveryType] = useState("Free Shipping");
  const [weightQuantity, setWeightQuantity] = useState(0);
  const [deliveryDivision, setDeliveryDivision] = useState("Dhaka");

  // Update the delivery charge based on weight and delivery type
  const updateDeliveryCharge = () => {
    let updatedCharge = 0;

    if (deliveryDivision === "Dhaka") {
      updatedCharge += 50;
    } else {
      updatedCharge += 100;
    }
    // Apply weight-based charges
    if (weightQuantity >= 100) {
      updatedCharge += 50; // Additional charge for weight
    } else if (weightQuantity >= 200) {
      updatedCharge += 100; // Additional charge for weight above 5kg
    }

    // Apply delivery type charges
    switch (deliveryType) {
      case "Express":
        updatedCharge += 30;
        break;
      case "Super Delivery":
        updatedCharge += 50;
        break;
      case "Free Shipping":
      default:
        break; // No extra charge for free shipping
    }

    setDeliveryCharge(updatedCharge);
  };

  useEffect(() => {
    // Recalculate delivery charge when weight or delivery type changes
    updateDeliveryCharge();
  }, [weightQuantity, deliveryType, deliveryDivision]);

  useEffect(() => {
    //console.log(weightQuantity, deliveryType, deliveryDivision, deliveryCharge);
  }, [deliveryCharge]);
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row mt-2">
        <Sidebar />
        <div className="flex flex-col lg:flex-row flex-grow p-4">
          <NewDeliveryForm
            delivery_charge={deliveryCharge}
            setDeliveryDivision={setDeliveryDivision}
            setDeliveryType={setDeliveryType}
            setWeightQuantity={setWeightQuantity}
          />
          <CostOfDelivery
            delivery_charge={deliveryCharge}
            setDeliveryCharge={setDeliveryCharge}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
