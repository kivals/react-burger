import React, {useEffect, useRef, useState} from 'react';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../../services/actions/auth";
import Loader from "../../UI/AppLoader/Loader";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  const [isEditNameInput, setIsEditNameInput] = useState(false);
  const [isEditEmailInput, setIsEditEmailInput] = useState(false);
  const [isEditPassInput, setIsEditPassInput] = useState(false);

  const nameRef = useRef();

  const { user, isLoading, errorMessage, successUpdate } = useSelector(state => state.auth);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user, setName, setEmail]);

  useEffect(() => {
    if (isEditNameInput === true) {
      nameRef.current.focus();
    }
  }, [isEditNameInput]);


  const nameClickHandler = () => {
    setIsEditNameInput(true);
    setIsEditEmailInput(false);
    setIsEditPassInput(false);
    nameRef.current.focus();
  }

  const emailClickHandler = () => {
    setIsEditNameInput(false);
    setIsEditEmailInput(true);
    setIsEditPassInput(false);
  }

  const passClickHandler = () => {
    setIsEditNameInput(false);
    setIsEditEmailInput(false);
    setIsEditPassInput(true);
  }

  const inputNameChangeHandler = (e) => {
    setName(e.target.value);
    setIsUpdate(true);
  }

  const inputEmailChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsUpdate(true);
  }

  const inputPassChangeHandler = (e) => {
    setPassword(e.target.value);
    setIsUpdate(true);
  }

  const cancelHandler = () => {
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setIsUpdate(false);
  }

  const saveHandler = () => {
    dispatch(updateProfile(name, email, password));
    setIsUpdate(false);
  }

  return isLoading ? (<Loader size="large" /> ) : (
    <>
      {successUpdate && <p className='ml-10 mb-5' style={{color: 'green'}}>Данные успешно обновлены</p>}
      {errorMessage && <p className='ml-10 mb-5' style={{color: 'red'}}>Ошибка обновления данных. Попробуйте позже.</p>}
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={inputNameChangeHandler}
        onBlur={() => {setIsEditNameInput(false)}}
        value={name}
        name={'name'}
        size={'default'}
        extraClass="mb-6"
        icon={'EditIcon'}
        onIconClick={nameClickHandler}
        ref={nameRef}
        disabled={!isEditNameInput}
      />

      <EmailInput
        onChange={inputEmailChangeHandler}
        value={email}
        name={'email'}
        isIcon={true}
        extraClass='mb-6'
        onIconClick={emailClickHandler}
        disabled={!isEditEmailInput}
      />

      <PasswordInput
        onChange={inputPassChangeHandler}
        value={password}
        icon={'EditIcon'}
        onIconClick={passClickHandler}
        name={'Пароль'}
        extraClass="mb-6"
        disabled={!isEditPassInput}
      />
      {isUpdate && <div>
        <Button htmlType="button" type="secondary" size="small" onClick={cancelHandler}>
          Отменить
        </Button>
        <Button htmlType="button" type="primary" size="small" extraClass="ml-2" onClick={saveHandler}>
          Сохранить
        </Button>
      </div>}
    </>
  );
};

export default ProfileEdit;