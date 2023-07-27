import React from 'react';
import styles from './styles.module.css';
import { inputForm } from '../../../../data/data';
import { setInputErrors, setPersonalInfo } from '../../../../redux/slices/init_slice';
import { useDispatch, useSelector } from 'react-redux';

const FormPersonalInfo = () => {
  const { personalInfo, inputErrors } = useSelector((state) => state.init);
  const dispatch = useDispatch();
  const hangleInputs = (e) => {
    dispatch(setPersonalInfo(e));
  };
  const handleInputFocus = (e) => {
    const { name } = e.target;
    dispatch(setInputErrors({ ...inputErrors, [name]: '' }));
  };
  return (
    <form className={styles.formPersonalInfo}>
      {inputForm.map((item, i) => (
        <div className={styles.containerInput} key={i}>
          <span className={styles.containerLabelError}>
            <label className={styles.label} htmlFor={item.name}>
              {item.label}
            </label>
            <span
              id={`error_${item.name}`}
              className={inputErrors[item.name] ? styles.errorMessageActive : styles.errorMessage}
            >
              {item.error}
            </span>
          </span>
          <input
            className={inputErrors[item.name] ? styles.inputError : styles.input}
            id={item.name}
            type={item.type}
            name={item.name}
            value={personalInfo[item.name]}
            placeholder={item.placeholder}
            onChange={hangleInputs}
            onFocus={handleInputFocus}
          />
        </div>
      ))}
    </form>
  );
};

export default FormPersonalInfo;
