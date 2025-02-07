import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/featured.css"

const Featured = () => {
    return (
        <div className='feature_main_container'>
            <div className='feature_heading'>Featured</div>
            <div className='image_detail_div'>

                <div>
                    <Image src="/images/feature.png" width={1380} height={700} alt='man running'></Image>
                </div>
                <div className='w-full feature_detail_div' >
                    <p className='feature_p1'>STEP INTO WHAT FEELS GOOD</p>
                    <p className='feature_p2'>Cause everyone should know the feeling of running in that perfect pair.</p>
                    <div className='feature_link_div'><Link href={"/"} className='featured_link'>Find Your Shoe</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Featured