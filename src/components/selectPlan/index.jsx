import React from 'react';
import styles from './styles.module.css';
import Plans from './components/plans';
import SelectTypePlan from './components/selecttype';

const SelectPlan = () => {
  return (
    <div className={styles.containerSelectPlan}>
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      <Plans />
      <SelectTypePlan />
    </div>
  );
};

export default SelectPlan;
