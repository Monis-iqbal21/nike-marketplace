import React from 'react'
import "./components-css/greetingNike.css"
import Link from 'next/link'

const GreetingNike = () => {
    return (
        <div
            className="flex flex-col justify-center items-center bg-gray-100 w-full h-[58px] text-center main_greet_container"
            style={{ fontSize: "15px", lineHeight: "16px" }}
        >
            <p className="h-[17px]">Hello Nike App</p>
            <p
                className="h-[24px] font-medium text-sm"
                style={{ lineHeight: "24px" }}
            >
                Download the app to access everything Nike.{" "}
                <Link href={"/"} className="font-bold underline">
                    Get Your Great
                </Link>
            </p>
        </div>

    )
}

export default GreetingNike