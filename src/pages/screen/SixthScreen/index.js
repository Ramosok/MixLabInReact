import Card from "./Card";
import ButtonTypical from "../../../components/ButtonTypical";

import {CardsInfoList} from "./data";

import styles from './sixthScreen.module.css';

const SixthScreen = () => {
    return (
        <div className={styles.sixth_screen_container}>
            <h2 className={styles.text_center}>In the Wild</h2>
            <p className={styles.text_center}>
                In The Wild is a collection of pieces to help close the communication gap,<br/>
                while growing the love (and understanding) between you and your best pal.
            </p>
            <div className={styles.card_container_six_screen}>
                {CardsInfoList.map(({img, date, tittle, body, link}) =>
                    <Card
                        key={date}
                        img={img}
                        date={date}
                        tittle={tittle}
                        body={body}
                        link={link}
                    />)}
            </div>
            <ButtonTypical
                tittle='View more'
            />
        </div>
    );
};

export default SixthScreen;