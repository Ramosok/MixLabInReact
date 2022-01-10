import CenterComponent from "./CenterComponent";

import imgLeft from './../../../static/first-screen-left.svg'
import imgRight from './../../../static/first-screen-right.svg'

import styles from './firstScreen.module.css';
import stylesGlobal from './../../../index.module.css'

const FirstScreen = () => {
    return (
        <div className={[`${styles.first__screen} ${stylesGlobal.flex_container} ${stylesGlobal.max_width}`]}>
            <div className={styles.img_left}>
                <img src={imgLeft} alt=""/>
            </div>
            <CenterComponent/>
            <div className={styles.img_right}>
                <img src={imgRight} alt=""/>
            </div>
        </div>
    );
};

export default FirstScreen;