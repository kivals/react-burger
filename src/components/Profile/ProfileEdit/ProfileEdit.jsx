import React from 'react';
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileEdit = () => {
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
    <div>
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
    </div>
  );
};

export default ProfileEdit;