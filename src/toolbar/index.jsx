// @flow
import React from 'react';
import './styles.css';
import { EditorState, RichUtils } from 'draft-js';
import ToolbarGroup from '../toolbarGroup';
import type { ToolbarButtonType } from '../toolbarButton';

import { BLOCK_TYPES_LISTS, BLOCK_TYPES_INLINE, BLOCK_TYPES_INDENT } from '../lib/BlockTypes';

type ToolbarProps = {
  editorState: EditorState,
  toolbarConfig: ToolbarConfigType,
  onChange: (ToolbarButtonType) => void,
};

export type ToolbarConfigType = {
  groups: Array<string>,
  [string]: Array<ToolbarButtonType>
};

export const defaultToolbarConfig:ToolbarConfigType = {
  groups: ['inline', 'lists', 'indentation'],
  inline: BLOCK_TYPES_INLINE,
  lists: BLOCK_TYPES_LISTS,
  indentation: BLOCK_TYPES_INDENT,
};

export default ({ editorState, toolbarConfig, onChange }:ToolbarProps) => {
  const handleToggle = (item) => onChange(item);
  return (
    <div className="Toolbar-root">
      {
        toolbarConfig.groups.map(group => <ToolbarGroup key={group} items={toolbarConfig[group]} onChange={handleToggle} editorState={editorState} />)
      }
    </div>
  );
}
