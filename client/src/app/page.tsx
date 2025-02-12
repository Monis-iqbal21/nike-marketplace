"use client"
import GreetingNike from "./components/GreetingNike"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import Featured from "./components/Featured"
import GearUp from "./components/GearUp"
import DontMiss from "./components/DontMiss"
import Essential from "./components/Essential"
import AllLinks from "./components/AllLinks"


export default function Home() {
  console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
  console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log("Sanity API Token (should be undefined in frontend):", process.env.SANITY_API_TOKEN);
  
  

  return (
    <div className="w-full" > 
      <GreetingNike />
      <Hero />
      <Carousel />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essential />
      <AllLinks />
      
     
    </div>
  );
}
