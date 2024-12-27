import { useNavigate } from "react-router";
import { landingPagesData } from "../data/landingPages";
import { LandingPage } from "../types/landingPageTypes";

import logo from "../assets/mainpage/logo.png";

import "../styles/explore.css";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiPagesFill } from "react-icons/ri";

export const ExplorePage = () =>{
    const navigate = useNavigate();
    return(
        <div className="explorePage">
            <nav> 
                <img id="logo" src={logo} alt="logo"/>
                
                <div className="exploreContainer" onClick={() => { navigate("/explore")}}>
                    <RiPagesFill />
                    <p> Explore </p>
                </div>
            </nav>

            <div className="pageShowcaseContainer">
                {landingPagesData.map((page: LandingPage, index: number) =>(
                    <div key={index} className="landingPageContainer">
                        <img src={page.img} className="cover" alt="landing page name"/>
                        <div className="nameDateContainer">
                            <h1> {page.name} </h1>
                            <p className="date"> {page.date} </p>
                        </div>
                        <p>{page.description}</p>
                        <div className="toolsContainer">
                            {page.tools.map((tool: string, index: number) => {
                                return (
                                    <div key={index}>
                                        <p className="tools">{tool}</p>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <FaArrowUpRightFromSquare id="linkBtn" onClick={() =>{ navigate(`${page.navigate}`)}}/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}