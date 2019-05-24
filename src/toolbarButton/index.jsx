// @flow
import React, { type ComponentType } from 'react';
import './styles.css';

export type ToolbarButtonType = {
  label: string,
  style: string,
  Icon: ComponentType,
  toggle: 'inline' | 'block',
};

type ToolbarButtonProps = {
  item: ToolbarButtonType,
  active: boolean,
  onChange: (ToolbarButtonType) => void,
};

export default ({ item, active, onChange }:ToolbarButtonProps) => {
  const handleToggle = () => onChange(item);
  const { Icon } = item;

  return (
    <button type="button" className="ToolbarButton-root" onClick={handleToggle}>
      <Icon active={active} />
    </button>
  );
};
