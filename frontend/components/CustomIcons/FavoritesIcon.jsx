import React from 'react';
import getConfig from '../../helpers/getConfig';

const { FavoritesSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const FavoritesIcon = props =>
  (
    <div {...props} dangerouslySetInnerHTML={{ __html: FavoritesSvg }} />
  );

export default FavoritesIcon;
