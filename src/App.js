import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Search from './containers/Search';
import MyBooks from './containers/MyBooks';
import './App.css'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route 
            exact path="/" 
            render={() => <Home/>}
          />
          <Route 
            path="/search" 
            render={() => <Search/>}
          />
          <Route 
            path="/mybooks" 
            render={() => <MyBooks/>}
          />
        </div>
      </Router>
    )
  }
}

export default App;