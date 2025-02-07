import { Search, ThumbsUp, ThumbsDown } from "lucide-react";

export default function Contact() {
    return (
        <div className="conatct-container"><br />
            <div className="contact-box1">
                <center><h1 className="text text-2xl font-medium">GET HELP</h1></center>
                <div className="flex justify-center mt-4">
                    <div className="relative w-[350px]">
                        <input
                            type="text"
                            placeholder="What can we help you with?"
                            className="w-full h-[56px] p-4 pr-12 text-base border border-gray-300 rounded shadow-sm outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </div><br />
            <div className="flex">
                <div className="flex-box1">
                    <div className="contact-box2">
                        <h1 className="ml-20 text text-2xl font-medium">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1><br />
                        <p className="text text-1xl ml-20">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                    </div><br />
                    <div className="ml-28 w-[900.75px]">
                        <p className="">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro <br /><br />
                            If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card. <br /><br />
                            Apple Pay
                        </p>
                    </div><br />
                    <div className="contact-box4">
                        <p className="ml-20">
                            <u className="text font-semibold">Nike Members </u>
                            can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,
                            <u className="text font-semibold"> join <br /> us </u>
                            today.
                        </p><br />
                        <button className="bg-black text-white px-7 py-3 rounded-full ml-20 text-sm font-semibold hover:bg-gray-800">JOIN US</button>
                        <button className="bg-black text-white px-7 py-3 rounded-full ml-4 text-sm font-semibold hover:bg-gray-800">SHOP NIKE</button>
                    </div><br />
                    <div className="contact-box5">
                        <h1 className="ml-20 text text-2xl font-medium">FAQs</h1><br />
                        <h2 className="ml-20 text text-1xl font-bold">Does my card need international purchases enabled?</h2>
                        <p className="ml-20 mt-2">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br /> if international purchases need to be enabled.</p><br />
                        <h6 className="ml-20 -mt-2">Please note, some banks may charge a small transaction fee for international orders.</h6>
                    </div><br />
                    <div className="contact-box6">
                        <h1 className="ml-20 text text-1xl font-bold">What payment method is accepted for SNKRS orders?</h1>
                        <p className="ml-20 mt-2">You can use any accepted credit card to pay for your SNKRS order.</p>
                    </div><br />
                    <div className="contact-box7">
                        <h1 className="ml-20 text text-1xl font-bold">Why don't I see Apple Pay as an option?</h1>
                        <p className="ml-20 mt-2 w-[920px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                    </div><br />
                    <div className="contact-box8">
                        <p className="ml-20 text text-base">Was this answer helpful?</p>
                        <div className="mt-3 ml-20 flex flex-row gap-2">
                            <ThumbsUp />
                            <ThumbsDown />
                        </div>
                    </div>
                    <div className="contact-box9">
                        <h5 className="ml-20 mt-3 text-gray-500">RELATED</h5>
                        <h4 className="ml-28 mt-4 text-gray-800"><u>WHAT ARE NIKE'S DELIVERY OPTIONS?</u></h4>
                        <h4 className="ml-28 text-gray-800"><u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u></h4>
                    </div><br />
                </div>
                <div className="border-l-2 border-zinc">
                    {/* contact-box10 */}
                    <div className="pl-4">
                        <h1 className="text ml-14 text-2xl font-medium">CONTACT US</h1><br />
                        <div className="w-[260px]">
                            <center><img src="smphone.svg" alt="smartphone" className="mt-2" /><br /></center>
                            <center><h3 className="text font-semibold mt-2">000 800 919 0566</h3></center>
                            <center><p className="text font-medium mt-3">Products & Orders: 24 hours a day, <br /> 7 days a week <br /> Company Info & Enquiries: 07:30 - <br /> 16:30, Monday - Friday</p></center>
                        </div><br /><br />
                        <div className="w-[260px]">
                            <center><img src="mesage.svg" alt="MSG" className="mt-2" /></center>
                            <center><h5 className="text mt-4 font-semibold">24 hours a day</h5></center>
                            <center><p className="mt-1">7 days a week</p></center>
                        </div><br /><br />
                        <div className="w-[260px]">
                            <center><img src="mail.svg" alt="Mail" className="mt-2" /></center>
                            <center><h5 className="text mt-4 font-semibold">We'll reply within</h5></center>
                            <center><p className="mt-1">five business days</p></center>
                        </div><br /><br />
                        <div className="w-[260px]">
                            <center><img src="location.svg" alt="Mail" className="mt-2"  /></center>
                            <center><h5 className="text mt-3 font-semibold">STORE LOCATOR</h5></center>
                            <center><p className="mt-1">Find Nike retail stores near you</p></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}