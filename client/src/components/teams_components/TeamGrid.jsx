import React from "react";
import styles from "../../styles/components/teamGrid.module.css"



function TeamGrid(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.color}>
                        <span style={{zIndex:"5"}} 
                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.ln;
                            }} target="_blank" rel="noopener noreferrer">
                            
                                <span className={styles.smi}>LinkedIn</span>                        </span>
                        <span style={{zIndex:"5"}} 
                                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.ln;
                            }}>
                                <span className={styles.smi}>Github</span>
                        </span>
                        <span style={{zIndex:"15"}} 
                                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = props.ln;
                                }}>
                                <span className={styles.smi}>Facebook</span>
                        </span>
                        <span style={{zIndex:"5"}} 
                                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href = props.ln;
                            }}>
                                <span className={styles.smi}>Instagram</span>
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
