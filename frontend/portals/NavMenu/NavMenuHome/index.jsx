import React from 'react';
import PropTypes from 'prop-types';
import { INDEX_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import { NavDrawer } from '@shopgate/pwa-ui-material';
import connect from '../connector';
import HomeIcon from '../../../components/CustomIcons/HomeIcon';
import getConfig from '../../../helpers/getConfig';

const { HomeSvg } = getConfig();

const LABEL = 'navigation.home';

/**
 * The HomeButton component.
 * @param {Object} props Component props
 * @param {Function} props.navigate The navigate action.
 * @param {Node} props.children The children object.
 * @returns {JSX|Node}
 */
const HomeButton = ({ navigate, children }) => {
  if (!HomeSvg) {
    return children;
  }
  return (
    <NavDrawer.Item
      label={LABEL}
      icon={HomeIcon}
      onClick={navigate(INDEX_PATH, LABEL)}
      testId="navDrawerHomeButton"
    />
  );
};

HomeButton.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default connect(HomeButton);
