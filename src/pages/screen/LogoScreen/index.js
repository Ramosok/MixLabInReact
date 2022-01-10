import LogoCard from "./LogoCard";

import {logoList} from "./data";

import styles from './logoScreen.module.css';

const LogoScreen = () => {
    return (
        <div className={styles.logo_screen_container}>
            {logoList.map(({img,id}) =>
                <LogoCard
                    key={id}
                    img={img}
                />)}
        </div>
    );
};
export default LogoScreen;