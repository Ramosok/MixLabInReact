import TextComponent from "./TextComponent";

import {textRight, tittleLeftBlock} from "./data";

import dog from './../../../static/DOG.svg'

import styles from './secondSceen.module.css';

const SecondScreen = () => {


    return (
        <div className={styles.second__screen}>
            <div className={styles.left__block}>
                <h2>{tittleLeftBlock}</h2>
                <div>
                    <img className={styles.dog} src={dog} alt=""/>
                </div>
            </div>
            <div className={styles.right__block}>
                {textRight.map(({tittle, body}) =>
                    <TextComponent
                        key={tittle}
                        tittle={tittle}
                        body={body}
                    />)}
            </div>
        </div>
    );
};

export default SecondScreen;