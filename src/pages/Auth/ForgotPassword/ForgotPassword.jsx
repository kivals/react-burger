import React from 'react';
import AuthWrapper from "../AuthWrapper";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";

import styles from './ForgotPassword.module.css';
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../../services/actions/auth";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');

  const { isResetPasswordPage } = useSelector(state => state.auth);

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const restoreHandler = () => {
    dispatch(resetPassword(email));
  }

  return isResetPasswordPage ? (
    <Navigate to="/reset-password" replace/>
  ) : (
    <AuthWrapper title="Восстановление пароля">
      <EmailInput
        onChange={onChangeEmail}
        value={email}
        name={'email'}
        isIcon={false}
        extraClass='mb-6'
        placeholder={'Укажите E-mail'}
      />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass='mb-20'
        onClick={restoreHandler}
      >
        Восстановить
      </Button>

      <p className={`${styles.text} mb-4`}>
        Вспомнили пароль?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </AuthWrapper>
  );
};

export default ForgotPassword;