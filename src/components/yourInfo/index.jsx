import React from 'react';
import styles from './styles.module.css';
import FormPersonalInfo from './components/formPersonalInfo';

const YourInfo = () => {
  return (
    <div className={styles.containerYourInfo}>
      <h1>Personal info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>
      <FormPersonalInfo />
    </div>
  );
};

export default YourInfo;
