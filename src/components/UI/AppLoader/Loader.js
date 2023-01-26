import style from './loader.module.css';
import { LoaderSvg } from './loader.svg';
import PropTypes from "prop-types";

const loaderSizes = {
  small: 16,
  medium: 24,
  large: 60
};
const Loader = ({ size, inverse = false }) => {
  const loaderColor = inverse ? '#fff' : '#3C39EC';

  const wrapperStyleKey = 'wrapper_' + size;
  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  inverse: PropTypes.bool,
}

export default Loader;