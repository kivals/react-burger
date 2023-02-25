import style from './loader.module.css';
import { LoaderSvg } from './loader.svg';
import {TLoaderSizeName, TLoaderSizesLib} from "../../../utils/types";
import {FC} from "react";

const loaderSizes: TLoaderSizesLib = {
  small: 16,
  medium: 24,
  large: 60
};

interface ILoaderProps {
  size: TLoaderSizeName,
  inverse?: boolean
}

const Loader: FC<ILoaderProps> = ({ size, inverse = false }) => {
  const loaderColor = inverse ? '#fff' : '#3C39EC';

  const wrapperStyleKey = 'wrapper_' + size;
  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};

export default Loader;