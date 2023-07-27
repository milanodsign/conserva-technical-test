import React from 'react';
import styles from './styles.module.css';
import Checks from './components/checks';

const AddOns = () => {
  return (
    <div className={styles.containerAddOns}>
      <h1>Pick add-ons</h1>
      <h2>Add-ons help enhance your gaming experience.</h2>
      <Checks />
    </div>
  );
};

export default AddOns;
