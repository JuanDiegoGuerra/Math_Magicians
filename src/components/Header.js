import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const active = {
  color: 'orange',
};

const Header = () => (
  <header className={styles.header}>
    <h1>MathMagicians</h1>
    <ul className={styles.nav}>
      <li className={styles.listitem}>
        <NavLink className={styles.link} activeClassName={active} to="/">
          Home
        </NavLink>
      </li>
      <li className={styles.listitem}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/calculator"
        >
          Calculator
        </NavLink>
      </li>
      <li className={styles.listitem}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/quote"
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </header>
);
export default Header;
