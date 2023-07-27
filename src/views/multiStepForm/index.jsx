import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import NavComponent from '../../components/navComponent';
import YourInfo from '../../components/YourInfo';
import SelectPlan from '../../components/selectPlan';
import AddOns from '../../components/addOns';
import Summary from '../../components/summary';
import BtnGroup from '../../components/btnGroup';
import Confirm from '../../components/confirm';

const MultiStepForm = () => {
  const { step, stepConfirm } = useSelector((store) => store.init);
  return (
    <div className={styles.container}>
      <NavComponent />
      {stepConfirm === false ? (
        <div className={styles.containerForm}>
          {step === 1 ? <YourInfo /> : step === 2 ? <SelectPlan /> : step === 3 ? <AddOns /> : <Summary />}
          <BtnGroup />
        </div>
      ) : (
        <div className={styles.containerForm}>
          <Confirm />
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
