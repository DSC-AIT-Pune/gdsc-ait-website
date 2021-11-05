import React from "react";
import "../../styles/pages/team.css";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
}

function TeamGrid(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="left">
                    <div className="color">
                        <span>
                            <a href={props.ln} target="_blank" rel="noopener noreferrer">
                                <span className="smi">LinkedIn</span>
                            </a>
                        </span>
                        <span>
                            <a href={props.gh} target="_blank" rel="noopener noreferrer">
                                <span className="smi">Github</span>
                            </a>
                        </span>
                        <span>
                            <a href={props.fb} target="_blank" rel="noopener noreferrer">
                                <span className="smi">Facebook</span>
                            </a>
                        </span>
                        <span>
                            <a href={+ props.ig} target="_blank" rel="noopener noreferrer">
                                <span className="smi">Instagram</span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="imgBx">
                        <img className="circular--square" src={props.img} alt="DSC" />
                    </div>
                    <div className="contentBx">
                        <h2>{props.name}</h2>
                        <div className="size">
                            <h4>{props.role}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamGrid;
