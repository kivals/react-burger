import React from 'react';
import AppIcon from "../AppIcon/AppIcon";
import styles from './HeaderLink.module.css';
import {iconColorTypes, iconTypes} from "../../../utils/icon-types";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const  HeaderLink = ({icon, type = iconColorTypes.PRIMARY, children, path }) => {
    const textStyles = `${styles.text} ${type===iconColorTypes.SECONDARY ? styles.nonActive : ''}`;

    return (
        <Link to={path} className={styles.link}>
            <AppIcon icon={icon} type={type} />
            <span className={textStyles}>{children}</span>
        </Link>
    );
};

HeaderLink.propTypes = {
  icon: PropTypes.oneOf(Object.values(iconTypes)).isRequired,
  type: PropTypes.oneOf(Object.values(iconColorTypes)),
  children: PropTypes.string,
  path: PropTypes.string.isRequired
}

export default HeaderLink;