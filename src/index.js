/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import FaBeer from 'react-icons/lib/fa/beer';
import FaApple from 'react-icons/lib/fa/apple';
import css from './index.scss';
import Tooltip from './Tooltip';
import CompoundTooltipContent from './CompoundTooltipContent';

const redTooltip = {
  tooltip: {
    background: '#E53935',
  },
  content: {
    background: '#E53935',
  },
};

const tealTooltip = {
  tooltip: {
    background: '#00695C',
  },
  content: {
    background: '#00695C',
  },
};

const indigoTooltip = {
  tooltip: {
    background: '#1A237E',
  },
  content: {
    background: '#1A237E',
  },
};

storiesOf('Tooltip', module)
  .add('Basic text tooltips', () => (
    <div className={css.container}>
      <Tooltip position="bottom" styles={redTooltip} content="I'm a red tooltip below the content."><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="top" styles={redTooltip} content="I'm a red tooltip on top of the content."><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="left" styles={tealTooltip} content="I'm a teal tooltip to the left of content."><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
      <Tooltip position="right" styles={tealTooltip} content="I'm a teal tooltip to the right of content."><img className={css.image} src="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" alt="rick and morty" /></Tooltip>
    </div>
  ))
  .add('Icon tooltips', () => (
    <div className={css.container}>
      <Tooltip position="right" styles={indigoTooltip} content={<FaBeer />}><div className={css.textBox}>Tooltip on a div with a beer icon in it.</div></Tooltip>
      <Tooltip position="left" styles={indigoTooltip} content={<FaApple />}><div className={css.textBox}>Tooltip on a div with an apple icon in it.</div></Tooltip>
    </div>
  ))
  .add('React component tooltips', () => (
    <div className={css.container}>
      <Tooltip position="bottom" styles={indigoTooltip} content={<CompoundTooltipContent image="https://chelseabuzz.com/wp-content/uploads/2017/09/rickandmorty.jpg" text="Wubba lubba dub dub!" />}><div className={css.textBox}>Tooltip on text with a react component within.</div></Tooltip>
    </div>
  ));
