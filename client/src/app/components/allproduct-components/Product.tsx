"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import "./product.css";
import { allProducts, fourProduct } from '@/sanity/lib/queries'
import type { Product } from '../../../../types/products'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
const Product = () => {

  const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {   
        async function fetchProduct() {
            try {
                const fetchedProduct: Product[] = await client.fetch(allProducts);
                console.log("Fetched Products:", fetchedProduct); // Debugging
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProduct();
    }, []);
    console.log(product)
    
  return product.map((item) => (
    <div className="product" key={item._id}>
      <Link href={`/pages/product/${item._id}`} className="product_link">
        <div className="product_img_div">
          {item.image && (
            <Image src={urlFor(item.image).url()} width={400} height={441} alt="shoes pic" />)}
          
        </div>
        <div>
          <p className="status_detail">{item.status}</p>
          <p className="product_name">{item.productName}</p>
          <p className="product_gender">{item.category}</p>
          <p className="product_colour"> {item.colors}</p>
          <p className="product_price">{item.price}</p>
        </div>
      </Link>
    </div>
  ));
};

export default Product;

