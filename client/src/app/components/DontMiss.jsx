import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/dontMiss.css"
import bug from "../../../public/images/bug.png"

const DontMiss = () => {
  return (
    <div className='dontMiss_main_container'>
            <div className='dontMiss_heading'>Dont Miss</div>
            <div className='dontMiss_image_detail_div'>

                <div>
                    <Image src={bug} width={1380} height={700} alt='man running'></Image>
                </div>
                <div className='dontMiss_detail_div'>
                    <p className='dontMiss_p1'>FLIGHT ESSENTIALS</p>
                    <p className='dontMiss_p2'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                    <div className='dontMiss_link_div'><Link href={"/"} className='dontMiss_link'>Shop</Link></div>
                </div>
            </div>
        </div>
  )
}

export default DontMiss