// @flow
import React  from 'react';
import { Draftable } from '../src';
import BoldIcon from '../src/icons/TextBold';
import sinon from 'sinon';
import { render, fireEvent } from 'react-testing-library';
import { BLOCK_TYPES_INDENT, BLOCK_TYPES_INLINE, BLOCK_TYPES_LISTS } from '../src/lib/BlockTypes';


describe('Draftable', () => {
  test('Renders the editor', () => {
    const { container } = render(
      <Draftable />
    );
    expect(container.lastChild.className).toEqual('DraftEditor-root')
  });

  test('Renders the toolbar', () => {
    const { getByTestId } = render(
      <Draftable />
    );
    expect(getByTestId('toolbar')).toBeTruthy();
  });

  test('Renders with provided config', () => {
    const { queryAllByTestId } = render(
      <Draftable toolbarConfig={{
        groups: [{ key: 'inline' }, { key: 'lists' }],
        inline: BLOCK_TYPES_INLINE,
        lists: BLOCK_TYPES_LISTS,
      }} />
    );
    expect(queryAllByTestId('toolbarGroup').length).toEqual(2);
  });

  test('Calls custom actions', () => {
    const action = sinon.spy();
    const { getByTestId } = render(
      <Draftable toolbarConfig={{
        groups: [{ key: 'custom' }],
        custom: [
          {
            label: 'Custom',
            Icon: BoldIcon,
            type: 'custom',
            action,
          },
        ]
      }} />
    );

    fireEvent.click(getByTestId('toolbarButton-custom'));

    expect(action.calledOnce).toBeTruthy();
  });

  test('Calls style actions', () => {
    const { getByTestId } = render(
      <Draftable toolbarConfig={{
        groups: [{ key:'inline' }],
        inline: BLOCK_TYPES_INLINE,
      }} />
    );
    fireEvent.click(getByTestId('toolbarButton-BOLD'));
    // TODO: Figure out how to validate that this updates the editor content
  });

  test('Calls indent actions', () => {
    const { getByTestId } = render(
      <Draftable toolbarConfig={{
        groups: [{ key:'indent' }],
        indent: BLOCK_TYPES_INDENT,
      }} />
    );
    fireEvent.click(getByTestId('toolbarButton-indent'));
    // TODO: Figure out how to validate that this updates the editor content
  });

  test('Calls list actions', () => {
    const { getByTestId } = render(
      <Draftable toolbarConfig={{
        groups: [{ key:'lists' }],
        lists: BLOCK_TYPES_LISTS,
      }} />
    );
    fireEvent.click(getByTestId('toolbarButton-unordered-list-item'));
    // TODO: Figure out how to validate that this updates the editor content
  });

});
