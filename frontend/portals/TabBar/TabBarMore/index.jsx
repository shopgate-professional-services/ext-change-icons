import React from 'react';
import PropTypes from 'prop-types';
import MoreIcon from '../../../components/CustomIcons/MoreIcon';
import getConfig from '../../../helpers/getConfig';
import styles from '../style';

const { MoreSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const CustomIcon = (props) => {
  if (!MoreSvg) {
    return props.children;
  }

  return (
    <MoreIcon className={styles} />
  );
};

CustomIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomIcon.defaultProps = {

};

export default CustomIcon;
