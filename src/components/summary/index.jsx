import React from 'react';
import styles from './styles.module.css';
import CheckOut from './components/checkout';

const Summary = () => {
  return (
    <div className={styles.containerSummary}>
      <h1>Finishing up</h1>
      <h2>Double-check everything looks OK before confirming.</h2>
      <CheckOut />
    </div>
  );
};

export default Summary;
