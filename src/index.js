// @flow
import React, { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding,
} from 'draft-js';
import Toolbar, { defaultToolbarConfig, type ToolbarConfigType } from './toolbar';
import 'draft-js/dist/Draft.css';
import type { ToolbarButtonType } from './toolbarButton';

type DraftableProps = {
  initialState?: EditorState,
  onChange?: (editorState: EditorState) => void,
  toolbarConfig?: ToolbarConfigType,
};

const Draftable = (
  {
    initialState = EditorState.createEmpty(),
    onChange,
    toolbarConfig = defaultToolbarConfig,
  }:DraftableProps,
) => {
  const [editorState, setEditorState] = useState(initialState);

  const handleChange = (stateChange:EditorState) => {
    setEditorState(stateChange);

    if (onChange) {
      // Send the changes to the parent
      onChange(stateChange);
    }
  };

  // Handle keyboard shortcuts (i.e. - Cmd + B, Cmd + z)
  const handleKeyCommand = (command:string, keyCommandState:EditorState) => {
    const newState = RichUtils.handleKeyCommand(keyCommandState, command);
    if (newState) {
      handleChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleTab = (event: SyntheticKeyboardEvent<*>) => {
    event.preventDefault();
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    if (blockType === 'unordered-list-item' || blockType === 'ordered-list-item') {
      setEditorState(RichUtils.onTab(event, editorState, 3));
    } else {
      const newContentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        '    ',
      );
      setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
    }
  };

  const handleKeyBinding = (event: SyntheticKeyboardEvent<*>) => {
    if (event.keyCode === 9) {
      handleTab(event);
    }

    return getDefaultKeyBinding(event);
  };

  const handleToolbarButton = (item:ToolbarButtonType) => {
    if (item.type === 'style') {
      switch (item.toggle) {
        case 'inline':
          setEditorState(RichUtils.toggleInlineStyle(editorState, item.style));
          return;
        case 'block':
          setEditorState(RichUtils.toggleBlockType(editorState, item.style));
          return;
        default:
          return;
      }
    }
  };

  return (
    <>
      <Toolbar editorState={editorState} toolbarConfig={toolbarConfig} onChange={handleToolbarButton} />
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={handleChange}
        keyBindingFn={handleKeyBinding}
      />
    </>
  );
};

export default Draftable;
