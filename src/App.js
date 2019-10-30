import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import MonthContainer from "./components/monthContainer";

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>Personal Roadmap</h1>

          <div className="forms">

            <MonthContainer/>

          </div>
        </div>
      </Provider>
    )
  }
}