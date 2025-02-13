import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ value, onChange }, ref) => (
    <input
      ref={ref}
      className={styles.input}
      placeholder="Search characters.."
      value={value}
      onChange={onChange}
    />
));

export default Input;
