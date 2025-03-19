import { useState, useEffect } from "react";

export default function CostOfDelivery({
  delivery_charge,
  setDeliveryCharge,
}: any) {
  // Initialize deliveryFee with the value from delivery_charge prop
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [codFee, setCodFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [additionalCharge, setAdditionalCharge] = useState(0);
  const [communicationCost, setCommunicationCost] = useState(0);

  // Function to calculate total cost
  const calculateTotalCost = () => {
    return (
      deliveryFee +
      codFee -
      discount -
      promoDiscount +
      additionalCharge +
      communicationCost
    );
  };

  // Update deliveryFee when the delivery_charge prop changes, but only if it is different
  useEffect(() => {
    if (delivery_charge !== deliveryFee) {
      setDeliveryFee(delivery_charge);
    }
  }, [delivery_charge]);

  // Update delivery charge based on total cost whenever state variables change
  useEffect(() => {
    const totalCost = calculateTotalCost();
    setDeliveryCharge(totalCost); // Set the calculated total cost as delivery charge
  }, [
    codFee,
    discount,
    promoDiscount,
    additionalCharge,
    communicationCost,
    setDeliveryCharge,
  ]);

  return (
    <>
      <div className="sm:ml-2 mt-2 sm:mt-0 p-4 w-full lg:w-1/3 border-1 border-gray-200 text-sm">
        <div className="space-y-4">
          <h2 className="text-xl text-gray-700 font-bold">Cost of Delivery</h2>

          {/* Delivery Fee */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">
              Delivery Fee
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold">৳</span>
              <span className="text-gray-500 font-semibold">{deliveryFee}</span>
            </div>
          </div>

          {/* COD Fee */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">COD Fee</label>
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold">৳</span>
              <span className="text-gray-500 font-semibold">{codFee}</span>
            </div>
          </div>

          {/* Discount */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">
              Discount
            </label>
            <div className="flex items-center">
              <span className="text-red-400 font-semibold">-৳</span>
              <span className="text-red-400 font-semibold">{discount}</span>
            </div>
          </div>

          {/* Promo Discount */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">
              Promo Discount
            </label>
            <div className="flex items-center">
              <span className="text-red-400 font-semibold">-৳</span>
              <span className="text-red-400 font-semibold">
                {promoDiscount}
              </span>
            </div>
          </div>

          {/* Additional Charge */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">
              Additional Charge
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold">৳</span>
              <span className="text-gray-500 font-semibold">
                {additionalCharge}
              </span>
            </div>
          </div>

          {/* Communication Cost */}
          <div className="flex justify-between items-center">
            <label className="label text-gray-700 font-semibold">
              Communication Cost
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold">৳</span>
              <span className="text-gray-500 font-semibold">
                {communicationCost}
              </span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Total Cost */}
          <div className="flex justify-between items-center font-bold text-sm">
            <span>Total Cost</span>
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold">৳</span>
              <span className="text-gray-500 font-semibold">
                {calculateTotalCost()}
              </span>
            </div>
          </div>
        </div>

        <div className="text-gray-600 pt-3">
          Suspendisse quis quam eget lacus finibus convallis eget pellentesque
          lorem. Donec accumsan molestie diam vel maximus. In hac habitasse
          platea dictumst. Nulla sit amet dui sem. Nullam ac facilisis magna.
          Nullam eget porta nisi. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Maecenas in
          aliquet risus. Etiam interdum, metus ac faucibus pharetra, arcu sem
          congue enim, et ullamcorper tortor nibh nec dui. Cras vulputate tempus
          commodo. Nulla eget dui posuere, rhoncus nunc eget, tincidunt leo.
          Praesent convallis dapibus mauris ultrices scelerisque. Nunc
          porttitor, nibh eu pellentesque posuere, erat neque accumsan nisl, vel
          mollis purus justo eget turpis. Donec scelerisque nisi et est
          pellentesque rutrum. Donec volutpat sit amet ligula quis congue.
          Praesent condimentum porta ex fermentum accumsan. Donec ac justo eget
          mauris tincidunt fermentum. In convallis blandit nisi, non cursus diam
          mattis eget. Aenean tempor malesuada quam at elementum.
        </div>
      </div>
    </>
  );
}
