import {v4 as uuidv4} from 'uuid';
import {useState} from "react";

const initialCount = 0;

export const useCounters = () => {
    const [counters, setCounters] = useState([]);

    const addCounter = () => {
        const newCounter = {
            id: uuidv4(),
            count: initialCount,
        };
        const addInCountOne = counters.map(addOne => {
            if (addOne.count === initialCount) {
                return {
                    ...addOne,
                    count: addOne.count,
                };
            }
            if (addOne.count % 2 === initialCount) {
                return {
                    ...addOne,
                    count: addOne.count + 1,
                };
            }
            return addOne;
        });
        setCounters([...addInCountOne, newCounter]);
    };


    const setCount = (id, direction) => {
        setCounters(prevState => {
            return counters.map(counter =>
                counter.id === id
                    ? {
                        ...counter,
                        count:
                            direction === 'increment'
                                ? (counter.count + 1)
                                : (counter.count > 1 ? counter.count - 1 : initialCount),
                    } : counter,
            );
        });
    };

    const removeCounter = id => {
        const filteredCounters = counters.filter(counter => counter.id !== id)
        const formattedCounters = filteredCounters.map(counter => {
            if (counter.count === initialCount) {
                return counter;
            }

            if (counter.count % 2 !== initialCount) {
                return {
                    ...counter,
                    count: counter.count - 1,
                };
            }

            return counter;
        });
        setCounters(formattedCounters);
    };

    const zeroingOutCounter = (id) => {
        const zeroingCounter = counters.map(count => {
            if (count.id === id) {
                return {
                    ...count,
                    count: initialCount,
                };
            }
            return count;
        });
        setCounters(zeroingCounter);
    }
    return {
        addCounter,
        setCount,
        zeroingOutCounter,
        removeCounter,
        counters,
        setCounters
    }
}