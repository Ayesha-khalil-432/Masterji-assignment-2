import React from 'react';
import styles from './style.module.css';

const RandomUserInfo = ({ title1, title2, title1Info, title2Info }) => {
    return (
        <div className={styles.main_div}>
            <div className={styles.wrapper}>
                <p className={styles.title}>{title1}</p>
                <b className={styles.titleInfo}>{title1Info}</b>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>{title2}</p>
                <b className={styles.titleInfo}>{title2Info}</b>
            </div>
        </div>
    );
}

export default RandomUserInfo;
