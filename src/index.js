/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import css from './index.scss';
import Tooltip from './Tooltip';

const redTooltip = {
  tooltip: {
    background: 'green',
  },
  content: {
    background: 'green',
  },
};

storiesOf('Tooltip', module)
  .add('Tooltip over picture', () => (
    <div className={css.container}>
      <Tooltip position="bottom" styles={redTooltip} content="wubba lubba dub dub!"><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="top" styles={redTooltip} content="wubba lubba dub dub!"><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="left" styles={redTooltip} content="wubba lubba dub dub!"><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="right" styles={redTooltip} content="wubba lubba dub dub!"><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="right" styles={redTooltip} content={<img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" />}><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="bottom" styles={redTooltip} content={<div>hellowwowowowo</div>}>Killaa!</Tooltip>
    </div>
  ));
