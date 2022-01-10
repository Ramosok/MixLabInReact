import {Link} from "react-router-dom";

import ItemMenu from "./ItemMenu";

import {navigationList} from "./data";

import styles from './navigation.module.css';


const Navigation = () => {
    return (
        <>
            <ul className={[`${styles.nav} ${styles.is_active}`]}>
                {navigationList.map(({tittle, linkTo}) => <li className='item_menu' key={tittle}>
                    <ItemMenu
                        tittle={tittle}
                        linkTo={linkTo}/>
                </li>)}
            </ul>
            <Link to="/counter">Counter</Link>
            <Link to="/counters">Counters</Link>
        </>
    );
};

export default Navigation;