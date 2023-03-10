import React, {FC, useEffect, useRef, useState} from 'react';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../../services/actions/auth";
import Loader from "../../UI/AppLoader/Loader";

const ProfileEdit: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const [isEditNameInput, setIsEditNameInput] = useState<boolean>(false);
  const [isEditEmailInput, setIsEditEmailInput] = useState<boolean>(false);
  const [isEditPassInput, setIsEditPassInput] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const { user, isLoading, errorMessage, successUpdate } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user, setName, setEmail]);

  useEffect(() => {
    if (isEditNameInput && nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }, [isEditNameInput]);


  const nameClickHandler = () => {
    setIsEditNameInput(true);
    setIsEditEmailInput(false);
    setIsEditPassInput(false);
    if (nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }

  const inputNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsUpdate(true);
  }

  const inputEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsUpdate(true);
  }

  const inputPassChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    // @ts-ignore
    dispatch(updateProfile(name, email, password));
    setIsUpdate(false);
  }

  return isLoading ? (<Loader size="large" /> ) : (
    <>
      {successUpdate && <p className='ml-10 mb-5' style={{color: 'green'}}>???????????? ?????????????? ??????????????????</p>}
      {errorMessage && <p className='ml-10 mb-5' style={{color: 'red'}}>???????????? ???????????????????? ????????????. ???????????????????? ??????????.</p>}
      <Input
        type={'text'}
        placeholder={'??????'}
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
        disabled={!isEditEmailInput}
      />

      <PasswordInput
        onChange={inputPassChangeHandler}
        value={password}
        icon={'EditIcon'}
        name={'????????????'}
        extraClass="mb-6"
        disabled={!isEditPassInput}
      />
      {isUpdate && <div>
        <Button htmlType="button" type="secondary" size="small" onClick={cancelHandler}>
          ????????????????
        </Button>
        <Button htmlType="button" type="primary" size="small" extraClass="ml-2" onClick={saveHandler}>
          ??????????????????
        </Button>
      </div>}
    </>
  );
};

export default ProfileEdit;