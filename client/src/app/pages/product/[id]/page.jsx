"use client";

import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import Image from "next/image";
import "./proDetail.css";
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "product" && _id == $id][0]`; // Sanity query
        const product = await client.fetch(query, { id });

        if (product) {
          setItem(product);
          console.log(product._id)
        }
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Product not found</div>;
  return (
    <div className="product_container">
      <div className="product_image_div">
      {item.image && (
            <Image src={urlFor(item.image).url()} width={400} height={441} alt="shoes pic" />)}
      </div>

      <div className="product_detail">
        <h1 className="pro_title">{item.name}</h1>
        <p className="pro_desc">{item.description}</p>
        <p className="pro_desc">{item.category}</p>
        <p>{item.detail}</p>
        <h3 className="pro_price">₹ {item.price}</h3>
        <button className="pro_btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
