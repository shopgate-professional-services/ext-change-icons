import React from 'react';
import getConfig from '../../helpers/getConfig';

const { CartSvg } = getConfig();

/**
 * The cart icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CartIcon = props => (<div {...props} dangerouslySetInnerHTML={{ __html: CartSvg }} />);

export default CartIcon;
