import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Post from './components/Post';
import PostDisplay from './components/PostDisplay';
import BookHolders from './components/BookHolders';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateProfile from './components/CreateProfile';

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
        <Route 
          path = '/holders'
          render = {
            props => {
              return (
                  <BookHolders
                    {...props}
                    
                  />
                  
              )
            }
          }
        />
        <Route 
          path = '/signin'
          render = {
            props => {
              return (
                  <SignIn
                    {...props}
                    
                  />
                  
              )
            }
          }
        />
        <Route 
          path = '/signup'
          render = {
            props => {
              return (
                  <SignUp
                    {...props}
                    
                  />
                  
              )
            }
          }
        />
        <Route 
          path = '/createProfile'
          render = {
            props => {
              return (
                  <CreateProfile
                    {...props}
                    
                  />
                  
              )
            }
          }
        />

      </Switch>
    </div>
  );
}

export default App;
