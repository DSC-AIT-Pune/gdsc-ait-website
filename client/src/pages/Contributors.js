import React from "react";
import ContributorGrid from "./ContributorGrid";

function Contributors() {
  //----------------------TEST TEAM DATA-------------------------
  let members = {
    data: [
      {
        name: "Shekhar Kumar",
        info: "",
      },
      {
        name: "Yash Chaudhary",
        info: "",
      },
      {
        name: "Abhishek Kumar Meel",
        info: "",
      },
      {
        name: "Navneet Das",
        info: "",
      },
      {
        name: "Chandresh Singh",
        info: "",
      },
      {
        name: "Govind Prasad Sharma",
        info: "",
      },
      {
        name: "Rishabh Rathore",
        info: "",
      },
      {
        name: "Samik Choudhury",
        info: "",
      },
      {
        name: "Robin choudhary",
        info: "",
      },
      {
        name: "Tarun Mishra",
        info: "",
      },
    ],
  };
  //----------------------TEST TEAM DATA-------------------------

  return (
    <div className="team">
      <h1 className="headings">Contributors</h1>
      <div className="member">
        {members.data.map((member, ind) => {
          return <ContributorGrid key={ind} name={member.name} />;
        })}
      </div>
    </div>
  );
}

export default Contributors;
