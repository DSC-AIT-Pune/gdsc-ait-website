import React, { useState } from "react";
import gdscLogo from "../../styles/images/gdsclogo.svg";

const Description = () => {
    const [state, setState] = useState({
        brief:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
    });

    return (
        <div className="description_container">
            <img src={gdscLogo} alt="dscLogo" />
            <p>{state.brief}</p>
        </div>
    );
};

export default Description;
