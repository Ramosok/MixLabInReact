import Header from "../Header";
import Footer from "../Footer";

import styles from './loyout.module.css';
import stylesGlobal from './../../index.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={[`${styles.wrapper} ${stylesGlobal.max_width}`]}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;