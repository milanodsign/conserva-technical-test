import React from 'react';
import styles from './styles.module.css';
import confirm from '../../assets/Check.svg'
const Confirm = () => {
  return (
    <div className={styles.containerConfirm}>
      <img className={styles.imgConfirm} src={confirm} alt="" />
      <h1>Thank you!</h1>
      <h2 className={styles.h2Confirm}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </h2>
    </div>
  );
};

export default Confirm;
