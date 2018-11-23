import React from 'react';
import { configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}
withInfo({
  inline: 'true',
  header: 'true',
  source: 'true',
  maxPropsToLine: '1'
});
withOptions({
  name: 'Sensors.Africa',
  url: 'https://sensors.africa/'
});

configure(loadStories, module);
