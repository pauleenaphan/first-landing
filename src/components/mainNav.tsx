import { useNavigate } from "react-router";
import logo from "../assets/mainpage/logo.png";
import { RiPagesFill } from "react-icons/ri";

import styles from "../styles/mainNav.module.css";

export const MainNav = () =>{
    const navigate = useNavigate();

    return(
        <nav className={styles.navbar}> 
            <img id={styles.firstLandingLogo} src={logo} alt="logo" onClick={() =>{ navigate("/")}}/>
            
            <div className={styles.exploreContainer} onClick={() => { navigate("/explore")}}>
                <RiPagesFill />
                <p> Explore </p>
            </div>
        </nav>
    )
    
}
