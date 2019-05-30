// @flow
import React, { type ComponentType } from 'react';

export type StyleButtonType = {
  label: string,
  style: string,
  Icon: ComponentType<any>,
  type: 'style',
  toggle: 'inline' | 'block' | 'indent',
};

export type CustomButtonType = {
  label: string,
  Icon: ComponentType<any>,
  type: 'custom',
  action: Function,
};

export type ToolbarButtonType =
  | StyleButtonType
  | CustomButtonType;

type ToolbarButtonProps = {
  item: ToolbarButtonType,
  active: boolean,
  onChange: (ToolbarButtonType) => void,
};

export default ({ item, active, onChange }:ToolbarButtonProps) => {
  const { Icon } = item;

  const handleToggle = () => {
    if (item.type === 'custom') {
      item.action();
    } else {
      onChange(item);
    }
  };

  const iconColor = active ? '#404041' : '#9F9FA0';

  return (
    <button data-testid={`toolbarButton-${item.type === 'style' ? item.style : 'custom'}`} type='button' className='ToolbarButton-root' onClick={handleToggle}>
      <Icon color={iconColor} />
    </button>
  );
};
