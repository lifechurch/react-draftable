// @flow
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromMarkdown } from 'draft-js-import-markdown';

export const FORMAT_HTML = 'html';
export const FORMAT_MARKDOWN = 'markdown';

type FormatType = typeof FORMAT_HTML | typeof FORMAT_MARKDOWN;

export default class DraftableState {
  static createFromString(markup: string, format: FormatType):EditorState {
    switch (format) {
      case FORMAT_HTML:
        return EditorState.createWithContent(stateFromHTML(markup));
      case FORMAT_MARKDOWN:
        return EditorState.createWithContent(stateFromMarkdown(markup));
      default:
        throw new Error(`Format not supported: ${format}`);
    }
  }

  static toString(editorState:EditorState, format: FormatType):string {
    switch (format) {
      case FORMAT_HTML:
        return stateToHTML(editorState.getCurrentContent());
      case FORMAT_MARKDOWN:
        return stateToMarkdown(editorState.getCurrentContent());
      default:
        throw new Error(`Format not supported: ${format}`);
    }
  }
}
