import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  
  render() {
    console.log('App: Render DOM')
    return (
      <div>
        <div className='Header'>
          <h1>GitHub Card Version 2</h1>
        </div>
        <div className='SearchBar'>
          <form> 
            <input/>
            <button>Search</button>
          </form>
        </div>
        <div className='User'>
          <h1>Searched User</h1>
        </div>
        <div className='Follower'>
          <h2>Searched Users List of Followers</h2>
        </div>
      </div>
      
    );
  }
}

export default App;
