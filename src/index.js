import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import { v4 } from 'node-uuid';

import reducers from './reducers';

import './index.scss';

const store = createStore(
  reducers,
  {
    users: [
      {
        id: v4(),
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com'
      },
      {
        id: v4(),
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'janedoe@gmail.com'
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
