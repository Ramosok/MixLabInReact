import Slider from "./Slider";

import hearts from './../../../static/hearts.svg'

import styles from './fifthScreen.module.css';


const FifthScreen = () => {
    return (
        <div className={styles.fifth_screen_container}>
            <h2>Pets love Mixlab!</h2>
            <p>See why we're 5 stars on <a href="#">Yelp</a>, <a href="#">Google</a> and <a href="#">Facebook</a>:)</p>
            <div className={styles.hearts_container}>
                <img src={hearts} alt=""/>
            </div>
            <Slider/>
        </div>
    );
};

export default FifthScreen;