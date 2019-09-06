import React from 'react';
import getConfig from '../../helpers/getConfig';

const { CategoriesSvg } = getConfig();

/**
 * The categories icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CategoriesIcon = props =>
  (
    <div {...props} dangerouslySetInnerHTML={{ __html: CategoriesSvg }} />
  );

export default CategoriesIcon;
