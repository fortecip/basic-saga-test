import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './allReducers.js';
import InnerComponent from './InnerComponent.js';
import createSagaMiddleware from 'redux-saga';
import { watchTestRequest } from './sagas';
import './App.css';

class App extends Component {

  render() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(allReducers,
      applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(watchTestRequest);
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <InnerComponent />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
