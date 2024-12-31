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

import { GiBee, GiBeehive } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export const BeeLiftPage = () =>{
    return(
        <div className="font-roboto flex flex-col gap-28">
            <nav className="bg-black text-white flex justify-around items-center p-5">
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
                    <p className="bg-white text-black rounded-3xl py-2 px-4"> Sign up </p>
                </div>
            </nav>

            <section className="flex items-center justify-between w-3/4 mx-auto">
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
                                className="bg-[rgb(232,232,232)] p-3 rounded-lg">
                            </input>
                            <input 
                                type="time" 
                                className="bg-[rgb(232,232,232)] p-3 rounded-lg">
                            </input>
                        </div>
                        <button className="bg-black text-white py-3 px-6 rounded-lg w-fit"> See Prices </button>
                    </div>
                </div>
                <img 
                    src={beeMap} 
                    alt="bee map"
                    className="w-1/2 rounded-md"
                />
            </section>

            <section className="flex flex-col gap-10 justify-center w-3/4 mx-auto">
                <h1 className="font-bold text-4xl"> Suggestions </h1>
                <div className="flex flex-wrap gap-5">
                    <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex w-[32%] items-center justify-between">
                        <div className="w-3/5 flex flex-col gap-3">
                            <h2 className="font-bold text-xl"> Ride </h2>
                            <p className="text-sm"> Go anywhere with BeeLift. Request a bee, hop on, and go. </p>
                            <button className="bg-white w-fit px-3 py-2 rounded-3xl"> Details </button>
                        </div>
                        <img src={bee} alt="bee" className="w-1/3"></img>
                    </div>

                    <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex w-1/3 w-[32%] items-center justify-between">
                        <div className="w-3/5 flex flex-col gap-3">
                            <h2 className="font-bold text-xl"> Rental Bees </h2>
                            <p className="text-sm"> Your perfect bee is a few clicks away. Learn more about BeeLift Rent. </p>
                            <button className="bg-white w-fit px-3 py-2 rounded-3xl"> Details </button>
                        </div>
                        <img src={purpleFlower} alt="bee" className="w-1/3"></img>
                    </div>

                    <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                        <div className="w-3/5 flex flex-col gap-3">
                            <h2 className="font-bold text-xl"> Reserve </h2>
                            <p className="text-sm"> Reserve your bee in advance so you can relax on the day of your trip. </p>
                            <button className="bg-white w-fit px-3 py-2 rounded-3xl"> Details </button>
                        </div>
                        <img src={calendar} alt="bee" className="w-1/4"></img>
                    </div>

                    <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                        <div className="w-3/5 flex flex-col gap-3">
                            <h2 className="font-bold text-xl"> Courier </h2>
                            <p className="text-sm"> BeeLift makes the same-day delivery easier than ever. </p>
                            <button className="bg-white w-fit px-3 py-2 rounded-3xl"> Details </button>
                        </div>
                        <img src={beehive} alt="bee" className="w-1/3"></img>
                    </div>

                    <div className="bg-[rgb(232,232,232)] p-4 rounded-lg flex flex gap-5 w-1/3 w-[32%] items-center justify-between">
                        <div className="w-3/5 flex flex-col gap-3">
                            <h2 className="font-bold text-xl"> Grocery </h2>
                            <p className="text-sm"> Get honey delivered to your door with BeeEats. </p>
                            <button className="bg-white w-fit px-3 py-2 rounded-3xl"> Details </button>
                        </div>
                        <img src={honey} alt="bee" className="w-1/3"></img>
                    </div>
                </div>
            </section>

            <div className="flex w-3/4 mx-auto gap-10 justify-between items-center">
                <div className="flex flex-col gap-10 w-1/3">
                    <h1 className="text-5xl font-bold leading-snug"> Drive when you want, make what you need </h1> 
                    <p> 
                        Make honey on your schedule with deliveries or rides - or both.
                        You can use your own bee ro choose a rental through BeeLift. 
                    </p>

                    <div className="flex flex-col gap-5">
                        <button className="bg-black w-fit text-white px-6 py-4 rounded-lg"> Get Started </button>
                        <p className="underline underline-offset-8"> Already have an account? Sign in </p> 
                    </div>
                </div>
                <img 
                    src={beeStock1} 
                    alt="bee img"
                    className="w-1/2 rounded-md"
                ></img>
            </div>

            <div className="flex w-3/4 mx-auto gap-10 justify-between items-center">
                <img 
                    src={beeStock2} 
                    alt="beeimg"
                    className="w-1/2 rounded-md"
                ></img>
                <div className="flex flex-col gap-10 w-1/3">
                    <h1 className="text-5xl font-bold leading-snug"> The BeeLift you know, reimagined for beesiness </h1>
                    <p>
                        BeeLift for beesiness is a platform for managing global rides and meals,
                        and local deliveries, for hives of any size.
                    </p>

                    <div className="flex flex-col gap-5">
                        <button className="bg-black w-fit text-white px-6 py-4 rounded-lg"> Get Started </button>
                        <p className="underline underline-offset-8"> Check out our solutions </p> 
                    </div>
                </div>
            </div>

            
            <div className="flex w-3/4 mx-auto gap-10 justify-between items-center">
                <div className="flex flex-col gap-10 w-1/3">
                    <h1 className="text-4xl font-bold"> Give the gift of Honey </h1> 
                    <p> 
                        Send a digital BeeLift card in minutes, and make someone's day.
                        They can use it for rides, deliveries, and almost anything in between.
                    </p>
                    <button className="bg-black w-fit text-white px-6 py-4 rounded-lg"> Buy gift cards </button>
                </div>
                <img 
                    src={beeStock3} 
                    alt="bee img"
                    className="w-1/2 rounded-md"
                >
                </img>
            </div>

            <section className="appDownload">
                <h1> It's easier in the apps </h1> 
                <div className="cardContainer">
                    <div className="appCard">
                        <img src={"qrcode"}/>
                        <div className="textCaption">
                            <h2> Download the Uber app </h2>
                            <p> Scan to download </p> 
                        </div>
                        <p> Arrow icon </p>
                    </div>

                    <div className="appCard">
                        <img src={"qrcode"}/>
                        <div className="textCaption">
                            <h2> Download the Uber app </h2>
                            <p> Scan to download </p> 
                        </div>
                        <p> Arrow icon </p>
                    </div>
                </div> 
            </section>

            <footer>
                <p> Copyright Footer</p> 
            </footer>
        </div>
    )
}