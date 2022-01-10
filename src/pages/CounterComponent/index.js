import {useState} from 'react';

import OutputScreen from "./OutputScreen";

import styles from './counter.module.css';
import ButtonTypical from "../../components/ButtonTypical";

const CounterComponent = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    };
    const handleDecrement = () => {

        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const handleReset = () => {
        setCounter(0)
    }

    return (
        <div className={styles.counter}>
            <OutputScreen
                className={styles.counter__screen}
                action={counter}
            />
            <OutputScreen
                action={counter % 2 === 0 ? "Введено чётное число" : "Введено  нечётное число"}
                style={counter % 2 === 0 ? {backgroundColor: "#cb9b0e"} : {backgroundColor: "#064c01"}}
            />
            <div className={styles.button__wrapper}>
                <ButtonTypical
                    сlickAction={handleIncrement}
                    tittle="increment"
                />
                <ButtonTypical
                    сlickAction={handleDecrement}
                    tittle="decrement"
                />
                <ButtonTypical
                    сlickAction={handleReset}
                    tittle="reset"
                />
            </div>
        </div>
    );
};

export default CounterComponent;