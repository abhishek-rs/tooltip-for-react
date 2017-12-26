/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import deepmerge from 'deepmerge';
import css from './index.scss';

const defaultStyles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'help',
  },
  content: {
    background: '#000',
    color: '#fff',
    display: 'inline',
    fontSize: '15px',
    padding: '4px',
  },
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    minWidth: '100px',
    maxWidth: '420px',
    background: '#000',
    padding: '8px',
    borderRadius: '4px',
    textAlign: 'center',
    WebkitBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    MozBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    boxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
  },
};

const rightArrow = {
  arrow: {
    left: '-5px',
    bottom: '50%',
    transform: 'rotateZ(90deg)',
    marginLeft: '-2px',
  },
  tooltip: {
    top: '40%',
    left: '100%',
  },
};

const leftArrow = {
  arrow: {
    right: '-5px',
    bottom: '50%',
    transform: 'rotateZ(270deg)',
    marginRight: '-2px',
  },
  tooltip: {
    top: '40%',
    right: '100%',
  },
};

const bottomArrow = {
  arrow: {
    left: '50%',
    top: '-5px',
    transform: 'rotateZ(180deg)',
    marginLeft: '-2px',
  },
  tooltip: {
    top: '100%',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
  },
};

const topArrow = {
  arrow: {
    left: '50%',
    bottom: '-5px',
    marginLeft: '-5px',
  },
  tooltip: {
    bottom: '100%',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
  },
};

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.styles = Object.assign({}, props.styles);
    if (!_.isEqual(this.styles, defaultStyles)) {
      this.styles = this.mergeStyles(this.styles, props.styles, props.position);
    } else {
      this.styles = this.chooseDirection(this.styles, props.position);
    }
  }

  setVisibility = (visible) => {
    this.setState(Object.assign({}, this.state, {
      visible,
    }));
  }

  setParentRef = (node) => {
    this.parentRef = node;
  }

  show = () => this.setVisibility(true);

  hide = () => this.setVisibility(false);

  mergeStyles = (oldStyles, userStyles, position) => {
    let newStyles = Object.assign({}, defaultStyles);
    newStyles = this.chooseDirection(newStyles, position);
    newStyles = deepmerge(newStyles, userStyles);
    const arrowColor = newStyles.tooltip.background;
    const arrowBorderTop = {
      arrow: {
        borderTop: `solid ${arrowColor} 5px`,
      },
    };
    newStyles = deepmerge(newStyles, arrowBorderTop);
    return newStyles;
  }

  chooseDirection = (styles, position) => {
    let res = styles;
    switch (position) {
      case 'top':
        res = deepmerge(styles, topArrow);
        break;
      case 'bottom':
        res = deepmerge(styles, bottomArrow);
        break;
      case 'left':
        res = deepmerge(styles, leftArrow);
        break;
      case 'right':
        res = deepmerge(styles, rightArrow);
        break;
      default:
        break;
    }
    return res;
  }

  handleTouch = () => {
    this.show();
    this.assignTouchHandler();
  }

  assignTouchHandler = () => {
    const handler = (e) => {
      let currentNode = e.target;
      const componentNode = this.parentRef;
      while (currentNode.parentNode) {
        if (currentNode === componentNode) return;
        currentNode = currentNode.parentNode;
      }
      if (currentNode !== document) return;
      this.hide();
      document.removeEventListener('touchstart', handler);
    };
    document.addEventListener('touchstart', handler);
  }

  render() {
    const {
      props, state, styles, show, hide, handleTouch,
    } = this;
    const {
      content, children,
    } = props;

    return (
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
        onTouchStart={handleTouch}
        style={styles.wrapper}
        ref={this.setParentRef}
      >
        {children}
        {
          state.visible &&
          <div style={styles.tooltip} className={css.tooltip}>
            <div style={styles.content}>{content}</div>
            <div style={styles.arrow} />
          </div>
        }
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  styles: PropTypes.object,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  styles: defaultStyles,
  position: 'right',
};

