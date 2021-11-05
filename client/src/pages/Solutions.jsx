import React from 'react';
import ProjectsGrid from '../components/solutions_components/ProjectsGrid';
import SolutionImage from '../styles/images/team3.png'
import { Grid } from "@mui/material";

const Projects = () => {
    return (
        <div className="Solution" style={{width:"85%",marginLeft:"auto",marginRight:"auto"}}>
            <section className="banner-section" style={{height:"80vh",padding: '6% 2% 2% 2%',marginLeft:"auto",marginRight:"auto"}}>
            <Grid container style={{marginLeft:"auto",marginRight:"auto"}}>
                <Grid item xs={6}>
                    <img className="logo" src={SolutionImage} style={{height: '420px'}}/>
                </Grid>
                <Grid item xs={6}>
                <div style={{display:"flex",flexDirection:"column"}}>           
                    <div style={{height:"50%"}}><h1 style={{fontSize: "8vh", color: "#81C995"}}>{"We create solutions for business and community"}</h1></div>                   
                    <div style={{height:"50%",padding:"48px 48px 0 0"}}><span style={{color:"grey", fontSize:"24px"}}>{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
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
