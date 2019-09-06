import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../../../components/CustomIcons/CartIcon';
import getConfig from '../../../helpers/getConfig';
import styles from '../style';

const { CartSvg } = getConfig();

/**
 * The TabBarCart icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomIcon = (props) => {
  if (!CartSvg) {
    return props.children;
  }

  return (
    <CartIcon className={styles} />
  );
};

CustomIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomIcon.defaultProps = {

};

export default CustomIcon;
