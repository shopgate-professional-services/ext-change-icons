import React from 'react';
import PropTypes from 'prop-types';
import { FAVORITES_PATH } from '@shopgate/pwa-common-commerce/favorites/constants';
import { NavDrawer } from '@shopgate/pwa-ui-material';
import Badge from './components/Badge';
import connect from '../connector';
import FavoritesIcon from '../../../components/CustomIcons/FavoritesIcon';
import getConfig from '../../../helpers/getConfig';

const { FavoritesSvg } = getConfig();

const LABEL = 'navigation.favorites';

/**
 * @param {Function} props.navigate The navigate action.
 * @returns {JSX}
 */
const FavoritesButton = ({ navigate, children }) => {
  if (!FavoritesSvg) {
    return children;
  }
  return (
    <NavDrawer.Item
      badge={Badge}
      label={LABEL}
      icon={FavoritesIcon}
      onClick={navigate(FAVORITES_PATH, LABEL)}
      testId="navDrawerFavoritesButton"
    />
  );
};

FavoritesButton.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default connect(FavoritesButton);
