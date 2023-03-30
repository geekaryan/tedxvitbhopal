import React from "react";
import styles from "./Heads.module.css";
function SingleMember(props) {
  return (
    <div className={styles.flex}>
      <div className={styles.flexs}>
        <img className={styles.pic} src={props.pic} alt="img" />
        <div className={styles.flexs}>
          <div className={styles.vicetext}>
            <span>{props.pos}</span>
          </div>
          <div className={styles.vicetext}>{props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleMember;
