import React from 'react';
import PropTypes from 'prop-types';

import { Svg } from './styles';

import sprite from '../../assets/ui-icon-sprites.svg';

const CustomIcon = ({ name, withBorder }) => (
  <Svg withBorder={withBorder}>
    <use xlinkHref={`${sprite}#${name}`}></use>
  </Svg>
);

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  withBorder: PropTypes.bool
};

export default CustomIcon;
