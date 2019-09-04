import React from 'react';
import getConfig from '../../helpers/getConfig';

const { BrowseSvg } = getConfig();

/**
 * The home icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const BrowseIcon = props => (<div {...props} dangerouslySetInnerHTML={{ __html: BrowseSvg }} />);

export default BrowseIcon;
