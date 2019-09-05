import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORY_PATH } from '@shopgate/pwa-common-commerce/category/constants';
import { NavDrawer } from '@shopgate/pwa-ui-material';
import connect from '../connector';
import CategoriesIcon from '../../../components/CustomIcons/CategoriesIcon';
import getConfig from '../../../helpers/getConfig';

const { CategoriesSvg } = getConfig();

const LABEL = 'navigation.categories';

/**
 * The CategoryButton component.
 * @param {Function} props.navigate The navigate action.
 * @param {Object} props.children The children object.
 * @returns {JSX}
 */
const CategoryButton = ({ navigate, children }) => {
  if (!CategoriesSvg) {
    return children;
  }
  return (
    <NavDrawer.Item
      label={LABEL}
      icon={CategoriesIcon}
      onClick={navigate(CATEGORY_PATH, LABEL)}
      testId="navDrawerCategoriesButton"
    />
  );
};

CategoryButton.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default connect(CategoryButton);
