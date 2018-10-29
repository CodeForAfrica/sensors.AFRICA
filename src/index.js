import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import App from './App';

import './assets/css/index.css';

library.add(fab, faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
