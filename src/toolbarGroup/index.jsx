// @flow
import React from 'react';
import './styles.css';
import { EditorState } from 'draft-js';
import ToolbarButton, { type ToolbarButtonType } from '../toolbarButton';

type ToolbarGroupProps = {
  items: Array<ToolbarButtonType>,
  onChange: (ToolbarButtonType) => void,
  editorState: EditorState,
};

export default ({ items, onChange, editorState }:ToolbarGroupProps) => {
  const handleToggle = item => onChange(item);
  const inlineStyles = editorState.getCurrentInlineStyle();
  return (
    <div className="ToolbarGroup-root">
      {
        items.map(item => <ToolbarButton key={item.label} item={item} active={inlineStyles.has(item.style)} onChange={handleToggle} />)
      }
    </div>
  );
};
