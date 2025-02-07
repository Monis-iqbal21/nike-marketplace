"use client"
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react"; // Import useState
import pro28 from "../../../../public/images/pro1.png";
import pro15 from "../../../../public/images/pro15.png";
import pro11 from "../../../../public/images/pro12.png";
import "./cart.css";
import Link from "next/link";

export default function AddToCard() {
  const [showConfirmOrder, setShowConfirmOrder] = useState(false); // State for toggling visibility

  return (
    <>
      {showConfirmOrder && ( // Conditionally render the confirmation card
        <div className="confirm_order_div">
          <div className="confirm_order_div2">
            <div className="close_btn_div">
              <button
                className="close_btn"
                onClick={() => setShowConfirmOrder(false)} // Hide card on X button click
              >
                X
              </button>
            </div>
            <div className="order_confirm_text">
              <p style={{ width: "100%" }}>Your Order has been confirmed</p>
              <p>Thank you for shopping with us</p>
            </div>
            <div className="continue_shopping_div">
              <Link className="continue_shopping_btn" href="/all-product">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="flex">
        <div className="text">
          <div className="addcard-box2">
            <h1 className="text font-semibold text-2xl mt-3 ml-40">Bag</h1>
          </div>

          {/* Product 1 */}
          <div className="flex mt-8 ml-40">
            <div className="w-[120px] h-[120px]">
              <Image
                src={pro28}
                alt="cartimage"
                width={24}
                height={24}
                layout="responsive"
              />
            </div>
            <div className="ml-5 w-[537px] h-[170px] ">
              <div className="flex">
                <h3 className="text font-bold">Nike Air Force 1 Mid '07</h3>
                <h2 className="text font-semibold ml-44">MRP: $ 10795</h2>
              </div>
              <p className="w-[235px] font-light text-[#757575] mt-1">
              Men's Shoes
              </p>
              <div className="flex mt-2">
                <h5 className="text-[#757575]">Size L</h5>
                <h5 className="text-[#757575] ml-10">Quantity 4</h5>
              </div>
              <div className="flex gap-3 mt-3">
                <Heart />
                <Trash2 />
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex mt-8 ml-40">
            <div className="w-[120px] h-[120px]">
              <Image
                src={pro15}
                alt="cartimage"
                width={24}
                height={24}
                layout="responsive"
              />
            </div>
            <div className="ml-5 w-[537px] h-[170px]">
              <div className="flex">
                <h3 className="text font-bold">Nike Dunk Low Retro</h3>
                <h2 className="text font-semibold ml-44">MRP: ₹ 8 595.00</h2>
              </div>
              <p className="w-[235px] font-light text-[#757575] mt-1">
                Men's Shoes
              </p>
              <div className="flex mt-2">
                <h5 className="text-[#757575]">Size L</h5>
                <h5 className="text-[#757575] ml-10">Quantity 2</h5>
              </div>
              <div className="flex gap-3 mt-3">
                <Heart />
                <Trash2 />
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex mt-8 ml-40">
            <div className="w-[120px] h-[120px]">
              <Image
                src={pro11}
                alt="cartimage"
                width={24}
                height={24}
                layout="responsive"
              />
            </div>
            <div className="ml-5 w-[537px] h-[170px]">
              <div className="flex">
                <h3 className="text font-bold">Nike Air Force 1 LV8 3</h3>
                <h2 className="text font-semibold ml-44">MRP: ₹ 7 495.00</h2>
              </div>
              <p className="w-[235px] font-light text-[#757575] mt-1">
                Older Kids' Shoes
              </p>
              <div className="flex mt-2">
                <h5 className="text-[#757575]">Size S</h5>
                <h5 className="text-[#757575] ml-10">Quantity 1</h5>
              </div>
              <div className="flex gap-3 mt-3">
                <Heart />
                <Trash2 />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[350px] h-[295px] ml-10 mt-6">
          <h1 className="text text-2xl ml-2 mt-1">Summary</h1>
          <div className="text flex gap-44 ml-2 mt-4">
            <h5>Subtotal</h5>
            <h6>₹ 19 985.00</h6>
          </div>
          <div className="text flex mb-4 ml-2 gap-16 mt-2">
            <h5>Estimated Delivery & Handling</h5>
            <h6>Free</h6>
          </div>
          <hr />
          <div className="text flex mb-4 ml-2 gap-[200px] mt-3">
            <h5>Total</h5>
            <h6>₹ 19 985.00</h6>
          </div>
          <hr />
          <button
            className="bg-black text-white pl-24 pr-24 pt-5 pb-5 rounded-[40px] mt-12 ml-3"
            onClick={() => setShowConfirmOrder(true)} // Show card on button click
          >
            Member Checkout
          </button>
        </div>
      </div>
    </>
  );
}
