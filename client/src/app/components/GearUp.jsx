import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/gearUp.css"

const GearUp = () => {
    return (

        <div className='gear_main_container'>
            <div className='gear_heading'>Gear Up</div>


            <div className='section_split'>

                <div className='split_section_div'>
                    {/* shop men + navi btn */}

                    <div className='men_women_div2'>
                        <Link href={"/"} className='men_women_text'>Shop Men&apos;s</Link>

                        <Link href={"/"} className="bg-[#f7f7f7] link_men_women_arrow">
                            <span className="text-[#bebebe] Link_text">&lt;</span>
                        </Link>

                        <Link href={"/"} className="bg-[#e5e5e5] link_men_women_arrow">
                            <span className="Link_text">&gt;</span>
                        </Link>
                    </div>

                    {/* shop men + navi btn  END*/}


                    {/* product making */}
                    <div className='product_main_div'>
                        {/* product   1 */}
                        <div className='product_div'>
                            <Image src="/images/gear1.png" width={300} height={300} alt='shoes with person'></Image>
                            <div className='gear_detail_section'>
                                <div>
                                    <p className='gear_pro_heading'>Nike Dri-FIT ADV TechKnit Ultra</p>
                                    <p className='gear_pro_detail'>Men&apos;s Short-Sleeve Running Top</p>

                                </div>
                                <div className='gear_pro_price'>
                                    $ 3 895
                                </div>
                            </div>
                        </div>

                        {/* product   2 */}
                        <div className='product_div'>
                            <Image src="/images/gear2.png" width={300} height={300} alt='shoes with person'></Image>
                            <div className='gear_detail_section'>
                                <div>
                                    <p className='gear_pro_heading'>Nike Dri-FIT Challenger</p>
                                    <p className='gear_pro_detail'>Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>

                                </div>
                                <div className='gear_pro_price'>
                                    $ 2 495
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* product making    END  */}
                </div>

                {/* shop men + navi btn  END*/}




                {           /* women section */}

                <div className='split_section_div'>
                    <div className='men_women_div2'>
                        <Link href={"/"} className='men_women_text'>Shop Women&apos;s</Link>

                        <Link href={"/"} className="bg-[#f7f7f7] link_men_women_arrow">
                            <span className="text-[#bebebe] Link_text">&lt;</span>
                        </Link>

                        <Link href={"/"} className="bg-[#e5e5e5] link_men_women_arrow">
                            <span className="Link_text">&gt;</span>
                        </Link>
                    </div>










                    {/* product making */}
                    <div className='product_main_div'>
                        {/* product   1 */}
                        <div className='product_div'>
                            <Image src="/images/gear3.png" width={300} height={300} alt='shoes with person'></Image>
                            <div className='gear_detail_section'>
                                <div>
                                    <p className='gear_pro_heading'>Nike Dri-FIT ADV Run Division</p>
                                    <p className='gear_pro_detail'>Women&apos;s Long-Sleeve Running Top</p>

                                </div>
                                <div className='gear_pro_price'>
                                    $ 2 595
                                </div>
                            </div>
                        </div>

                        {/* product   2 */}
                        <div className='product_div'>
                            <Image src="/images/gear4.png" width={300} height={300} alt='shoes with person'></Image>
                            <div className='gear_detail_section'>
                                <div>
                                    <p className='gear_pro_heading'>Nike Fast</p>
                                    <p className='gear_pro_detail'>Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>

                                </div>
                                <div className='gear_pro_price'>
                                    $ 3 795
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default GearUp