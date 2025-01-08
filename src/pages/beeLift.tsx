import "../styles/tailwind.css";

import beeMap from "../assets/beeLift/beemap.jpg";
import bee from "../assets/beeLift/bee.png";
import beehive from "../assets/beeLift/beehive.png";
import calendar from "../assets/beeLift/calendar.png";
import honey from "../assets/beeLift/honey.png";
import purpleFlower from "../assets/beeLift/purpleFlower.png";

import beeStock1 from "../assets/beeLift/beeStock1.jpg";
import beeStock2 from "../assets/beeLift/beeStock2.jpg";
import beeStock3 from "../assets/beeLift/beeStock3.jpg";

import qrBarcode from "../assets/beeLift/rickrollQrCode.png";

import appStoreBtn from "../assets/beeLift/appStoreDownload.png";
import googlePlayBtn from "../assets/beeLift/googlePlayDownload.png";

import { GiBee, GiBeehive } from "react-icons/gi";
import { FaBoxOpen, FaArrowRight, FaXTwitter, FaLinkedin, FaInstagram, FaLocationDot  } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";

export const BeeLiftPage = () =>{
    return(
        <div className="tailwind-styling">
            <main className="font-roboto">
                <nav className="bg-[#B8860B] text-white flex justify-between items-center py-3 px-36 mb-20">
                    <div className="flex gap-5 items-center">      
                        <h1 className="text-2xl pr-3"> BeeLift </h1>
                        <p> Ride </p>
                        <p> Drive </p>
                        <p> Beesiness </p>
                        <p> BeeEats </p>
                        <p> About </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-2">
                            <TbWorld />
                            <p> EN </p>
                        </div>
                        <p> Help </p>
                        <p> Login </p> 
                        <p className="bg-white text-black rounded-3xl py-2 px-4 hover:opacity-80 cursor-pointer"> Sign up </p>
                    </div>
                </nav>

                <section className="flex items-center justify-between w-3/4 mx-auto mb-20">
                    <div className="flex flex-col gap-12 w-1/3">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-5xl font-bold leading-snug"> Go anywhere with BeeLift </h1>
                            <div className="flex w-3/4 justify-between">
                                <div className="flex items-center flex-col gap-2">
                                    <GiBee className="bg-[rgb(232,232,232)] text-5xl p-2 rounded-lg"/>
                                    <p> Ride </p>
                                </div>
                                <div className="flex items-center flex-col gap-2">
                                    <GiBeehive className="text-5xl p-2"/>
                                    <p> Rent </p>
                                </div>
                                <div className="flex items-center flex-col gap-2">
                                    <FaBoxOpen className="text-5xl p-2"/>
                                    <p> Courier </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-5 flex-col">
                            <input 
                                type="text" 
                                placeholder="Pickup Location" 
                                className="bg-[rgb(232,232,232)] p-3 rounded-lg">
                            </input>
                            <input 
                                type="text" 
                                placeholder="Dropoff Location" 
                                className="bg-[rgb(232,232,232)] p-3 rounded-lg">
                            </input>
                            <div className="flex gap-5">
                                <input 
                                    type="date" 
                                    className="bg-[rgb(232,232,232)] p-3 rounded-lg w-[100%]">
                                </input>
                                <input 
                                    type="time" 
                                    className="bg-[rgb(232,232,232)] p-3 rounded-lg w-[100%]">
                                </input>
                            </div>
                            <button className="bg-[#B8860B] text-white py-3 px-6 rounded-lg w-fit font-medium hover:opacity-80"> See prices </button>
                        </div>
                    </div>
                    <img 
                        src={beeMap} 
                        alt="bee map"
                        className="w-1/2 rounded-lg"
                    />
                </section>

                <section className="flex flex-col gap-10 justify-center w-3/4 mx-auto mb-20">
                    <h1 className="font-bold text-4xl"> Suggestions </h1>
                    <div className="flex flex-wrap gap-5">
                        <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex w-[32%] items-center justify-between">
                            <div className="w-3/5 flex flex-col gap-3">
                                <h2 className="font-bold text-xl"> Ride </h2>
                                <p className="text-sm"> Go anywhere with BeeLift. Request a bee, hop on, and go. </p>
                                <button className="bg-white w-fit px-3 py-2 rounded-3xl hover:bg-gray-300"> Details </button>
                            </div>
                            <img src={bee} alt="bee" className="w-1/3"></img>
                        </div>

                        <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex w-1/3 w-[32%] items-center justify-between">
                            <div className="w-3/5 flex flex-col gap-3">
                                <h2 className="font-bold text-xl"> Rental Bees </h2>
                                <p className="text-sm"> Your perfect bee is a few clicks away. Learn more about BeeLift Rent. </p>
                                <button className="bg-white w-fit px-3 py-2 rounded-3xl hover:bg-gray-300"> Details </button>
                            </div>
                            <img src={purpleFlower} alt="bee" className="w-1/3"></img>
                        </div>

                        <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                            <div className="w-3/5 flex flex-col gap-3">
                                <h2 className="font-bold text-xl"> Reserve </h2>
                                <p className="text-sm"> Reserve your bee in advance so you can relax on the day of your trip. </p>
                                <button className="bg-white w-fit px-3 py-2 rounded-3xl hover:bg-gray-300"> Details </button>
                            </div>
                            <img src={calendar} alt="bee" className="w-1/4"></img>
                        </div>

                        <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                            <div className="w-3/5 flex flex-col gap-3">
                                <h2 className="font-bold text-xl"> Courier </h2>
                                <p className="text-sm"> BeeLift makes the same-day delivery easier than ever. </p>
                                <button className="bg-white w-fit px-3 py-2 rounded-3xl hover:bg-gray-300"> Details </button>
                            </div>
                            <img src={beehive} alt="bee" className="w-1/3"></img>
                        </div>

                        <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                            <div className="w-3/5 flex flex-col gap-3">
                                <h2 className="font-bold text-xl"> Grocery </h2>
                                <p className="text-sm"> Get honey delivered to your door with BeeEats. </p>
                                <button className="bg-white w-fit px-3 py-2 rounded-3xl hover:bg-gray-300"> Details </button>
                            </div>
                            <img src={honey} alt="bee" className="w-1/3"></img>
                        </div>
                    </div>
                </section>

                <div className="flex w-3/4 mx-auto gap-10 justify-between items-center mb-28">
                    <div className="flex flex-col gap-10 w-1/3">
                        <h1 className="text-5xl font-bold leading-snug"> Drive when you want, make what you need </h1> 
                        <p> 
                            Make honey on your schedule with deliveries or rides - or both.
                            You can use your own bee ro choose a rental through BeeLift. 
                        </p>

                        <div className="flex gap-5 items-center flex-wrap">
                            <button className="bg-[#B8860B]  w-fit text-white px-6 py-4 rounded-lg font-medium hover:opacity-80"> Get Started </button>
                            <p className="underline underline-offset-8 cursor-pointer"> Already have an account? Sign in </p> 
                        </div>
                    </div>
                    <img 
                        src={beeStock1} 
                        alt="bee img"
                        className="w-1/2 rounded-lg"
                    ></img>
                </div>

                <div className="flex w-3/4 mx-auto gap-10 justify-between items-center mb-28">
                    <img 
                        src={beeStock2} 
                        alt="beeimg"
                        className="w-1/2 rounded-lg"
                    ></img>
                    <div className="flex flex-col gap-10 w-1/3">
                        <h1 className="text-5xl font-bold leading-snug"> The BeeLift you know, reimagined for beesiness </h1>
                        <p>
                            BeeLift for beesiness is a platform for managing global rides and meals,
                            and local deliveries, for hives of any size.
                        </p>

                        <div className="flex gap-5 items-center flex-wrap">
                            <button className="bg-[#B8860B] w-fit text-white px-6 py-4 rounded-lg font-medium hover:opacity-80"> Get Started </button>
                            <p className="underline underline-offset-8 cursor-pointer"> Check out our solutions </p> 
                        </div>
                    </div>
                </div>

                
                <div className="flex w-3/4 mx-auto gap-10 justify-between items-center mb-28">
                    <div className="flex flex-col gap-10 w-1/3">
                        <h1 className="text-4xl font-bold"> Give the gift of Honey </h1> 
                        <p> 
                            Send a digital BeeLift card in minutes, and make someone's day.
                            They can use it for rides, deliveries, and almost anything in between.
                        </p>
                        <button className="bg-[#B8860B] w-fit text-white px-6 py-4 rounded-lg font-medium hover:opacity-80"> Buy gift cards </button>
                    </div>
                    <img 
                        src={beeStock3} 
                        alt="bee img"
                        className="w-1/2 rounded-lg"
                    >
                    </img>
                </div>

                <section className="flex flex-col gap-10 justify-center w-full mx-auto bg-[rgb(232,232,232)] py-20">
                    <h1 className="text-4xl font-bold w-3/4 mx-auto"> It's easier in the apps </h1> 
                    <div className="w-3/4 mx-auto flex gap-10">
                        <div className="flex items-center bg-white p-6 w-1/2 gap-5 cursor-pointer">
                            <img src={qrBarcode} className="w-1/4"/>
                            <div className="textCaption">
                                <h2 className="text-2xl font-bold leading-snug"> Download the BeeLift app </h2>
                                <p className="text-lg"> Scan to download </p> 
                            </div>
                            <FaArrowRight className="text-4xl"/>
                        </div>

                        <div className="flex items-center bg-white p-6 w-1/2 gap-5 cursor-pointer">
                            <img src={qrBarcode} className="w-1/4"/>
                            <div className="textCaption">
                                <h2 className="text-2xl font-bold leading-snug"> Download the BeeLift app </h2>
                                <p className="text-lg"> Scan to download </p> 
                            </div>
                            <FaArrowRight className="text-4xl"/>
                        </div>
                    </div> 
                </section>

                <footer className="bg-[#B8860B] flex flex-col gap-10 py-12 text-white">
                    <div className="w-3/4 mx-auto flex gap-3 flex flex-col items-end">
                        <p> Do not sell or share my personal information </p> 
                        <p> Google Data Policy </p>
                    </div>
                    <p className="w-3/4 mx-auto flex gap-10 text-2xl"> BeeLift </p>
                    <p className="w-3/4 mx-auto flex gap-10 pb-12"> Visit Help Center </p>
                    <div className="w-3/4 mx-auto flex gap-40">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl"> Company </h1> 
                            <p> About us </p>
                            <p> Our offerings </p>
                            <p> Newsroom </p>
                            <p> Investors </p>
                            <p> Blog </p> 
                            <p> Careers </p>
                            <p> BeeLift AI </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl"> Products </h1> 
                            <p> Ride </p>
                            <p> Drive </p>
                            <p> Deliver </p>
                            <p> Eat </p> 
                            <p> BeeLift for Beesiness </p>
                            <p> BeeLift Freight </p> 
                            <p> Gift cards </p>
                        </div>
                        <div className="flex flex-col gap-3"> 
                            <h1 className="text-2xl"> Global citizenship </h1>
                            <p> Safety </p>
                            <p> Diversity and Inclusion </p>
                            <p> Sustainabbility </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl"> Travel </h1> 
                            <p> Reserve </p>
                            <p> Cities </p>
                        </div>
                    </div>
                    <div className="flex justify-between w-3/4 mx-auto flex gap-10 items-center pt-8">
                        <div className="flex gap-24 text-2xl">
                            <IoLogoFacebook />
                            <FaXTwitter />
                            <IoLogoYoutube />
                            <FaLinkedin />
                            <FaInstagram />
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2 text-lg">
                                <TbWorld/>
                                <p> English </p>
                            </div>
                            <div className="flex items-center gap-2 text-lg">
                                <FaLocationDot />
                                <p> Orange County </p> 
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-3/4 mx-auto py-12">
                        <img 
                            src={googlePlayBtn} 
                            alt="google play btn"
                            className="border-2 rounded-lg bg-black w-[12%]"
                        />
                        <img 
                            src={appStoreBtn} 
                            alt="appstore btn"
                            className="border-2 rounded-lg bg-black w-[12%]"
                        />
                    </div>
                    <div className="flex gap-2 w-3/4 mx-auto justify-between">
                        <div>
                            <p> @ 2024 BeeLift Technologies Inc </p>
                        </div>
                        <div className="flex gap-10">
                            <p> Privacy </p>
                            <p> Accessibility </p>
                            <p> Terms </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </footer>
            </main>
            
        </div>
    )
}