import React from 'react';
import ProjectsGrid from '../components/solutions_components/ProjectsGrid';
import SolutionImage from '../styles/images/team3.png'
import { Grid } from "@mui/material";
import styles from '../styles/pages/projects/projects.module.css'

const Projects = () => {
    return (
        <div className={styles.solution}>
            <section className={styles.bannerSection}>
            <Grid container style={{marginLeft:"auto",marginRight:"auto"}}>
                <Grid item xs={6}>
                    <img  src={SolutionImage} style={{height: '420px'}}/>
                </Grid>
                <Grid item xs={6}>
                    <div className={styles.bannerContent}>           
                        <div className={styles.bannerHeading} ><h1 >{"We create solutions for business and community"}</h1></div>                   
                        <div className={styles.bannerSubText} ><span >{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
                    </div>        
                </Grid>
            </Grid>
            </section>
            <div style={{textAlign:"center"}}>
                <span style={{fontSize: "8vh", fontWeight: "bold", color: "#6199F6"}}>{"Our Solutions"}</span>
            </div>
            <section style={{marginLeft:"auto",marginRight:"auto", marginTop:"48px"}}> <ProjectsGrid/> </section>
        </div>
    );
};

export default Projects;
