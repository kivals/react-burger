import React, {useEffect} from 'react';
import styles from './Login.module.css';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import AuthWrapper from "../AuthWrapper";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, login} from "../../../services/actions/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isAuth, errorMessage } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate('/', {replace: true});
    }
  }, [isAuth, navigate])

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleClick = async () => {
    dispatch(login({email, password}));
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

      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass='mb-20'
        onClick={handleClick}
      >
        Войти
      </Button>

      <p className={`${styles.text} mb-4`}>
        Вы — новый пользователь?
        <Link to='/register' className={styles.link}> Зарегистрироваться</Link>
      </p>

      <p className={`${styles.text}`}>
        Забыли пароль?
        <Link to='/forgot-password' className={styles.link}> Восстановить пароль</Link>
      </p>
    </AuthWrapper>
  );
};

export default LoginPage;