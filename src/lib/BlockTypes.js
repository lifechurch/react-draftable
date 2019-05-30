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
  {
    label: 'B', style: 'BOLD', Icon: BoldIcon, toggle: 'inline', type: 'style',
  },
  {
    label: 'I', style: 'ITALIC', Icon: ItalicIcon, toggle: 'inline', type: 'style',
  },
  {
    label: 'U', style: 'UNDERLINE', Icon: UnderlineIcon, toggle: 'inline', type: 'style',
  },
];

export const BLOCK_TYPES_LISTS:Array<ToolbarButtonType> = [
  {
    label: 'UL', style: 'unordered-list-item', Icon: BulletedList, toggle: 'block', type: 'style',
  },
  {
    label: 'OL', style: 'ordered-list-item', Icon: NumberedList, toggle: 'block', type: 'style',
  },
];

export const BLOCK_TYPES_INDENT:Array<ToolbarButtonType> = [
  {
    label: '->', style: 'indent', Icon: Indent, toggle: 'indent', type: 'style',
  },
  {
    label: '<-', style: 'outdent', Icon: Outdent, toggle: 'indent', type: 'style',
  },
];
