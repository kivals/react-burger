import React, {FC, useEffect} from 'react';
import styles from "./Register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import AuthWrapper from "../AuthWrapper";
import {checkUserAuth, register} from "../../../services/actions/auth";
import {useDispatch, useSelector} from "../../../services/hooks";

const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { isAuth, errorMessage } = useSelector((state) => state.auth);

  useEffect(() => {
      dispatch(checkUserAuth());
  }, [dispatch]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      dispatch(register({name, email, password}));
  }

  if (isAuth) {
    navigate('/', {replace: true});
    return null;
  }

  return (
    <AuthWrapper title="Регистрация" error={errorMessage} onSubmitHandler={onSubmitHandler}>
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

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        extraClass='mb-20'
      >
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