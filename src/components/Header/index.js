import Navigation from "./Navigation";
import UserAction from "./UserAction";
import Logo from "./Logo";
import {BurgerMenu} from "../BurgerMenu";
import styles from './header.module.css'
import stylesGlobal from './../../index.module.css'



const Header = () => {
    return (
        <div className={[`${styles.header__container} ${stylesGlobal.flex_container}`]}>
            <BurgerMenu/>
            <Navigation/>
            <Logo/>
            <UserAction/>
        </div>
    );
};

export default Header;