import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/essential.css"
import men from "../../../public/images/men.png"
import women from "../../../public/images/women.png"
import kid from "../../../public/images/kid.png"
const Essential = () => {
    return (
        <div className='ess_container'>
            <div className='ess_heading'>The Essentials</div>
            <div className='ess_pics_div'>

                <div className='ess_piv'>
                    <Image src={men}  alt='shoes' className='ess_pic'></Image>
                    <Link href={"/"} className='ess_btn'>Men&apos;s </Link>
                </div>
                <div className='ess_piv'>
                    <Image src={women}  alt='shoes' className='ess_pic'></Image>
                    <Link href={"/"} className='ess_btn'>Women&apos;s </Link>
                </div>
                <div className='ess_piv'>
                    <Image src={kid}  alt='shoes' className='ess_pic'></Image>
                    <Link href={"/"} className='ess_btn'>Kid&apos;s </Link>
                </div>

            </div>
        </div>
    )
}

export default Essential