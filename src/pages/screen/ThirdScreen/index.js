import ButtonTypical from "../../../components/ButtonTypical";
import ImageTextComponent from "./ImageTextComponent";

import {ImageTextComponentList, tittleComponent} from "./data";

import styles from './thirdScreen.module.css';


const ThirdScreen = () => {
    return (
        <div className={styles.third__screen__container}>
            <h2 className={styles.third__screen__tittle}>{tittleComponent}</h2>
            <div className={styles.image_text_component_list}>
                {ImageTextComponentList.map(({img, tittle, body}) => <ImageTextComponent
                    key={tittle}
                    img={img}
                    tittle={tittle}
                    body={body}
                />)}
            </div>
            <ButtonTypical
                tittle={'Learn More'}
            />
        </div>
    );
};

export default ThirdScreen;