import React from "react";
import ContributorGrid from "./ContributorGrid";

function Contributors() {
  //----------------------TEST TEAM DATA-------------------------
  let members = {
    data: [
      {
        name: "Shekhar Kumar",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Yash Chaudhary",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Abhishek Kumar Meel",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Chandresh Singh",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Monu Yadav",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Bhavana",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
      {
        name: "Tarun",
        info: "",
        imgUrl:
          "https://avatars.githubusercontent.com/u/32845547",
      },
      {
        name: "Vinita",
        info: "",
        imgUrl:
          "https://cdn-icons-png.flaticon.com/512/168/168726.png",
      },
    ],
  };
  //----------------------TEST TEAM DATA-------------------------

  return (
    <div className="team">
      <h1 className="headings">Contributors</h1>
      <div className="member">
        {members.data.map((member, ind) => {
          return (
            <ContributorGrid
              key={ind}
              name={member.name}
              imgUrl={member.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contributors;
