import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Post from './components/Post';
import PostDisplay from './components/PostDisplay';

function App() {
  const [searchFilter, setSearchFilter] = useState([])
  const [postUpdate, setPostUpdate] = useState()
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
          render = {
            props => {
              return (
                <div className="post-page">
                  <PostDisplay
                    {...props}
                    postUpdate = {postUpdate}
                  />
                  <Post
                    {...props}
                    setPostUpdate = {setPostUpdate}
                  />
                </div>
              )
            }
          }
        />

      </Switch>
    </div>
  );
}

export default App;
