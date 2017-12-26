import React from 'react';
import PropTypes from 'prop-types';
import css from './index.scss';

const CompoundTooltipContent = ({ image, text }) => (
  <div>
    <img className={css.compoundImage} src={image} alt={text} />
    <p>{text}</p>
  </div>
);

CompoundTooltipContent.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CompoundTooltipContent;
