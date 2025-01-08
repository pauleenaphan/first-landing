import { useNavigate } from "react-router";

import { MainNav } from "../components/mainNav";

import styles from "../styles/main.module.css";
import moonImg from "../assets/mainpage/moon.png";
import mouse from "../assets/mainpage/mouse.png";
import rocket from "../assets/mainpage/rocket.png";

import { IoCheckmark } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.mainPage}>
            <MainNav />

            <section className={styles.aboutContainer}>
                <div className={styles.aboutLeftContainer}>
                    <h1> Explore all the pages, especially the first landing page </h1>
                    <p> 
                        Embark on a groundbreaking journey, experiencing something truly unique—just 
                        like the iconic first moon landing. This is your chance to witness history in 
                        the making. 
                    </p>

                    <button className={styles.exploreBtn} onClick={() => { navigate("/explore")}}> Start Exploring </button>
                </div>
                <img src={moonImg} alt="picture of moonlanding" />
            </section>

            <section className={styles.quoteContainer}>
                <h2> 
                    "First Landing gave me the experience of looking at these creative stereotypically landing pages 
                    that all follow the same format. I would recommend this experience to all my friends and everyone
                    I know."
                </h2>
                <p> - Vector from minions</p>
            </section>

            <div className={styles.blockContainer}>
                <div className={styles.textContainer}>
                    <p> ONLY A CLICK AWAY </p>
                    <div className={styles.picTextTitle}> Explore effortlessly through clicking </div>
                    <p className={styles.picTextBody}> 
                        Exploring these pages doesn't take more work than a simple click. 
                        The naked eye will see all the possibilities of what a typically landing
                        page looks like and the truth of life.
                    </p>
                </div>
                <img id={styles.mouseImg} src={mouse} alt="arrow pointing" />
            </div>

            <div className={styles.blockContainer}>
                <img src={rocket} alt="rocket" />
                <div className={styles.textContainer}>
                    <p> NO MORE FOMO </p>
                    <div className={styles.picTextTitle}> Experience the first landing </div>
                    <p className={styles.picTextBody}>
                        Just like the moon landing, you want to experience it first hand.
                        Don't miss out on this first landing like you did with the moon.
                    </p>
                </div>
            </div>

            <section className={styles.planContainer}>
                <h2> Choose the plan that works for you </h2>
                <div className={styles.planInnerContainer}>
                    <div className={styles.priceContainer}>
                        <h3> Free </h3>
                        <p> We all love free </p>
                        <div className={styles.planPrice}> $0 </div>
                        <button className={styles.priceBtns}> Get Free </button>
                        <ul className={styles.planBenefits}>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> All views included </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> No Charges Necessary </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> Unlimited Views </li>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.priceContainer}>
                        <h3> Basic </h3>
                        <p> View with some perks </p>
                        <div className={styles.planPrice}> $5 </div>
                        <button className={styles.priceBtns}> Get Basic </button>
                        <ul className={styles.planBenefits}>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> Everything in Free </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> 1 Week early view access </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> Free t-shirt </li>
                            </div>
                        </ul>
                    </div>

                    <div className={styles.priceContainer}>
                        <h3> Premium </h3>
                        <p> Best viewing experience </p>
                        <div className={styles.planPrice}> $500 </div>
                        <button className={styles.priceBtns}> Get Premium </button>
                        <ul className={styles.planBenefits}>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> Everything in Basic </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> 24 Hour early view access </li>
                            </div>
                            <div className={styles.benefitContainer}>
                                <IoCheckmark className={styles.checkMarkIcon} />
                                <li> Free t-shirt, hat, and keychain </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <p id={styles.captionMsg}> Less saving and start viewing </p>
            </section>

            <section className={styles.captionBtnContainer}>
                <h4> Ready to view the first landing? </h4>
                <button className={styles.getStartBtn} onClick={() => { navigate("/explore") }}> Get Started - It's free </button>
            </section>

            <footer>
                <p> Copyright @ Pauleena Phan 2024 </p>
                <a href="https://github.com/pauleenaphan/First-Landing" target="_blank" rel="noopener noreferrer">
                    <FaGithub id={styles.githubIcon} />
                </a>
            </footer>
        </div>
    )
}
