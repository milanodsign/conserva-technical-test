import React from 'react';
import styles from './styles.module.css';
import { navBar } from '../../data/data';
import { useSelector } from 'react-redux';

const NavComponent = () => {
  const { step } = useSelector((store) => store.init);
  return (
    <div className={styles.containerNav}>
      {navBar.map((item, i) => (
        <div key={i} className={styles.itemNav}>
          <span className={step !== item.id ? styles.step : styles.activeStep}>{item.id}</span>
          <div className={styles.stepTitle}>
            <span>{`STEP ${item.id}`}</span>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavComponent;
