import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Books from './components/Books'

function App() {
  const [searchFilter, setSearchFilter] = useState([])
  console.log('searchFilter', searchFilter)

  return (
    <div className="App">
      <Navigation
        setSearchFilter = {setSearchFilter}
      />
      <Books 
        searchFilter = {searchFilter}
      />
    </div>
  );
}

export default App;
