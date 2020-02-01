import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books'

function App() {
  const [searchFilter, setSearchFilter] = useState([])
  console.log('searchFilter', searchFilter)

  return (
    <div className="App">
      <Switch >
        <Route
          exact path = '/'
          render = {
            props => {
              return (
                <>
                  <Navigation 
                    {...props}
                    setSearchFilter = {setSearchFilter}
                  />
                  <Books
                    {...props} 
                    searchFilter = {searchFilter}
                  />
                </>
              )}}
        />
        <Route 
          path = '/post'
          
        />
      </Switch>
    </div>
  );
}

export default App;
