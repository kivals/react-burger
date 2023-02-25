import React, {FC, useEffect} from 'react';
import styles from './Login.module.css';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";
import AuthWrapper from "../AuthWrapper";
import {useDispatch, useSelector} from "react-redux";
import {checkUserAuth, login} from "../../../services/actions/auth";
import { useNavigate } from 'react-router-dom';
import {IState} from "../../../utils/types";

const LoginPage: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { isAuth, errorMessage } = useSelector((state: IState) => state.auth);
  let from: string = location.state?.from?.pathname;

  useEffect(() => {
    // @ts-ignore
      dispatch(checkUserAuth());
  }, [dispatch]);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password && password.length >= 6) {
      // @ts-ignore
        dispatch(login({email, password}));
    }
  }

  if (isAuth) {
    navigate(from || '/', {replace: true});
    return null;
  }

  return (
    <AuthWrapper title='Вход' error={errorMessage} onSubmitHandler={onSubmitHandler}>
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
        htmlType="submit"
        type="primary"
        size="large"
        extraClass='mb-20'
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