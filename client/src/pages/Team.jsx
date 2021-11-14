import React from "react";
import axios from "axios"
import TeamGrid from "../components/teams_components/TeamGrid";
import TeamImage from '../styles/images/team6.jpg'
import { Grid } from "@mui/material";
import styles from "../styles/pages/team/team.module.css"
import Banner from "../common/Banner";

const MEMBER_URI = "http://localhost:5000/api/v1/member/all"

class Team extends React.Component {
  state = {
    members: [
      {
        name: "Shekhar Kumar",
        position: "GDSC LEAD",
        image_url: "https://avatars.githubusercontent.com/u/51144829?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/shekhar/",
            linkedIn: "https://www.linkedin.com/in/the-anton//",
            gitHub: "https://github.com/The-Anton",
            facebook: "https://www.facebook.com/profile.php?id=100005728093339",
            instagram: "https://www.instagram.com/the_anton.01/",
        }
      },
      {
        name: "Yash Chaudhary",
        position: "Machine Learning",
        image_url: "https://user-images.githubusercontent.com/51144829/139212689-e3fbdd9b-f964-4460-ae38-f48bf9102fb9.jpg",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mwt5zp/",
            linkedIn: "https://www.linkedin.com/in/yash-chaudhary-000a4b16a",
            gitHub: "https://github.com/",
            facebook: "https://www.facebook.com/jaatbuoy",
            instagram: "https://www.instagram.com/_chacha._.chaudhary_/",
        }
      },
      {
        name: "Abhishek Kumar Meel",
        position: "Managment Head",
        image_url: "https://avatars.githubusercontent.com/u/72295943?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/m2undb/",
            linkedIn: "https://www.linkedin.com/in/abhishek-kumar-meel",
            gitHub: "https://github.com/",
            facebook: "https://www.facebook.com/abhishekmeel29",
            instagram: "https://www.instagram.com/abhishek.meel29",
        }
      },
      {
        name: "Navneet Das",
        position: "Android & Cloud Head",
        image_url: "https://avatars.githubusercontent.com/u/62807226?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mw5655/#/about",
            linkedIn: "https://www.linkedin.com/in/navneetdas19/",
            gitHub: "https://github.com/MIDAS1901",
            facebook: "https://www.facebook.com/profile.php?id=100009876039560",
            instagram: "www.instagram.com/navneet.1901",
        }
      },
      {
        name: "Chandresh Singh",
        position: "Android",
        image_url: "https://avatars.githubusercontent.com/u/54761454?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/chandresh-singh-dev/",
            gitHub: "https://github.com/The-Pascal",
            facebook: "https://www.facebook.com/Chandresh.Singh.dev/",
            instagram: "https://www.instagram.com/chandreshmg/",
        }
      },
      {
        name: "Govind Prasad Sharma",
        position: "Web Technologies",
        image_url: "https://avatars.githubusercontent.com/u/59963674?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/govind-prasad-sharma-21859a1b0/",
            gitHub: "https://github.com/Gopu03GPS",
            facebook: "https://www.facebook.com/govind.prasadsharma.37/",
            instagram: "https://www.instagram.com/hey_g0pu/?hl=en",
        }
      },
      {
        name: "Rishabh Rathore",
        position: "UI/UX",
        image_url: "https://avatars.githubusercontent.com/u/56212029?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mnc2qq/",
            linkedIn: "https://www.linkedin.com/in/xerycks/",
            gitHub: "https://github.com/xerycks",
            facebook: "https://www.facebook.com/xerycks/",
            instagram: "https://www.instagram.com/xerycks/",
        }
      },
      {
          name: "Samik Choudhury",
          position: "Android & PR",
          image_url: "https://avatars.githubusercontent.com/u/73891260?v=4",
          social_profiles:{
              gdsc: "https://gdsc.community.dev/u/mytutb/",
              linkedIn: "https://www.linkedin.com/in/samik15/",
              gitHub: "https://github.com/licofiS",
              facebook: "https://www.facebook.com/samik.2025/",
              instagram: "https://www.instagram.com/sa.m.ik/",
          }
      },
      {
        name: "Robin",
        position: "Web Technologies",
        image_url: "https://avatars.githubusercontent.com/u/76676218?v=4",
        social_profiles:{
            gdsc:"https://gdsc.community.dev/u/m4u2s2/",
            linkedIn: "www.linkedin.com/in/robinhood00007",
            gitHub: "https://github.com/robin00007",
            facebook:"https://www.facebook.com/robin.choudhary.3745496/",
            instagram: "https://www.instagram.com/robinhood062/",
        },
      },
      {
        name: "Tarun Mishra",
        position: "Web and UI/UX",
        image_url: "https://avatars.githubusercontent.com/u/32845547",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/m5qsb2/",
            linkedIn: "https://www.linkedin.com/in/codestein-tarun",
            gitHub: "https://github.com/Illusion0-0",
            facebook: "https://www.facebook.com/Optimus.404",
            instagram: "https://www.instagram.com/codestein_",
        }
      },
    ]
  }

  componentDidMount() {
    // axios.get(MEMBER_URI).then((res)=>{
    //   this.setState({
    //     members: res.data.data
    //   })
    // })
  }

  render(){
    return(
      <div className={styles.team}>
            <Banner image={TeamImage} 
              color="#6199F6"
              heading={"Community that grows by embracing others"}
              subtext={"We are team of experienced developers who are interested in giving back to the community"}/>
            
        <div>
            <div>
              <span style={{fontSize: "8vh", fontWeight: "bold", color: "#4285F4"}}>{"Our Team"}</span>
            </div>
            <div className={styles.yearTimeline} >
              <div><span className={styles.timelineItems}>{"2021"}</span></div>
              <div><span className={styles.timelineItems}>{"Alumni"}</span></div>
            </div>
          </div>
        <section className={styles.member}>
          {this.state.members.map((member, ind) => {
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
