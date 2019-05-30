// @flow
import React from 'react';
import { EditorState } from 'draft-js';
import ToolbarGroup, { type ToolbarGroupType } from '../toolbarGroup';
import type { ToolbarButtonType } from '../toolbarButton';
import { BLOCK_TYPES_LISTS, BLOCK_TYPES_INLINE, BLOCK_TYPES_INDENT } from '../lib/BlockTypes';

export type ToolbarConfigType = {
  groups: Array<ToolbarGroupType>,
  [string]: Array<ToolbarButtonType>
};

type ToolbarProps = {
  editorState: EditorState,
  toolbarConfig: ToolbarConfigType,
  onChange: (ToolbarButtonType) => void,
};

export const defaultToolbarConfig:ToolbarConfigType = {
  groups: [
    { key: 'inline' },
    { key: 'lists' },
    { key: 'indentation' },
  ],
  inline: BLOCK_TYPES_INLINE,
  lists: BLOCK_TYPES_LISTS,
  indentation: BLOCK_TYPES_INDENT,
};

export default ({ editorState, toolbarConfig, onChange }:ToolbarProps) => {
  const handleToggle = item => onChange(item);
  return (
    <div data-testid='toolbar' className='Toolbar-root'>
      {
        toolbarConfig.groups.map(group => (
          <ToolbarGroup
            key={group.key}
            items={toolbarConfig[group.key]}
            onChange={handleToggle}
            customStyles={group.customStyles}
            editorState={editorState}
          />
        ))
      }
    </div>
  );
};
