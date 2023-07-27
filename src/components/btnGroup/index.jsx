import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStepBack, setStepConfirm, setStepGo, setInputErrors } from '../../redux/slices/init_slice';

const BtnGroup = () => {
  const { step, personalInfo } = useSelector((store) => store.init);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setStepBack());
  };
  const handleGo = () => {
    const errors = {};
    if (step === 1) {
      if (!personalInfo.name.trim()) {
        errors.name = 'This field is required';
      }
      if (!personalInfo.email.trim()) {
        errors.email = 'This field is required';
      }
      if (!personalInfo.phone.trim()) {
        errors.phone = 'This field is required';
      }
      // Actualiza el estado con los errores de validación
      dispatch(setInputErrors(errors));

      // Si hay errores, no avanzar al siguiente paso
      if (Object.keys(errors).length > 0) {
        return;
      }
    }
    dispatch(setStepGo());
  };

  const handleConfirm = () => {
    dispatch(setStepConfirm());
  };
  return (
    <div className={styles.containerBtnGroup}>
      <span className={styles.btnBack} onClick={step !== 1 ? handleBack : null}>
        {step !== 1 ? 'Go Back' : ''}
      </span>
      <button className={styles.btnNextConfirm} onClick={step !== 4 ? handleGo : handleConfirm}>
        {step !== 4 ? 'Next' : 'Confirm'}
      </button>
    </div>
  );
};

export default BtnGroup;
