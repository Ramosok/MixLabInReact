import ButtonTypical from "../../../components/ButtonTypical";

import {textBody, textTittle} from "./data";

import girlAndDog from './../../../static/girlAndDog.svg'

import styles from './fourthScreen.module.css';

const FourthScreen = () => {
    return (
        <div className={styles.fourth_screen_container}>
            <div className={styles.img_gerl_and_dog}>
                <img src={girlAndDog} alt=""/>
            </div>
            <div className={styles.fourth_screen_right_block}>
                <p className={styles.uppercase_text}>For Veterinarians</p>
                <h2 className={styles.fourth_screen_tittle}>{textTittle}</h2>
                <p className={styles.fourth_screen_body}>
                    {textBody}
                </p>
                <ButtonTypical
                    tittle={'Learn More'}
                />
            </div>
        </div>
    );
};

export default FourthScreen;