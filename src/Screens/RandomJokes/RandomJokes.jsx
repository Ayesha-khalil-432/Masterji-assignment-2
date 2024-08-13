import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { fetchRandomJoke } from '../../Services/Services';
import RandomJokeComponent from '../../Components/RandomJokeComponent/RandomJokeComponent';
import { FaRegHeart } from "react-icons/fa";
import { LuRepeat2 } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { RiSaveLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import ChaiCode from '../../Components/ChaiCode/ChaiCode';

const RandomJokes = () => {
    const [randomJoke, setRandomJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJokes = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchRandomJoke();
            console.log('Data retrieved:', data.data);
            setRandomJoke(data.data);
        } catch (err) {
            console.error('Error fetching joke:', err);
            setError('Unable to fetch joke');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJokes();
    }, []);

    return (
        <BackgroundImage src="https://media.gq.com/photos/55eb018ee4fe554f308838c2/16:9/w_2560%2Cc_limit/twitter-pattern.jpg">
            <div>
                {loading ? (
                    <div>
                        <p>Loading post...</p>
                    </div>
                ) : error ? (
                    <div>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className={styles.modal}>
                        <div className={styles.header}>
                            <IoIosArrowRoundBack style={{ fontSize: '25px', marginRight: '10px' }} />
                            <p className={styles.heading}>Post</p>
                        </div>
                        <div className={styles.profile_info}>
                            <div className={styles.profile_wrap}>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-_R6V-nDMdEKuLC_LNEZG_BJ-6-m74_e1w&s'
                                    className={styles.profile_photo}
                                    alt="Profile"
                                />
                                <div className={styles.username}>
                                    <b className={styles.name}>Elon Musk<MdVerified style={{ color: '#1c9bef', marginLeft: '3px' }} /></b>
                                    <p className={styles.username_}>@elonmusk</p>
                                </div>
                            </div>
                            <div>
                                <IoEllipsisHorizontalSharp />
                            </div>
                        </div>
                        <div>
                            <p className={styles.joke_content}>{randomJoke?.content}</p>
                            <p className={styles.post_time}>11:18pm . Jul 30, 2024 . <b>20.5M</b> Views</p>
                        </div>
                        <div className={styles.post_activities}>
                            <RandomJokeComponent Icon={FaRegComment} />
                            <RandomJokeComponent Icon={LuRepeat2} />
                            <RandomJokeComponent Icon={FaRegHeart} />
                            <RandomJokeComponent Icon={RiSaveLine} />
                            <IoShareOutline />
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.chai_code}>
                    <ChaiCode />
                </div>
        </BackgroundImage>
    );
}

export default RandomJokes;
