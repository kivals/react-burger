import AuthWrapper from "../AuthWrapper";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPassword.module.css";
import {Link, Navigate} from "react-router-dom";
import {saveResetPassword} from "../../../services/actions/auth";
import React, {FC} from "react";
import {useDispatch, useSelector} from "../../../services/hooks";

const ResetPassword: FC = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const { errorMessage, successRestorePassword, isResetPasswordPage } = useSelector((state) => state.auth);

  const saveHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
      dispatch(saveResetPassword({code, password}));
  }

  return isResetPasswordPage ? (
    <AuthWrapper title="Восстановление пароля" onSubmitHandler={saveHandler}>
      {successRestorePassword && <Navigate to="/login" replace />}
      {errorMessage && <p className='ml-10 mb-5' style={{color: 'red'}}>Ошибка обновления данных. Попробуйте позже.</p>}
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={'password'}
        extraClass="mb-6"
        placeholder={'Введите новый пароль'}
      />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={(e) => setCode(e.target.value)}
        value={code}
        name={'name'}
        size={'default'}
        extraClass="mb-6"
      />
      
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        extraClass='mb-20'
      >
        Сохранить
      </Button>

      <p className={`${styles.text} mb-4`}>
        Вспомнили пароль?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </AuthWrapper>
  ) : (
    <Navigate to="/forgot-password" replace/>
  )
};

export default ResetPassword;