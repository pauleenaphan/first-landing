import { useNavigate } from "react-router";
import { landingPagesData } from "../data/landingPages";

import { LandingPage } from "../types/landingPageTypes";
import { MainNav } from "../components/mainNav";

import styles from "../styles/explore.module.css";


import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export const ExplorePage = () =>{
    const navigate = useNavigate();
    return(
        <div className={styles.explorePage}>
            <MainNav></MainNav>

            <div className={styles.pageShowcaseContainer}>
                {landingPagesData.map((page: LandingPage, index: number) =>(
                    <div key={index} className={styles.landingPageContainer}>
                        <img src={page.img} className={styles.cover} alt={page.name}/>
                        <div className={styles.projectInfoContainer}>
                            <div className={styles.nameDateContainer}>
                                <p>
                                    <h1> {page.name} </h1>
                                    <p className={styles.date}> {page.date} </p>
                                </p>
                                
                                <FaArrowUpRightFromSquare className={styles.linkCon}
                                id={styles.linkBtn} 
                                onClick={() => {
                                    if (page.navigate.startsWith('/')) {
                                        navigate(`${page.navigate}`);
                                    } else {
                                        window.open(page.navigate, '_blank'); // Open absolute URL in a new tab
                                    }
                                }} 
                            />
                            </div>
                            <p className={styles.description}>{page.description}</p>
                            <div className={styles.toolsContainer}>
                                {page.tools.map((tool: string, index: number) => {
                                    return (
                                        <div key={index}>
                                            <p className={styles.tools}>{tool}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
