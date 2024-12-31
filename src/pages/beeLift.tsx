import "../styles/tailwind.css";

export const BeeLiftPage = () =>{
    return(
        <div>
            <nav className="bg-black text-white flex justify-around align-center p-3">
                <div className="flex gap-5">      
                    <h1> BeeLift </h1>
                    <p> Ride </p>
                    <p> Drive </p>
                    <p> Beesiness </p>
                    <p> BeeEats </p>
                    <p> About </p>
                </div>
                <div className="flex gap-5">
                    <p> EN </p>
                    <p> Help </p>
                    <p> Login </p> 
                    <p> Sign up </p>
                </div>
            </nav>

            <section>
                <div>
                    <div>
                        <h1> Go anywhere with BeeLift </h1>
                        <div>
                            <div className="iconBtn">
                                <p> Icon </p>
                                <p> Ride </p>
                            </div>
                            <div className="iconBtn">
                                <p> Icon </p>
                                <p> Rent </p>
                            </div>
                            <div className="iconBtn">
                                <p> Icon </p>
                                <p> Courier </p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <input type="text" placeholder="Pickup Location" className="headInput"></input>
                        <input type="text" placeholder="Dropoff Location" className="headInput"></input>
                        <div>
                            <input type="date" className="headInput"></input>
                            <input type="time" className="headInput"></input>
                        </div>
                    </div>
                    <button className="blackBtn"> See Prices </button>
                </div>
                <img src={""} alt="bee map"/>
            </section>

            <section className="suggestions">
                <h1> Suggestions </h1>
                <div className="cardContainer">
                    <div className="card">
                        <div className="leftCard">
                            <h2> Ride </h2>
                            <p> Go anywhere with BeeLift. Request a bee, hop on, and go. </p>
                            <button className="detailBtn"> Details </button>
                        </div>
                        <img src={""} alt="bee" className="cardImg"></img>
                    </div>

                    <div className="card">
                        <div className="leftCard">
                            <h2> Rental Bees </h2>
                            <p> Your perfect bee is a few clicks away. Learn more about BeeLift Rent. </p>
                            <button className="detailBtn"> Details </button>
                        </div>
                        <img src={""} alt="bee" className="cardImg"></img>
                    </div>

                    <div className="card">
                        <div className="leftCard">
                            <h2> Reserve </h2>
                            <p> Reserve your bee in advance so you can relax on the day of your trip. </p>
                            <button className="detailBtn"> Details </button>
                        </div>
                        <img src={""} alt="bee" className="cardImg"></img>
                    </div>

                    <div className="card">
                        <div className="leftCard">
                            <h2> Courier </h2>
                            <p> BeeLift makes the same-day delivery easier than ever. </p>
                            <button className="detailBtn"> Details </button>
                        </div>
                        <img src={""} alt="bee" className="cardImg"></img>
                    </div>

                    <div className="card">
                        <div className="leftCard">
                            <h2> Grocery </h2>
                            <p> Get honey delivered to your door with BeeEats. </p>
                            <button className="detailBtn"> Details </button>
                        </div>
                        <img src={""} alt="bee" className="cardImg"></img>
                    </div>
                </div>
            </section>

            <div className="blockContainer">
                <img src={""} alt="bee img"></img>
                <div className="textContainer">
                    <h1> Drive when you want, make what you need </h1> 
                    <p> 
                        Make honey on your schedule with deliveries or rides - or both.
                        You can use your own bee ro choose a rental through BeeLift. 
                    </p>

                    <div className="signupLogin">
                        <button className="blackBtn"> Get Started </button>
                        <p> Already have an account? Sign in </p> 
                    </div>
                </div>
            </div>

            <div className="blockContainer">
                <div className="textContainer">
                    <h1> The BeeLift you knowm reimagined for beesiness </h1>
                    <p>
                        BeeLift for beesiness is a platform for managing global rides and meals,
                        and local deliveries, for hives of any size.
                    </p>

                    <div className="signupLogin">
                        <button className="blackBtn"> Get Started </button>
                        <p> Check out our solutions </p> 
                    </div>
                </div>
                <img src={""} alt="beeimg"></img>
            </div>

            
            <div className="blockContainer">
                <img src={""} alt="bee img"></img>
                <div className="textContainer">
                    <h1> Give the gift of Honey </h1> 
                    <p> 
                        Send a digital BeeLift card in minutes, and make someone's day.
                        They can use it for rides, deliveries, and almost anything in between.
                    </p>

                    <div className="signupLogin">
                        <button className="blackBtn"> Buy gift cards </button>
                    </div>
                </div>
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