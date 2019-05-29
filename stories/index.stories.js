import React from 'react';
import Draftable from '../src';
import { storiesOf } from '@storybook/react';
import BoldIcon from '../src/icons/TextBold';

storiesOf('Draftable', module)
  .add('with default config', () => <Draftable />)
  .add('with custom styles', () => {
    const toolbarConfig = {
      groups: [
        {
          key: 'custom',
          customStyles: {
            marginLeft: 'auto'
          }
        }
      ],
      custom: [
        {
          label: 'Custom',
          Icon: BoldIcon,
          type: 'custom',
          action: () => alert('test'),
        },
      ]
    };
    return (
      <Draftable toolbarConfig={toolbarConfig} />
    );
  });
