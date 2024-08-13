import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import { fetchCatsListing } from '../../Services/Services';
import CatsListingCard from '../../Components/CatsListingComponent/CatsListingCard';
import ChaiCode from '../../Components/ChaiCode/ChaiCode';

const CatsListing = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetchCatsListing();
        if (response.success) {
          setCats(response.data.data);
        } else {
          throw new Error('Failed to fetch cats.');
        }
      } catch (error) {
        console.error('Error fetching cats:', error);
        setError('An error occurred while fetching cats. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <BackgroundImage src='https://s3-alpha-sig.figma.com/img/1d1e/0e8b/7e82484ac4b8cc3764a92f4a77daf7f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ao31WNqHhl38uqgP9vwW-QMwYvcsLlzPg5in~A3PG5q8Zvq1aOI~SFT1cEMB9J7odwy5OPG9ysiJtw9A9yDlO14V1BDdPxXXIzpjCAbjEM8bFl71pB3JJgG6QCK9BnN7jaCaI-WdvkoTFXPy3~jiVp7sDHlH7u0ZztOgN6PEmjOnP9d1BILYvCe2Gv9XC0ACSr~7n-Srry5FQhFPxJMgpR5qepKBJCH~zkG1VC8GWu213XgBDuhRteJF1Ier941xYmDll5XuLp8UtNewCotBgcayUlie0oUhXjFbdw2oaFJuAnSwBHgXguPyJ4Z7GCxzwh2XptvOj40xTbXB7LDJOw__'>
      <div className={styles.overlay}>
        <div className={styles.chai_codee}>
          <p className={styles.text}>Cats around us</p>
          <ChaiCode />
        </div>
        <div className={styles.cardContainer}>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && cats.map(cat => (
            <CatsListingCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default CatsListing;
