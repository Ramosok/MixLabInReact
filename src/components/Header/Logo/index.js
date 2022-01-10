import {Link} from "react-router-dom";

import logo from './../../../static/LOGO.svg'

import styles from './logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="LOGO"/></Link>
        </div>
    );
};

export default Logo;