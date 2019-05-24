// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Editor, EditorState, RichUtils, Modifier,
} from 'draft-js';
import type { DraftEditorCommand } from 'draft-js/lib/DraftEditorCommand';
import Toolbar, { defaultToolbarConfig, type ToolbarConfigType } from './toolbar';
import 'draft-js/dist/Draft.css';
import type { ToolbarButtonType } from './toolbarButton';
import DraftableState from './lib/DraftableState';

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
  const handleKeyCommand = (command:DraftEditorCommand, keyCommandState:EditorState) => {
    const newState = RichUtils.handleKeyCommand(keyCommandState, command);
    if (newState) {
      handleChange(newState);
      return 'handled';
    }
    return 'unhandled';
  };

  const handleTab = (event) => {
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

  const handleToolbarButton = (item:ToolbarButtonType) => {
    switch (item.toggle) {
      case "inline":
        setEditorState(RichUtils.toggleInlineStyle(editorState, item.style));
        return;
      case "block":
        setEditorState(RichUtils.toggleBlockType(editorState, item.style));
        return;
    }
  };

  return (
    <>
      <Toolbar editorState={editorState} toolbarConfig={toolbarConfig} onChange={handleToolbarButton} />
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={handleChange}
        onTab={handleTab}
      />
    </>
  );
};

ReactDOM.render(<Draftable onChange={state => console.log(DraftableState.toString(state.getCurrentContent(), 'markdown'))} />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
