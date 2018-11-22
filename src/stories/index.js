import React from 'react';
import { doc } from 'storybook-readme';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import SensorsReadme from '../../README.md';

import Card from '@material-ui/core/Card';
import Intro from './intro/intro';
import Theme from './ui.all/theme';
import TypograpySensors from './ui.all/TypographySensors';

storiesOf('sensors.AFRICA', module)
  .addDecorator(muiTheme())
  .add('Introduction', () => <Intro />)
  .add('ReadMe', doc(SensorsReadme));

storiesOf('UI.all', module)
  .addDecorator(muiTheme())
  .add('Theme', () => <Theme />)
  .add('Typography', () => <TypograpySensors />);

storiesOf('Components', module)
  .addDecorator(muiTheme())
  .add('Buttons', () => <Card />)
  .add('Cards', () => <Card />)
  .add('Navbar', () => <Card />)
  .add('Menubar', () => <Card />)
  .add('Header Jumbotron', () => <Card />)
  .add('Hambuger Section', () => <Card />)
  .add('Button', () => <Card />)
  .add('Graphs', () => <Card />)
  .add('Footer', () => <Card />);

storiesOf('API', module)
  .addDecorator(muiTheme())
  .add('API introduction', () => <Card />);
