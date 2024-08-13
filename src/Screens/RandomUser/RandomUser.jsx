import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { fetchRandomUser } from '../../Services/Services';
import { IoIosArrowRoundBack, IoIosRefresh } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import RandomUserInfo from '../../Components/RnadomUserComponent/RandomUserInfo';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import ChaiCode from '../../Components/ChaiCode/ChaiCode';

const RandomUser = () => {
    const [randomUserInfo, setRandomUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchRandomUser();
            console.log('Data retrieved:', data.data);
            setRandomUserInfo(data.data);
        } catch (err) {
            console.error('Error fetching user:', err);
            setError('Unable to fetch user');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const openInGoogleMaps = () => {
        if (randomUserInfo?.location) {
            const { latitude, longitude } = randomUserInfo.location.coordinates;
            const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
            window.open(url, '_blank');
        } else {
            alert('Location data not available');
        }
    };

    const makeCall = () => {
        if (randomUserInfo?.phone) {
            const url = `tel:${randomUserInfo.phone}`;
            window.location.href = url;
        } else {
            alert('Phone number not available');
        }
    };

    return (
        <BackgroundImage src="https://c1.wallpaperflare.com/preview/860/92/862/green-plant-nature-dark.jpg">
            <div className={styles.modal}>
                <div className={styles.header}>
                    <IoIosArrowRoundBack style={{ fontSize: '25px' }} />
                    <p className={styles.heading}>Profile Overview</p>
                    <IoIosRefresh style={{ fontSize: '20px', cursor: 'pointer' }} onClick={fetchUser} />
                </div>
                <div className={styles.profile}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <div className={styles.profile_info}>
                                {randomUserInfo?.gender === 'female' ? (
                                    <>
                                        <div className={styles.gender}>Mrs</div>
                                        <img className={styles.profile_image} src='https://as1.ftcdn.net/v2/jpg/03/65/85/20/1000_F_365852057_mV52iIJS1xtbyGXvJpYT4YhOQejWdnrF.jpg' alt="Profile" />
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.gender}>Mr</div>
                                        <img className={styles.profile_image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNb-sfIK-bI1mrHaYPDaxeS9zZ-VRkzmT3OQ&s' alt="Profile" />
                                    </>
                                )}
                            </div>
                            <p className={styles.username}>{randomUserInfo?.login?.username}</p>
                            <div className={styles.location_call}>
                                <div className={styles.call_location} onClick={openInGoogleMaps} style={{ cursor: 'pointer' }}>
                                    <FaLocationDot />
                                    <p>Location</p>
                                </div>
                                <div className={styles.call_location} onClick={makeCall} style={{ cursor: 'pointer' }}>
                                    <IoCall />
                                    <p>Call</p>
                                </div>
                            </div>
                            <RandomUserInfo
                                title1="City"
                                title2='Nationality'
                                title1Info={randomUserInfo?.location?.city}
                                title2Info={randomUserInfo?.nat}
                            />
                            <RandomUserInfo
                                title1="Date of Birth"
                                title2='Phone No.'
                                title1Info={formatDate(randomUserInfo?.dob?.date)}
                                title2Info={randomUserInfo?.phone}
                            />
                            <RandomUserInfo
                                title1="Time Zone"
                                title2='Registered Since'
                                title1Info={randomUserInfo?.location?.timezone?.offset + ' ' + `(${randomUserInfo?.location?.timezone?.description})`}
                                title2Info={formatDate(randomUserInfo?.registered?.date)}
                            />
                        </>
                    )}
                </div>
                <div className={styles.chaiCode}>
                    <ChaiCode />
                </div>
            </div>
        </BackgroundImage>
    );
};

export default RandomUser;
