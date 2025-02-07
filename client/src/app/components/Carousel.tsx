"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/carousel.css"
import { client } from '@/sanity/lib/client'
import { allProducts, fourProduct } from '@/sanity/lib/queries'
import { Product } from '../../../types/products'
import { urlFor } from '@/sanity/lib/image'





const Carousel = () => {
 
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {   
        async function fetchProduct() {
            try {
                const fetchedProduct: Product[] = await client.fetch(fourProduct);
                console.log("Fetched Products:", fetchedProduct); // Debugging
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProduct();
    }, []);
    

    console.log(product)

    return (
        <>
            <div className='cro_main_container'>
                <div className='heading_buttons_div'>
                    <div style={{ fontWeight: "500", fontSize: "22px", lineHeight: "28px" }} className='navi_heading_best'>Best Air Max</div>
                    <div className='cro_link_div'>
                        <Link href={"/"} style={{ fontWeight: "500", fontSize: "15px", lineHeight: "24px" }}>Shop</Link>
                        <Link href={"/"} className="bg-[#f7f7f7] link_img2">
                            <span className="text-[#bebebe] Link_text">&lt;</span>
                        </Link>
                        <Link href={"/"} className="bg-[#e5e5e5] link_img2">
                            <span className="Link_text">&gt;</span>
                        </Link>
                    </div>
                </div>
    
                {/* Products Section */}
                <div className="cro_product_main_container">
                    {product?.map((product, index) => (
                        <div className="cro_product_div" key={product._id || index}>
                            <div>
                                {product.image && (
                                <Image src={urlFor(product.image).url()} width={400} height={441} alt="shoes pic" />)}
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="pro_detail">{product.productName}</p>
                                    <p className="pro_detail_gender">{product.category}</p>
                                </div>
                                <div className="pro_price">$ {product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
}

export default Carousel