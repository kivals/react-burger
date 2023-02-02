import React from 'react';
import AuthWrapper from "../AuthWrapper";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPassword.module.css";
import {Link} from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeCode = e => {
    setCode(e.target.value)
  }

  return (
    <AuthWrapper title="Восстановление пароля">
      <PasswordInput
        onChange={onChangePassword}
        value={password}
        name={'password'}
        extraClass="mb-6"
        placeholder={'Введите новый пароль'}
      />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChangeCode}
        value={code}
        name={'name'}
        size={'default'}
        extraClass="mb-6"
      />
      
      <Button htmlType="button" type="primary" size="large" extraClass='mb-20'>
        Сохранить
      </Button>

      <p className={`${styles.text} mb-4`}>
        Вспомнили пароль?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </AuthWrapper>
  );
};

export default ResetPassword;