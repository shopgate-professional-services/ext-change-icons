import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '../../../components/CustomIcons/HomeIcon';
import getConfig from '../../../helpers/getConfig';
import styles from '../style';

const { HomeSvg } = getConfig();

/**
 * The TabBarHome icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomIcon = (props) => {
  if (!HomeSvg) {
    return props.children;
  }

  return (
    <HomeIcon className={styles} />
  );
};

CustomIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomIcon.defaultProps = {

};

export default CustomIcon;
