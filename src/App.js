import React from 'react';
import axios from 'axios';
import User from './components/User'

class App extends React.Component {
  
  state = {
    avatar_url: '',
    name: '',
    login:'',
    public_repos: '',
    followers: '',
  }
  componentDidMount(){
    console.log('App: Component has Mounted');
    axios.get(`https://api.github.com/users/ChristOscar`)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          avatar_url: res.data.avatar_url,
          name: res.data.name,
          login: res.data.login,
          public_repos: res.data.public_repos,
          followers: res.data.followers
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = (e) => {
    this.setState({
      
        ...this.state,
        login: e.target.value,
        
    });
  }
  handleSearch = (e) => {
    console.log('App: Change State.')
    //1. get our login input.
    //2. do an axios call
    //3. save the response from the call to our state
    const login =  this.state.login;
    axios.get(`https://api.github.com/users/${login}`)
    .then(resp =>{
      this.setState({
        ...this.state,
        name: resp.data.name,
        login:''
      })
    })
  }
  
  render() {
    console.log('App: Render DOM')
    return (
      <div>
        <div className='Header'>
          <h1>GitHub Card Version 2</h1>
        </div>
        <div className='SearchBar'>
          <form> 
            <input value={this.state.login} onChange={this.handleChange}/>
            <button onClick={this.handleSearch}>Search</button>
          </form>
        </div>
        <div className='User'>
          <h1>Searched User</h1>
          <h1>{this.state.name}</h1>
          <img src='https://avatars.githubusercontent.com/u/3699469?v=4'></img>
          <h3>{this.state.name}</h3>
          <h4>{this.state.name}</h4>
          <h5>{this.state.name}</h5>
          <p></p>
        </div>
        <div className='Follower'>
          <h2>Searched Users List of Followers</h2>
        </div>
        <User/>
      </div>
      
    );
  }
}

export default App;
