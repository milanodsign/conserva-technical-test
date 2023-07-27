import React, { useState } from 'react';
import styles from './styles.module.css';
import { pickAddOns } from '../../../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAddOns } from '../../../../redux/slices/init_slice';

const Checks = () => {
  const { planType, selectedAddons } = useSelector((store) => store.init);

  const dispatch = useDispatch();

  const handleCheckboxChange = (item) => {
    dispatch(setSelectedAddOns(item));
  };

  const isChecked = (id) => {
    return selectedAddons.some((item) => item.id === id);
  };

  return (
    <div className={styles.containerChecks}>
      {planType === 1
        ? pickAddOns[0].montly.map((item, i) => (
            <div
              key={i}
              className={isChecked(item.id) ? styles.itemChecksChecked : styles.itemChecks}
              onClick={() => handleCheckboxChange(item)}
            >
              <div className={styles.cheks}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  onClick={(e) => e.stopPropagation()}
                  checked={isChecked(item.id)}
                  onChange={() => {}}
                  id={item.id}
                />
                <label
                  htmlFor={item.id}
                  className={isChecked(item.id) ? styles.checkboxCheck : styles.checkboxUncheck}
                ></label>
              </div>
              <div className={styles.infoChecks}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.description}>{item.description}</span>
              </div>
              <div className={styles.priceChecks}>{`+$${item.price}/mo`}</div>
            </div>
          ))
        : pickAddOns[0].yearly.map((item, i) => (
            <div
              key={i}
              className={isChecked(item.id) ? styles.itemChecksChecked : styles.itemChecks}
              onClick={() => handleCheckboxChange(item)}
            >
              <div className={styles.cheks}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  onClick={(e) => e.stopPropagation()}
                  checked={isChecked(item.id)}
                  onChange={() => {}}
                  id={item.id}
                />
                <label
                  htmlFor={item.id}
                  className={isChecked(item.id) ? styles.checkboxCheck : styles.checkboxUncheck}
                ></label>
              </div>
              <div className={styles.infoChecks}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.description}>{item.description}</span>
              </div>
              <div className={styles.priceChecks}>{`+$${item.price}/yr`}</div>
            </div>
          ))}
    </div>
  );
};

export default Checks;
