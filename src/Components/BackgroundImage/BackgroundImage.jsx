import React from 'react';
import styles from './style.module.css';

const BackgroundImage = ({ src, children }) => {
    return (
        <div
            className={styles.background}
            style={{ backgroundImage: `url(${src})` }}
        >
            {children}
        </div>
    );
};

export default BackgroundImage;