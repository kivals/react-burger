import React from 'react';
import AppIcon from "../AppIcon/AppIcon";
import styles from './HeaderLink.module.css';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import PropTypes from "prop-types";

const HeaderLink = ({icon, type = iconColorTypes.PRIMARY, children}) => {
    const textStyles = `${styles.text} ${type===iconColorTypes.SECONDARY ? styles.nonActive : ''}`;

    return (
        <a href="/" className={styles.link}>
            <AppIcon icon={icon} type={type} />
            <span className={textStyles}>{children}</span>
        </a>
    );
};

HeaderLink.propTypes = {
  icon: PropTypes.oneOf(Object.values(iconTypes)).isRequired
}

export default HeaderLink;