import React from 'react';
import styles from './styles.module.css';
import Switch from 'react-input-switch';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanType } from '../../../../redux/slices/init_slice';

const SelectTypePlan = () => {
  const { planType } = useSelector((store) => store.init);
  const dispatch = useDispatch();
  const handlePlanType = (val) => {
    dispatch(setPlanType(val));
  };
  return (
    <div className={styles.containerSelectTypePlan}>
      <span className={planType === 1 ? styles.active : styles.inactive}>Montly</span>
      <Switch on={2} off={1} value={planType} onChange={handlePlanType} />
      <span className={planType === 2 ? styles.active : styles.inactive}>Yearly</span>
    </div>
  );
};

export default SelectTypePlan;
