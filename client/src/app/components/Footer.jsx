import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/footer.css"

const Footer = () => {
    return (
        <div className='footer_main_container'>


            <div className='footer_upper_div'>
                <div className='all_links_container'>
                    <div className='footer_main_link'>
                        <Link href={"/"} className='white_class'>FIND A STORE</Link>
                        <Link href={"/"} className='white_class'>BECOME A MEMBER</Link>
                        <Link href={"/"} className='white_class'>SIGN UP FOR EMAIL</Link>
                        <Link href={"/"} className='white_class'>SEND US FEEDBACK</Link>
                        <Link href={"/"} className='white_class'>STUDENT DISCOUNTS</Link>
                    </div>

                    <div className='footer_main_link padding_class'>
                        <p className='white_class'>GET HELP</p>
                        <Link href={"/"} className='grey_font'>Order Status</Link>
                        <Link href={"/"} className='grey_font'>Delivery</Link>
                        <Link href={"/"} className='grey_font'>Returns</Link>
                        <Link href={"/"} className='grey_font'>Payment Options</Link>
                        <Link href={"/"} className='grey_font'>Contact Us On Nike.com Inquiries</Link>
                        <Link href={"/"} className='grey_font'>Contact Us On All Other Inquiries</Link>
                    </div>

                    <div className='footer_main_link padding_class2'>
                        <p className='about_nike padding_class white_class' >ABOUT NIKE</p>
                        <Link href={"/"} className='grey_font'>News</Link>
                        <Link href={"/"} className='grey_font'>Careers</Link>
                        <Link href={"/"} className='grey_font'>Investors</Link>
                        <Link href={"/"} className='grey_font'>Sustainability</Link>
                    </div>

                </div>
                <div className='social_links'>
                    <Link href={"/"} >
                        <Image src="/images/twitter.png" width={30} height={30} alt='social'></Image>
                    </Link>
                    <Link href={"/"} >
                        <Image src="/images/facebook.png" width={30} height={30} alt='social'></Image>
                    </Link>
                    <Link href={"/"} >
                        <Image src="/images/yt.png" width={30} height={30} alt='social'></Image>
                    </Link>
                    <Link href={"/"} >
                        <Image src="/images/insta.png" width={30} height={30} alt='social'></Image>
                    </Link>
                </div>

            </div>

            {/*    reserve rights  */}

            <div className='footer_reserve_right'>
                <div className='flex'>
                    <Image src="/images/pin.png" width={18} height={15} alt='pin'></Image>
                    <p style={{ color: "#fff", padding: "0 10px", fontSize: "12px" }} className='footer_text_grey'>Pakistan</p>
                    <p style={{ color: "#757575", padding: "0 10px" }} className='footer_text_grey'>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className='flex justify-between'>
                    <Link href={"/"} style={{ color: "#757575", padding: "0 10px" }} className='f_link footer_text_grey'>Guides</Link>
                    <Link href={"/"} style={{ color: "#757575", padding: "0 10px" }} className='f_link footer_text_grey'>Terms of Sale</Link>
                    <Link href={"/"} style={{ color: "#757575", padding: "0 10px" }} className='f_link footer_text_grey'>Terms of Use</Link>
                    <Link href={"/"} style={{ color: "#757575", padding: "0 0px 0 10px" }} className='f_link footer_text_grey'>Nike Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer