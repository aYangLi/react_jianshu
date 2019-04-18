import React, { PureComponent } from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store';

class App extends PureComponent {
  render() {
    return (
      <Provider className="App" store={store}>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component ={Home}/>
          <Route path='/detail' exact component={Detail}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
