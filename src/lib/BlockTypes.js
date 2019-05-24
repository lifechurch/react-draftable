// @flow
import BoldIcon from '../icons/TextBold';
import ItalicIcon from '../icons/TextItalic';
import UnderlineIcon from '../icons/TextUnderline';
import BulletedList from '../icons/BulletedList';
import NumberedList from '../icons/NumberedList';
import Indent from '../icons/Indent';
import Outdent from '../icons/Outdent';

import type { ToolbarButtonType } from '../toolbarButton';

export const BLOCK_TYPES_INLINE:Array<ToolbarButtonType> = [
  { label: 'B', style: 'BOLD', Icon: BoldIcon, toggle: 'inline' },
  { label: 'I', style: 'ITALIC', Icon: ItalicIcon, toggle: 'inline' },
  { label: 'U', style: 'UNDERLINE', Icon: UnderlineIcon, toggle: 'inline' },
];

export const BLOCK_TYPES_LISTS:Array<ToolbarButtonType> = [
  { label: 'UL', style: 'unordered-list-item', Icon: BulletedList, toggle: 'block'},
  { label: 'OL', style: 'ordered-list-item', Icon: NumberedList, toggle: 'block' },
];

export const BLOCK_TYPE_HEADINGS:Array<ToolbarButtonType> = [
  { label: 'H1', style: 'header-one', toggle: 'block' },
  { label: 'H2', style: 'header-two', toggle: 'block' },
  { label: 'H3', style: 'header-three', toggle: 'block' },
  { label: 'H4', style: 'header-four', toggle: 'block' },
  { label: 'H5', style: 'header-five', toggle: 'block' },
  { label: 'H6', style: 'header-six', toggle: 'block' },
];

export const BLOCK_TYPES_INDENT:Array<ToolbarButtonType> = [
  { label: '->', style: 'indent', Icon: Indent, toggle: 'block' },
  { label: '<-', style: 'outdent', Icon: Outdent, toggle: 'block' },
];
