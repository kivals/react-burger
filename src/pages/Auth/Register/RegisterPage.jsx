import React from 'react';
import styles from "./Register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import AuthWrapper from "../AuthWrapper";

const RegisterPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <AuthWrapper title="Регистрация">
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={onChangeName}
        value={name}
        name={'name'}
        size={'default'}
        extraClass="mb-6"
      />

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
        Зарегистрироваться
      </Button>

      <p className={`${styles.text} mb-4`}>
        Уже зарегистрированы?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </AuthWrapper>
  );
};

export default RegisterPage;