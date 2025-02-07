"use client";
import React, { useEffect, useState } from "react";
import "./components-css/navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import logo2 from "../../../public/images/logo2.png";
import search from "../../../public/images/search.png";
import love from "../../../public/images/love.png";
import shop from "../../../public/images/shop.png";
import { useUserContext } from "../context/user";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const [user, setUser] = useState(null);
  const {  user,logout } = useUserContext();
  const router = useRouter();

  // Check for logged-in user on component mount
  


  // Logout function
  const handleLogout = () => {
    logout();
    router.push('/pages/login');
  };

  return (
    <div className="w-full h-[136}] navbar_main_container">
      {/*  top navbar   */}
      <div className="nav_top_container w-full">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={24} height={24}></Image>
          </Link>
        </div>

        <div className="top_nav_links">
          {user ? (
            <>
              {/* <Link href="/all-product" className="">
                Find a Store
              </Link>
              |
              <Link href="/all-product" className="">
                Help
              </Link> */}
              |<span>Welcome, {user.email}</span>
              <button onClick={handleLogout} className="logout_btn">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* <Link href="/all-product" className="">
                Find a Store
              </Link>
              |
              <Link href="/all-product" className="">
                Help
              </Link>
              | */}
              <Link href="/pages/register" className="">
                Join Us
              </Link>
              |
              <Link href="/pages/login" className="">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>

      {/*  bottom navbar   */}
      <div className="nav_bottom_container w-full">
        <div className="w-[78.5px]">
          <Link href={"/"}>
            <Image
              src={logo2}
              alt=""
              className="bottom_nav_pic"
              width={58.8}
              height={20.5}
            ></Image>
          </Link>
        </div>

        <div className="nav_bottom_link_div">
          <Link href="/all-product" className="navBottom_link">
            New & Featured
          </Link>
          <Link href="/all-product" className="navBottom_link">
            Men
          </Link>
          <Link href="/all-product" className="navBottom_link">
            Women
          </Link>
          {/* <Link href="/all-product" className="navBottom_link">
            Kids
          </Link>
          <Link href="/all-product" className="navBottom_link">
            Sale
          </Link>
          <Link href="/all-product" className="navBottom_link">
            SNKRS
          </Link> */}
        </div>

        <div className="nav_bottom_search_cart_div">
          <div className="flex justify-between search_div">
            <div className="flex items-center">
              <Image src={search} alt="search" width={16.7} height={16.7} />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="search_input_field"
            />
          </div>
          {/* <Link href="/all-product">
            <Image src={love} alt="search" width={16.7} height={16.7} />
          </Link> */}

          <Link href={"/pages/AddToCart"}>
            <Image src={shop} alt="search" width={16.7} height={16.7}></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
