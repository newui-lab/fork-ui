import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Radio = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <span className={cn('rc-radio', className)}>
      <input
        type="radio"
        className="rc-radio-input"
        ref={ref}
        {...otherProps}
      />
      <span className="rc-radio-inner" />
      <span className="rc-radio-second-inner" />
    </span>
  );
});

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
};
Radio.defaultProps = {};

export default Radio;
