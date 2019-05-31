import React from 'react';
import { storiesOf } from '@storybook/react';
import { Draftable, DraftableState } from '../src';

storiesOf('Draftable', module)
  .add('with default config', () => <Draftable />)
  .add('with initial state', () => {
    const initialState = DraftableState.createFromString('<p>Test <b>bolded</b></p>', 'html');
    return (
      <Draftable initialState={initialState} />
    );
  });
