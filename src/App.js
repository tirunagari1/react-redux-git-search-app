import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onHandleChange = (e) => {
    let { dispatch } = this.props;
    dispatch({ type: 'UPDATE_USERNAME', username: e.target.value })
  }

  OnClickChange = () => {
    let { dispatch } = this.props;
    let { username } = this.props;
    //string interpolation ${username}= ``(backticks)
    //using fetch promises method
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        dispatch({
          type: 'UPDATE_USERPROFILE', userprofile: res

        })
      })

   
  }
  onRepoFetch = () => {
    let { dispatch } = this.props;
    let { repos_url } = this.props.userprofile;
    console.log(repos_url);
    fetch(repos_url)
      .then(res => {
        return res.json()
      })
      .then(response => {
        dispatch({
          type: 'UPDATE_FETCHREPO', repos: response
        })
      })
  }

  render() {
    let { userprofile } = this.props;
    let repos = this.props.repos.map((repo, i) => {
      return <li key={i}>{repo.name}</li>
    })
    return (
      <div>
        <h1>{this.props.username}</h1>

        <input id="input" type="text"
          onChange={this.onHandleChange}
          value={this.props.user} />
        <button onClick={this.OnClickChange} >Search</button>
        <button onClick={this.onRepoFetch} >fetchRepos</button>
        <hr />
        <h3>{userprofile.login}</h3>
        <img src={userprofile.avatar_url} alt="Loading" />
        
        {repos}
      </div>
    )
  }
}
// giving the properties to returning the state as state.username && state.userProfile from reducer.js(initialState)
const mapStateToProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);
