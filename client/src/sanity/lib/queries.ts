import { groq } from "next-sanity";


// export const allProducts = groq`[type == "product"]`;
export const allProducts = `*[_type == "product"] { _id, productName, price, description, image, category }`;

export const fourProduct = groq`*[_type == "product"] [0...3]`;