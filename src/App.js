import React from 'react';
import {Provider} from 'react-redux';
import { HomeView } from './components';
import './App.css';
// import store from './store';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
window.store = store
function App() {
  return (
    <Provider store={store}>
      <HomeView />

    </Provider>

  );
}

export default App;
