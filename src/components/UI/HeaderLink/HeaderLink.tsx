import React, {FC} from 'react';
import AppIcon from "../AppIcon/AppIcon";
import styles from './HeaderLink.module.css';
import {NavLink} from "react-router-dom";
import {TIconNames, TIconTypes} from "../../../utils/types";

interface IHeaderLinkProps {
    icon: TIconNames,
    type: TIconTypes,
    children: React.ReactNode,
    path: string
}

const HeaderLink: FC<IHeaderLinkProps> = ({
      icon,
      type = 'secondary',
      children,
      path }
) => {
    const textStyles = `${styles.text} ${type==='secondary' ? styles.nonActive : ''}`;

    return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
            <AppIcon icon={icon} type={type} />
            <span className={textStyles}>{children}</span>
        </NavLink>
    );
};

export default HeaderLink;