import React from "react";
import styles from "../../styles/components/teamGrid.module.css"

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
}

function TeamGrid(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.color}>
                        <span>
                            <a href={props.ln} target="_blank" rel="noopener noreferrer">
                                <span className={styles.smi}>LinkedIn</span>
                            </a>
                        </span>
                        <span>
                            <a href={props.gh} target="_blank" rel="noopener noreferrer">
                                <span className={styles.smi}>Github</span>
                            </a>
                        </span>
                        <span>
                            <a href={props.fb} target="_blank" rel="noopener noreferrer">
                                <span className={styles.smi}>Facebook</span>
                            </a>
                        </span>
                        <span>
                            <a href={+ props.ig} target="_blank" rel="noopener noreferrer">
                                <span className={styles.smi}>Instagram</span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgBx}>
                        <img className={styles.circularSquare} src={props.img} alt="DSC" />
                    </div>
                    <div className={styles.contentBx}>
                        <h2>{props.name}</h2>
                        <div className={styles.size}>
                            <h4>{props.role}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamGrid;
