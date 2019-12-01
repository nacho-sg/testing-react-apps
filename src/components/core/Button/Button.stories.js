import React from 'react';
import * as storybook from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

storybook
  .storiesOf('Button')
  .addDecorator(withKnobs)
  .add('withText', () => {
    return (
      <Button>{text('children', 'With text')}</Button>
    );
  })
