import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      location: 'None', 
      username: null, 
      code: null};
    this.joinSubmit = this.joinSubmit.bind(this);
    this.createSubmit = this.createSubmit.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  async joinSubmit(event) {
    this.setState({home: false});
    event.preventDefault();
    // let response = await fetch("http://localhost:5000", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(this.state)
    // })
    // let data = await response.json();
    // data = JSON.stringify(data);
    // data = JSON.parse(data);
  }
  async createSubmit(event) {
    this.setState({home: false});
    event.preventDefault();
    // let response = await fetch("http://localhost:5000", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(this.state)
    // })
    // let data = await response.json();
    // data = JSON.stringify(data);
    // data = JSON.parse(data);
  }
  updateUsername(event) {
    this.setState({username: event.target.value});
  }
  updateCode(event) {
    this.setState({code: event.target.value});
  }

  render () {
    return (
      <div> {this.state.home ? 
        <div id="home">
          <div id="greeting">
            <h3>Welcome to</h3>
            <h1>Chicken Tinder</h1>
            <img src="assets/img/heart.png" id="heart1"/>
            <img src="assets/img/heart.png" id="heart2"/>
            <img src="assets/img/chicken.png" id="chicken"/>
          </div>
      
          <div id="locations">
              <div>
                  <p onClick={() => this.setState({ location: 'Southside' })}><img src="assets/img/egg.png" class="egg"/>Southside</p>
                  <p onClick={() => this.setState({ location: 'Northside' })}><img src="assets/img/egg.png" class="egg"/>Northside</p> 
              </div>
              <div>
                  <p onClick={() => this.setState({ location: 'Downtown' })}><img src="assets/img/egg.png" class="egg"/>Downtown</p>
                  <p onClick={() => this.setState({ location: 'Elmwood' })}><img src="assets/img/egg.png" class="egg"/>Elmwood</p>
              </div>
          </div>

          <form onSubmit={this.joinSubmit}>
            <p>Enter Username:</p>
            <label>
              <input type="text" value={this.state.username} onChange={this.updateUsername}/>
            </label>
            <p>Enter Group Code:</p>
            <label>
              <input type="text" value={this.state.code} onChange={this.updateCode}/>
            </label>
            <input class="button" type="submit" value="Join Group" />
          </form>
          <p>---- or ----</p>
          <form onSubmit={this.createSubmit}>
            <input class="button" type="submit" value="Create Group" />
          </form>
        </div>
      
        : <Card location={this.state.location} code={this.state.code}/>
      
      } </div>
    )
  }

}

export default App;
