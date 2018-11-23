import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

//Example material ui
import Card from '@material-ui/core/Card';

const Theme = {
  themeName: 'Sensors.Africa theme',
  palette: {
    primary1Color: '#00bcd4',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b'
  }
};

storiesOf('sensors.AFRICA', module)
  .addDecorator(muiTheme([Theme]))
  .add('Introduction', () => <Card />)
  .add('ReadMe', () => <Card />);

storiesOf('UI.all', module)
  .addDecorator(muiTheme([Theme]))
  .add('Theme', () => <Card />)
  .add('Typography', () => <Card />);

storiesOf('Components', module)
  .addDecorator(muiTheme([Theme]))
  .add('Buttons', () => <Card />)
  .add('Cards', () => <Card />)
  .add('Navbar', () => <Card />)
  .add('Menubar', () => <Card />)
  .add('Jumbotron', () => <Card />)
  .add('Hambuger Section', () => <Card />)
  .add('Button', () => <Card />)
  .add('Graphs', () => <Card />)
  .add('Footer', () => <Card />);

storiesOf('API', module)
  .addDecorator(muiTheme([Theme]))
  .add('API introduction', () => <Card />);

//Define MATERIAL  theme

/*const THEME = createMuiTheme({
  palette: {
    primary: { main: '#1a995b', light: '#2FB56B', dark: '#164B3E' },
    secondary: { main: '#424143', dark: '#2A2A2B' }
  },
  themeName: 'Custom Light Theme'
});

storiesOf('Material Custom Theme', module).addDecorator(muiTheme([THEME]));*/
