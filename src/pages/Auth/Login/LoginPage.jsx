import React from 'react';
import styles from './Login.module.css';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import AuthWrapper from "../AuthWrapper";

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <AuthWrapper title='Вход'>
      <EmailInput
        onChange={onChangeEmail}
        value={email}
        name={'email'}
        isIcon={false}
        extraClass='mb-6'
      />

      <PasswordInput
        onChange={onChangePassword}
        value={password}
        name={'password'}
        extraClass="mb-6"
      />

      <Button htmlType="button" type="primary" size="large" extraClass='mb-20'>
        Войти
      </Button>

      <p className={`${styles.text} mb-4`}>
        Вы — новый пользователь?
        <Link to='/register' className={styles.link}> Зарегистрироваться</Link>
      </p>

      <p className={`${styles.text}`}>
        Забыли пароль?
        <span> Восстановить пароль</span>
      </p>
    </AuthWrapper>
  );
};

export default LoginPage;