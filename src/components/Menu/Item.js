import React, { useCallback, useContext, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import MenuContext from './MenuContext';

const Item = ({ className, disabled, title, icon, titleOnly, _key, onItemClick }) => {
  const { iconOnly, selectedKeys, onItemClick: contextOnItemClick } = useContext(MenuContext);
  const selected = useMemo(() => selectedKeys.indexOf(_key) >= 0, [selectedKeys, _key]);

  const _onClick = useCallback(() => {
    if (disabled) { return; }
    if (onItemClick) { return onItemClick(); }

    return contextOnItemClick(_key);
  }, [_key, disabled, onItemClick]);

  return (
    <li
      className={cn(
        'rc-menu-item',
        {
          '--selected': selected,
          '--disabled': disabled,
          '--icon-only': iconOnly,
          '--title-only': titleOnly,
        },
        className,
      )}
      onClick={_onClick}
    >
      {icon && <Icon name={icon} className="rc-menu-item-title-icon" />}
      {((iconOnly && titleOnly) || (iconOnly && !icon)) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
      <span className="rc-menu-item-content">{title}</span>
    </li>
  );
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func, // not set default
  disabled: PropTypes.bool,
  titleOnly: PropTypes.bool,
  children: PropTypes.any,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired, // when Item in iconOnly mode, titleOnly will overide icon by first lettter of this value
  _key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _groupKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _subKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Item.defaultProps = {};

export default Item;
