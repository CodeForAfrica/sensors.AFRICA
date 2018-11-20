import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}

const storyWrapper = story => <div>{story()}</div>;
addDecorator(
  withInfo({
    inline: 'true',
    header: 'true',
    source: 'true',
    maxPropsToLine: '1'
  })
);
addDecorator(
  withOptions({
    name: 'Sensors.Africa',
    url: 'https://sensors.africa/'
  })
);

addDecorator(storyWrapper);
configure(loadStories, module);
