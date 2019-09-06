import React from 'react';
import getConfig from '../../helpers/getConfig';

const { MoreSvg } = getConfig();

/**
 * The more icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const MoreIcon = props => (<div {...props} dangerouslySetInnerHTML={{ __html: MoreSvg }} />);

export default MoreIcon;
