import React from 'react';
import { storiesOf } from '@storybook/react';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: { main: '#1a995b', light: '#2FB56B', dark: '#164B3E' },
    secondary: { main: '#424143', dark: '#2A2A2B' }
  },
  themeName: 'Sensors.AFRICA Light Theme'
});

storiesOf('Material Custom Theme', module).addDecorator(muiTheme([Theme]));
