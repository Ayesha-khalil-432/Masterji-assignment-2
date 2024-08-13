import { NavLink, Outlet } from 'react-router-dom';
import styles from './style.module.css'; 

function MainScreen() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/random-user"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Random User
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/random-jokes"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Random Jokes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/cats-listing"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Cats Listing
            </NavLink>
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
