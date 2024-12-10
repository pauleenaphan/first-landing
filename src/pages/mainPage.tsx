import "../styles/mainPage.css";
import moonImg from "../assets/moon.png";

export const MainPage = () =>{
    return(
        <div className="mainPage">
            <nav> 
                <div id="logo"> FirstLanding </div>
                <button> Explore Pages </button>
            </nav>

            <section className="aboutContainer">
                <div className="aboutLeftContainer">
                    <h1> Explore all the pages, especially the first landing page </h1>
                    <p> 
                        Embark on a groundbreaking journey, experiencing something truly unique—just 
                        like the iconic first moon landing. This is your chance to witness history in 
                        the making. 
                    </p>

                    <button> Explore pages </button>
                </div>
                <img src={moonImg} alt="picture of moonlanding"/>
            </section>

            <section className="quoteContainer">
                {/* 5 stars here  */}
                <h2> 
                    "First Landing gave me the experience of looking at these creative sterotypically landing pages 
                    that all follow the same format. I would reccomend this experience to all my friends and everyone
                    I know. P.S. I was paid to write this review."
                </h2>
                <p> - Rocky (Black and white cat)</p>
            </section>

            <div className="blockContainer">
                <div className="textContainer">
                    <p> Only a click </p>
                    <div className="picTextTitle"> Explore effortlessly through clicking </div>
                    <p> 
                        Exploring these pages doesn't take more work than a simple click. 
                        The naked eye will see all the possibilities of what a typically landing
                        page looks like and the truth of life.
                    </p>
                </div>
                <img src={""}/>
            </div>

            <div className="blockContainer">
                <img src={""}/>
                <div className="textContainer">
                    <p> No Fomo </p>
                    <div className="picTextTitle"> Experience the first landing </div>
                    <p>
                        Just like the moon landing, you want to experience it first hand.
                        Don't miss out on this first landing like you did with the moon.
                    </p>
                </div>
            </div>

            <section className="planContainer">
                <h2> Choose the plan that works for you </h2>
                <div className="priceOuterContainer">
                    <div className="priceContainer">
                        <h3> Free </h3>
                        <p> We all love free </p>
                        <div className="planPrice"> $0 </div>
                        <button className="priceBtns"> Get Free </button>
                        <ul className="planBenefits">
                            <li> All views included </li>
                            <li> No Charges Necessary </li>
                            <li> Unlimited Views </li>
                        </ul>
                    </div>

                    <div className="priceContainer">
                        <h3> Basic </h3>
                        <p> View with some perks </p>
                        <div className="planPrice"> $5 </div>
                        <button className="priceBtns"> Get Basic </button>
                        <ul className="planBenefits">
                            <li> Everything in Free </li>
                            <li> 1 Week early view access </li>
                            <li> Free t-shirt </li>
                        </ul>
                    </div>

                    <div className="priceContainer">
                        <h3> Premium </h3>
                        <p> Best viewing experience </p>
                        <div className="planPrice"> $500 </div>
                        <button className="priceBtns"> Get premium </button>
                        <ul className="planBenefits">
                            <li> Everything in basic  </li>
                            <li> 24 Hour early view access </li>
                            <li> Free t-shirt, hat, and keychain </li>
                        </ul>
                    </div>
                </div>

                <p> Less saving and start viewing </p>
            </section>

            <section className="captionButtonContainer">
                <h1> Ready to start viewing the first landing? </h1>
                <button> Get Started - It's free </button>
            </section>
        </div>
    )
}