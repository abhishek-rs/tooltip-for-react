/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import css from './Tooltip.scss';
import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('Tooltip over picture', () => (
    <Tooltip><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
  ));
