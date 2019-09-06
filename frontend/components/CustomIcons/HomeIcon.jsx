import React from 'react';
import getConfig from '../../helpers/getConfig';

const { HomeSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const HomeIcon = props => (<div {...props} dangerouslySetInnerHTML={{ __html: HomeSvg }} />);

export default HomeIcon;
