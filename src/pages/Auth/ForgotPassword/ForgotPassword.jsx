import React from 'react';
import AuthWrapper from "../AuthWrapper";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <AuthWrapper title="Восстановление пароля">
      <EmailInput
        onChange={onChangeEmail}
        value={email}
        name={'email'}
        isIcon={false}
        extraClass='mb-6'
        placeholder={'Укажите E-mail'}
      />
      <Button htmlType="button" type="primary" size="large" extraClass='mb-20'>
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