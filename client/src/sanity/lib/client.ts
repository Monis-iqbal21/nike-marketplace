import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: "1lk44shs",
  dataset: "products",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: "", // Set to false if statically generating pages, using ISR or tag-based revalidation
})
