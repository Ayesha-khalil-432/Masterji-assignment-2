import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const RandomJokeComponent = ({ Icon }) => {
    const [randomValue, setRandomValue] = useState('');

    useEffect(() => {
        const generateRandomValue = () => {
            const randomNum = Math.floor(Math.random() * 9000) + 1000;
            const formattedNum = (randomNum / 1000).toFixed(1) + 'K';
            setRandomValue(formattedNum);
        };

        generateRandomValue();
    }, []);

    return (
        <div className={styles.main_wrap}>
            <Icon className={styles.icon} />
            <p className={styles.random_value}>{randomValue}</p>
        </div>
    );
}

export default RandomJokeComponent;
