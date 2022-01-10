import ButtonTypical from "../../../../components/ButtonTypical";

import rabbit from './../../../../static/first-screen-rabbit.svg'

import styles from './centerComponent.module.css'

const CenterComponent = () => {

    return (
        <div className={styles.center__component}>
            <h1 className={styles.text_center}>The pet pharmacy <br/> humans are jealous of.</h1>
            <p className={styles.text_center_body}>5 stars on <a href="#">Yelp</a>,<a href="#">Google</a> and <a href="#">Facebook</a> because your<br/> best friend deserves only the best in pet care. </p>
            <ButtonTypical
                tittle={'Try Mixlab'}
            />
            <div className={styles.rabbit}>
                <img className={styles.rabbit_img} src={rabbit} alt=""/>
            </div>
        </div>
    );
};

export default CenterComponent;