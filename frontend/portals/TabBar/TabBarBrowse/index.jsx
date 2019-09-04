import React from 'react';
import PropTypes from 'prop-types';
import BrowseIcon from '../../../components/CustomIcons/BrowseIcon';
import getConfig from '../../../helpers/getConfig';
import styles from '../style';

const { BrowseSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomIcon = (props) => {
  if (!BrowseSvg) {
    return props.children;
  }

  return (
    <BrowseIcon className={styles} />
  );
};

CustomIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomIcon.defaultProps = {

};

export default CustomIcon;
