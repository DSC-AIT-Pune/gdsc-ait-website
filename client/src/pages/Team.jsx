import React from "react";
import axios from "axios"
import TeamGrid from "../components/teams_components/TeamGrid";
import TeamImage from '../styles/images/team6.jpg'
import { Grid } from "@mui/material";
import styles from "../styles/pages/team/team.module.css"
import Banner from "../common/Banner";

import Teammembers from "../database/Teammembers";

const MEMBER_URI = "http://localhost:5000/api/v1/member/all"

class Team extends React.Component {

  componentDidMount() {
    // axios.get(MEMBER_URI).then((res)=>{
    //   this.setState({
    //     members: res.data.data
    //   })
    // })
  }

  render() {
    return (
      <div className={styles.team}>
        <Banner image={TeamImage}
          color="#6199F6"
          heading={"Community that grows by embracing others"}
          subtext={"We are team of experienced developers who are interested in giving back to the community"} />

        <div>
          <div>
            <span style={{ fontSize: "8vh", fontWeight: "bold", color: "#4285F4" }}>{"Our Team"}</span>
          </div>
          <div className={styles.yearTimeline} >
            <div><span className={styles.timelineItems}>{"2021"}</span></div>
            <div><span className={styles.timelineItems}>{"Alumni"}</span></div>
          </div>
        </div>
        <section className={styles.member}>
          {Teammembers.map((member, ind) => {
            return (
              <TeamGrid
                key={ind}
                name={member.name}
                role={member.position}
                img={member.image_url}
                gh={member.social_profiles.gitHub}
                ig={member.social_profiles.instagram}
                fb={member.social_profiles.facebook}
                ln={member.social_profiles.linkedIn}
              />
            );
          })}
        </section>
      </div>
    )
  }
}

export default Team;
