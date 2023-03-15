/** @format */

import React, { useState } from "react";
import styles from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";


export function Counter() {

  const [incrementAmount, setIncrementAmount] = useState("2");
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(5))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}
        >
          +
        </button>
      </div>
    </div>
  );
}
