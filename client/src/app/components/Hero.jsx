import React from 'react'
import Link from 'next/link'
import "./components-css/hero.css"
import Image from 'next/image'
import hero from "../../../public/images/hero.png"


const Hero = () => {
    return (
        <div className='w-full hero_container'>
            <div className='w-full hero_img_div'>
                <Image src={hero} alt='hero' ></Image>

            </div>
            <div className='hero_text_div'>
                <p className='font-medium text-sm'>First Look</p>
                <p className='nike_heading'>NIKE AIR MAX PULSE</p>
                <p className='hero_detail_para'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.</p>
                <div className=''>
                    <Link href={"/"} className='hero_links'>Notify Me</Link>
                    <Link href={"/"} className='hero_links'>Shop Air Max</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero



