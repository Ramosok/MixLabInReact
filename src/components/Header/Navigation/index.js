import ItemMenu from "./ItemMenu";

import {navigationList} from "./data";

import styles from './navigation.module.css';


const Navigation = () => {
    return (
        <>
            <ul className={[`${styles.nav} ${styles.is_active}`]}>
                {navigationList.map(({tittle, linkTo, id}) => <li className='item_menu' key={id}>
                    <ItemMenu
                        id={id}
                        tittle={tittle}
                        linkTo={linkTo}/>
                </li>)}
            </ul>
        </>
    );
};

export default Navigation;