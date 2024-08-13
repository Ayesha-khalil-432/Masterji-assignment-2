import styles from './style.module.css';

const CatsListingCard = ({ cat }) => {
    const temperamentList = cat.temperament.split(', ');

    return (
        <div className={styles.card}>
            <img src={cat.image} alt={cat.name} className={styles.catImage} />
            <div className={styles.wrapper}>
                <h2 className={styles.cat_name}>{cat.name}</h2>
                <p className={styles.description}>{cat.description}</p>
                <p className={styles.origin}><strong className={styles.origin_}>Origin:</strong>{cat.origin}</p>
                <strong className={styles.origin_}>Temperament:</strong>
                <div className={styles.temperamentList}>
                    {temperamentList.map((trait, index) => (
                        <span key={index} className={styles.temperamentTrait}>
                            {trait}
                        </span>
                    ))}
                </div>
                <p className={`${styles.origin_} ${styles.life}`}><strong className={styles.origin_}>Life Span:</strong>{cat.life_span + 'Years'}</p>
            </div>
            <a href={cat.wikipedia_url} target='blank' className={styles.learn_more}>Learn More</a>
        </div>
    );
};

export default CatsListingCard;
