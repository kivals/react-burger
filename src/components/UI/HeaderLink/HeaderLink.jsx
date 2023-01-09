import React from 'react';
import AppIcon from "../AppIcon/AppIcon";
import styles from './HeaderLink.module.css';

const HeaderLink = ({icon, type, children}) => {
    const textStyles = `${styles.text} ${type==='secondary' ? styles.nonActive : ''}`;

    return (
        <a href="/" className={styles.link}>
            <AppIcon icon={icon} type={type} />
            <span className={textStyles}>{children}</span>
        </a>
    );
};

export default HeaderLink;