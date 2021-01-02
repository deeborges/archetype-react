import React from 'react';
import ReactDOM from 'react-dom';

import LayoutGlobal from './providers/theme.provider';
import Input from './components/Buttons/Button';

ReactDOM.render(
  <React.StrictMode>
    <LayoutGlobal />
    <Input />
  </React.StrictMode>,
  document.querySelector('#app')
);
