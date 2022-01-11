import {Link} from "react-router-dom";
import {ROUTE_NAMES} from "../../../routes/routeNames";
import logo from './../../../static/LOGO.svg'

import styles from './logo.module.css'


const Logo = () => {
    return (
        <p className={styles.logo}>
            <Link to={ROUTE_NAMES.HOME}><img src={logo} alt="LOGO"/></Link>
        </p>
    );
};

export default Logo;