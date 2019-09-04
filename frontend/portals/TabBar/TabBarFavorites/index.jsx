import React from 'react';
import PropTypes from 'prop-types';
import FavoritesIcon from '../../../components/CustomIcons/FavoritesIcon';
import getConfig from '../../../helpers/getConfig';
import styles from '../style';

const { FavoritesSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomIcon = (props) => {
  if (!FavoritesSvg) {
    return props.children;
  }

  return (
    <FavoritesIcon className={styles} />
  );
};

CustomIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomIcon.defaultProps = {

};

export default CustomIcon;
