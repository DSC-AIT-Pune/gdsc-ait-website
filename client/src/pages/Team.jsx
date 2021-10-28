import React from "react";
import axios from "axios"
import TeamGrid from "../components/TeamGrid";

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
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.facebook.com/profile.php?id=100005728093339",
        }
      },
      {
        name: "Yash Chaudhary",
        position: "Machine Learning",
        image_url: "https://user-images.githubusercontent.com/51144829/139212689-e3fbdd9b-f964-4460-ae38-f48bf9102fb9.jpg",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/samik15/",
            gitHub: "https://github.com/licofiS",
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.instagram.com/sa.m.ik/",
        }
      },
      {
        name: "Abhishek Kumar Meel",
        position: "Managment Head",
        image_url: "https://avatars.githubusercontent.com/u/72295943?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/samik15/",
            gitHub: "https://github.com/licofiS",
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.instagram.com/sa.m.ik/",
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
            linkedIn: "https://www.linkedin.com/in/samik15/",
            gitHub: "https://github.com/licofiS",
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.instagram.com/sa.m.ik/",
        }
      },
      {
        name: "Govind Prasad Sharma",
        position: "Web Technologies",
        image_url: "https://avatars.githubusercontent.com/u/59963674?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/samik15/",
            gitHub: "https://github.com/licofiS",
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.instagram.com/sa.m.ik/",
        }
      },
      {
        name: "Rishabh Rathore",
        position: "UI/UX",
        image_url: "https://avatars.githubusercontent.com/u/56212029?v=4",
        social_profiles:{
            gdsc: "https://gdsc.community.dev/u/mytutb/",
            linkedIn: "https://www.linkedin.com/in/samik15/",
            gitHub: "https://github.com/licofiS",
            facebook: "https://www.facebook.com/samik.2025/",
            instagram: "https://www.instagram.com/sa.m.ik/",
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
            gdsc:"String",
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
      <div className="team">
      <div className="member">
        {this.state.members.map((member, ind) => {
          console.log(member);
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
      </div>
    </div>
    )
  } 
}

export default Team;
