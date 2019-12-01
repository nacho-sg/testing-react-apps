import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

export const blockName = 'custom-button';

const Button = ({ children, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, classNames, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleHover = isEntering => event => {
    isEntering ? onMouseEnter(event) : onMouseLeave(event);
    setIsHover(isEntering);
  };
  const handleActive = isClicking => event => {
    isClicking ? onMouseDown(event) : onMouseUp(event);
    setIsActive(isClicking);
  };


  return (
    <button
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}
      onMouseDown={handleActive(true)}
      onMouseUp={handleActive(false)}
      className={cx(blockName, {
        [`${blockName}--active`]: isActive,
        [`${blockName}--hover`]: isHover,
      }, classNames)} {...props}
      data-test-id="custom-component"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => { },
  onMouseEnter: () => { },
  onMouseLeave: () => { },
  onMouseDown: () => { },
  onMouseUp: () => { },
};

export default Button;
