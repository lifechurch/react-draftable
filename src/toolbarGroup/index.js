// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import ToolbarButton, { type ToolbarButtonType } from '../toolbarButton';

export type ToolbarGroupType = {
  key: string,
  customStyles?: InlineStyle
};

type ToolbarGroupProps = {
  items: Array<ToolbarButtonType>,
  onChange: (ToolbarButtonType) => void,
  editorState: EditorState,
  customStyles: ?InlineStyle,
};

export default ({
  items, onChange, editorState, customStyles,
}:ToolbarGroupProps) => {
  const handleToggle = item => onChange(item);
  const inlineStyles = editorState.getCurrentInlineStyle();

  return (
    <div data-testid='toolbarGroup' className='ToolbarGroup-root' style={customStyles}>
      {
        items.map((item) => {
          const active = item.type === 'style' && inlineStyles.has(item.style);
          return (<ToolbarButton key={item.label} item={item} active={active} onChange={handleToggle} />);
        })
      }
    </div>
  );
};
