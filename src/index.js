import React from 'react';
import ReactDOM from 'react-dom';

import fontawesome from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

import App from './App';

import './assets/css/index.css';

fontawesome.library.add(fab, faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
