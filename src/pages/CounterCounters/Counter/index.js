import {memo} from "react";
import styles from './../counters.module.css'

const Counter = ({counter, setCount, removeCounter, zeroingOutCounter}) => {
    return (
        <div className={styles.one_counter}>
          <span>
            {counter.count}
          </span>
            <button type="button" onClick={() => setCount(counter.id, 'increment')}>+</button>
            <button type="button" onClick={() => setCount(counter.id, 'decrement')}>-</button>
            <button type="button" onClick={() => removeCounter(counter.id)}>del</button>
            <button type="button" onClick={() => zeroingOutCounter(counter.id)}>Reset to Zero</button>
        </div>
    );
};

export default memo(Counter);