import React from 'react';
import ProjectsGrid from '../components/solutions_components/ProjectsGrid';
import SolutionImage from '../styles/images/team5.jpg'
import { Grid } from "@mui/material";
import styles from '../styles/pages/projects/projects.module.css'
import Banner from "../common/Banner";

const Projects = () => {
    return (
        <div className={styles.solution}>
            
                <Banner image={SolutionImage} 
                    color="#6199F6"
                    heading={"We create solutions for business and community"}
                    subtext={"We are team of experienced developers who are interested in giving back to the community"}/>
                
            <div className={styles.solutionHeading} style={{}}>
                <span style={{color:"#6199F6"}}>{"Our Solutions"}</span>
            </div>
            <section style={{marginLeft:"auto",marginRight:"auto", marginTop:"48px", marginBottom:"32px"}}> <ProjectsGrid/> </section>
        </div>
    );
};

export default Projects;
