/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
};

const rightArrow = {
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    left: '-5px',
    bottom: '50%',
    transform: 'rotateZ(90deg)',
    marginLeft: '-2px',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid red 5px',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    minWidth: '200px',
    maxWidth: '420px',
    background: '#000',
    top: '50%',
    left: '130%',
    marginBottom: '10px',
    padding: '5px',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
    textAlign: 'center',
    WebkitBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    MozBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    boxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
  },
};

const leftArrow = {
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    right: '-5px',
    bottom: '50%',
    transform: 'rotateZ(270deg)',
    marginRight: '-2px',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid red 5px',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    minWidth: '200px',
    maxWidth: '420px',
    background: '#000',
    top: '50%',
    right: '60%',
    marginBottom: '10px',
    padding: '5px',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
    textAlign: 'center',
    WebkitBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    MozBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    boxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
  },
};

const bottomArrow = {
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    left: '50%',
    top: '-5px',
    transform: 'rotateZ(180deg)',
    marginLeft: '-2px',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid red 5px',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    minWidth: '200px',
    maxWidth: '420px',
    background: '#000',
    top: '100%',
    left: '50%',
    marginBottom: '10px',
    padding: '5px',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
    textAlign: 'center',
    WebkitBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    MozBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    boxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
  },
};

const topArrow = {
  arrow: {
    position: 'absolute',
    width: '0',
    height: '0',
    left: '50%',
    bottom: '-5px',
    marginLeft: '-5px',
    borderLeft: 'solid transparent 5px',
    borderRight: 'solid transparent 5px',
    borderTop: 'solid red 5px',
  },
  tooltip: {
    position: 'absolute',
    zIndex: '99',
    minWidth: '150px',
    maxWidth: '420px',
    background: '#000',
    bottom: '100%',
    left: '50%',
    marginBottom: '10px',
    padding: '5px',
    WebkitTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    OTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    borderRadius: '4px',
    textAlign: 'center',
    WebkitBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    MozBoxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
    boxShadow: '2px 2px 13px 1px rgba(99,106,107,1)',
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
    Object.keys(newStyles).forEach((name) => {
      Object.assign(newStyles[name], userStyles[name]);
    });
    return newStyles;
  }

  chooseDirection = (styles, position) => {
    switch (position) {
      case 'top':
        Object.assign(styles, topArrow);
        break;
      case 'bottom':
        Object.assign(styles, bottomArrow);
        break;
      case 'left':
        Object.assign(styles, leftArrow);
        break;
      case 'right':
        Object.assign(styles, rightArrow);
        break;
      default:
        break;
    }

    return styles;
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
          <div style={styles.tooltip}>
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

