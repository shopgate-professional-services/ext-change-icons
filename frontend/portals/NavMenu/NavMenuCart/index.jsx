import React from 'react';
import PropTypes from 'prop-types';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import { NavDrawer } from '@shopgate/pwa-ui-material';
import connect from '../connector';
import Badge from './components/Badge';
import CartIcon from '../../../components/CustomIcons/CartIcon';
import getConfig from '../../../helpers/getConfig';

const { CartSvg } = getConfig();

const LABEL = 'navigation.cart';

/**
 * The CartButton component.
 * @param {Function} props.navigate The navigate action.
 * @param {Object} props.children The children object.
 * @returns {JSX}
 */
const CartButton = ({ navigate, children }) => {
  if (!CartSvg) {
    return children;
  }
  return (
    <NavDrawer.Item
      badge={Badge}
      label={LABEL}
      icon={CartIcon}
      onClick={navigate(CART_PATH, LABEL)}
      testId="navDrawerCartButton"
    />
  );
};

CartButton.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default connect(CartButton);
