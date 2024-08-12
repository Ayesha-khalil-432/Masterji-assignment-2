import { Link, Outlet } from 'react-router-dom';
import styles from './style.module.css'; // Import the CSS module

function MainScreen() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/random-user" className={styles.link}>Random User</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/random-jokes" className={styles.link}>Random Jokes</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/cats-listing" className={styles.link}>Cats Listing</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainScreen;
