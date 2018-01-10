import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

// No central component since we are using React-Router
// import App from './components/app';
import reducers from './reducers';

import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/PostsIndex" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
