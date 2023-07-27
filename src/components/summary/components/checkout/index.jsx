import React, { useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const CheckOut = () => {
  const [total, setTotal] = useState('');
  const { planType, selectedPlan, selectedAddons } = useSelector((store) => store.init);

  useEffect(() => {
    const newTotal = selectedAddons.reduce((accumulator, item) => accumulator + Number(item.price), 0);
    setTotal(newTotal);
  }, [selectedAddons]);

  return (
    <div className={styles.containerCheckout}>
      <div className={styles.contentInfo}>
        <div className={styles.packageSelected}>
          <div>
            <span>{`${selectedPlan.title} ${planType === 1 ? '(Monthly)' : '(Yearly)'}`}</span>
            <span>Change</span>
          </div>
          <div>{`$${selectedPlan.price}/${planType === 1 ? 'mo' : 'yr'}`}</div>
        </div>
        <hr />
        <div className={styles.addonsSelected}>
          {selectedAddons.map((item, i) => (
            <div key={i}>
              <span>{item.title}</span>
              <span>{`$${item.price}/${planType === 1 ? 'mo' : 'yr'}`}</span>
            </div>
          ))}
        </div>
      </div>
      <span className={styles.total}>
        <span>{`Total (per ${planType === 1 ? 'month' : 'year'})`}</span>
        <span>{`$${Number(total) + Number(selectedPlan.price)}/${planType === 1 ? 'mo' : 'yr'}`}</span>
      </span>
    </div>
  );
};

export default CheckOut;
