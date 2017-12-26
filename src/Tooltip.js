/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <div className={css.root}>
        {children}
      </div>
    );
  }
}

