import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/layout.module.css';

const Layout = () => (
  <div className={styles.container}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
