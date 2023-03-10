import React, {FC} from 'react';
import styles from "./AuthWrapper.module.css";

interface IAuthWrapperProps {
  title: string,
  children: React.ReactNode,
  error?: string,
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void
}

const AuthWrapper: FC<IAuthWrapperProps> = ({title, children, error, onSubmitHandler}) => {
  return (
    <form onSubmit={onSubmitHandler} className={styles.authBody}>
      <h1 className='mb-3'>{title}</h1>
      {error && <p className={`${styles.error} mb-3`}>{error}</p>}
      {children}
    </form>
  );
};

export default AuthWrapper;