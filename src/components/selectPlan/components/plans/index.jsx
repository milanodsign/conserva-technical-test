import React from 'react';
import styles from './styles.module.css';
import { selectPlan } from '../../../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setPlan } from '../../../../redux/slices/init_slice';

const Plans = () => {
  const { planType, plan } = useSelector((store) => store.init);
  const dispatch = useDispatch();
  const handleSelectPlan = (select, item) => {
    const customPayload = {
      selected: select,
      item: item,
    };
    dispatch(setPlan(customPayload));
  };
  return (
    <div className={styles.containerPlans}>
      <div>
        {planType === 1
          ? selectPlan[0].montly.map((item, i) => (
              <div
                className={plan === i + 1 ? styles.itemPlanActive : styles.itemPlan}
                key={i}
                onClick={() => handleSelectPlan(i + 1, item)}
              >
                <span className={styles.imgPlan}>
                  <img src={item.img} alt="" />
                </span>
                <span className={styles.infoPlan}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.priceMontly}>{`$${item.price}/mo`}</span>
                  <span className={styles.description}>{item.description}</span>
                </span>
              </div>
            ))
          : selectPlan[0].yearly.map((item, i) => (
              <div
                className={plan === i + 1 ? styles.itemPlanActive : styles.itemPlan}
                key={i}
                onClick={() => handleSelectPlan(i + 1, item)}
              >
                <span className={styles.imgPlan}>
                  <img src={item.img} alt="" />
                </span>
                <span className={styles.infoPlan}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.price}>{`$${item.price}/yr`}</span>
                  <span className={styles.description}>{item.description}</span>
                </span>
              </div>
            ))}
      </div>
      <div></div>
    </div>
  );
};

export default Plans;
