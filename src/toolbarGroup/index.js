// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import ToolbarButton, { type ToolbarButtonType } from '../toolbarButton';

type ToolbarGroupProps = {
  name: string,
  items: Array<ToolbarButtonType>,
  onChange: (ToolbarButtonType) => void,
  editorState: EditorState,
};

export default ({
  name, items, onChange, editorState,
}:ToolbarGroupProps) => {
  const handleToggle = item => onChange(item);
  const inlineStyles = editorState.getCurrentInlineStyle();

  return (
    <div data-testid='toolbarGroup' className={`toolbarGroup toolbarGroup-${name}`}>
      {
        items.map((item) => {
          const active = item.type === 'style' && inlineStyles.has(item.style);
          return (<ToolbarButton key={item.label} item={item} active={active} onChange={handleToggle} />);
        })
      }
    </div>
  );
};
