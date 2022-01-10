import Counter from "./Counter";
import styles from './counters.module.css'
import {useCounters} from "../../hooks/useCounters";

const CounterCounters = () => {

    const {
        addCounter,
        setCount,
        zeroingOutCounter,
        removeCounter,
        counters,
        setCounters
    } = useCounters()

    const totalCount = counters.reduce(
        (accumulator, currentCounter) => accumulator + currentCounter.count,
        0,
    );
    const differentCounts = counters.length;

    return (
        <div className={styles.counters}>
            <div>Total Count - {totalCount} </div>
            <div>Different Counts - {differentCounts} </div>
            <button type="button" onClick={() => setCounters([])}>Reset</button>
            <button type="button" onClick={addCounter}>Add Count</button>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    counter={counter}
                    setCount={setCount}
                    removeCounter={removeCounter}
                    zeroingOutCounter={zeroingOutCounter}
                />
            ))}
        </div>
    );
};

export default CounterCounters;