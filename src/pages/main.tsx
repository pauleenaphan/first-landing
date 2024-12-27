import { useNavigate } from "react-router";

import "../styles/main.css";
import moonImg from "../assets/mainpage/moon.png";
import mouse from "../assets/mainpage/mouse.png";
import rocket from "../assets/mainpage/rocket.png";
import logo from "../assets/mainpage/logo.png";

import { RiPagesFill } from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const MainPage = () =>{
    const navigate = useNavigate();

    return(
        <div className="mainPage">
            <nav> 
                <img id="logo" src={logo} alt="logo"/>
                
                <div className="exploreContainer" onClick={() => { navigate("/explore")}}>
                    <RiPagesFill />
                    <p> Explore </p>
                </div>
            </nav>

            <section className="aboutContainer">
                <div className="aboutLeftContainer">
                    <h1> Explore all the pages, especially the first landing page </h1>
                    <p> 
                        Embark on a groundbreaking journey, experiencing something truly unique—just 
                        like the iconic first moon landing. This is your chance to witness history in 
                        the making. 
                    </p>

                    <button className="exploreBtn" onClick={() => { navigate("/explore")}}> Start Exploring </button>
                </div>
                <img src={moonImg} alt="picture of moonlanding"/>
            </section>

            <section className="quoteContainer">
                {/* 5 stars here  */}
                <h2> 
                    "First Landing gave me the experience of looking at these creative sterotypically landing pages 
                    that all follow the same format. I would reccomend this experience to all my friends and everyone
                    I know."
                </h2>
                <p> - Vector from minions</p>
            </section>

            <div className="blockContainer">
                <div className="textContainer">
                    <p> ONLY A CLICK AWAY </p>
                    <div className="picTextTitle"> Explore effortlessly through clicking </div>
                    <p className="picTextBody"> 
                        Exploring these pages doesn't take more work than a simple click. 
                        The naked eye will see all the possibilities of what a typically landing
                        page looks like and the truth of life.
                    </p>
                </div>
                <img id="mouseImg" src={mouse} alt="arrow pointing"/>
            </div>

            <div className="blockContainer">
                <img src={rocket} alt="rocket"/>
                <div className="textContainer">
                    <p> NO MORE FOMO </p>
                    <div className="picTextTitle"> Experience the first landing </div>
                    <p className="picTextBody">
                        Just like the moon landing, you want to experience it first hand.
                        Don't miss out on this first landing like you did with the moon.
                    </p>
                </div>
            </div>

            <section className="planContainer">
                <h2> Choose the plan that works for you </h2>
                <div className="planInnerContainer">
                <div className="priceContainer">
                    <h3> Free </h3>
                    <p> We all love free </p>
                    <div className="planPrice"> $0 </div>
                    <button className="priceBtns"> Get Free </button>
                    <ul className="planBenefits">
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> All views included </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> No Charges Necessary </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> Unlimited Views </li>
                        </div>
                    </ul>
                </div>

                <div className="priceContainer">
                    <h3> Basic </h3>
                    <p> View with some perks </p>
                    <div className="planPrice"> $5 </div>
                    <button className="priceBtns"> Get Basic </button>
                    <ul className="planBenefits">
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> Everything in Free </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> 1 Week early view access </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> Free t-shirt </li>
                        </div>
                    </ul>
                </div>

                <div className="priceContainer">
                    <h3> Premium </h3>
                    <p> Best viewing experience </p>
                    <div className="planPrice"> $500 </div>
                    <button className="priceBtns"> Get Premium </button>
                    <ul className="planBenefits">
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> Everything in Basic </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> 24 Hour early view access </li>
                        </div>
                        <div className="benefitContainer">
                            <IoCheckmark className="checkMarkIcon"/>
                            <li> Free t-shirt, hat, and keychain </li>
                        </div>
                    </ul>
                </div>
            </div>
            <p id="captionMsg"> Less saving and start viewing </p>
            </section>

            <section className="captionBtnContainer">
                <h4> Ready to view the first landing? </h4>
                <button className="getStartBtn" onClick={() => { navigate("/explore")}}> Get Started - It's free </button>
            </section>

            <footer>
                <p> Copyright @ Pauleena Phan 2024 </p>
                <a href="https://github.com/pauleenaphan/First-Landing" target="_blank" rel="noopener noreferrer">
                    <FaGithub id="githubIcon"/>
                </a>
            </footer>
        </div>
    )
}