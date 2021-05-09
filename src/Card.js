import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      code: props.code,
      match: true,
      restaurant: {
        NAME: 'Click the red x to start!'
      },
      counter: 0
    };
  }

  async reject(event) {
    event.preventDefault();
    this.setState({counter: this.state.counter + 1});
    let response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    this.setState({restaurant: data});
  }

  async like(event) {
    event.preventDefault();
    this.setState({match: false});
    this.setState({counter: this.state.counter - 1});
    let response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    this.setState({restaurant: data});
  }

  render () {
    return (
      <div> {this.state.match ? 
        
      <div class="card" style={{backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 80%), url(" + this.state.restaurant.PICTURE + ")"}}>
            <h2 class="name">{this.state.restaurant.NAME}</h2>
            <p class="type-cost">{this.state.restaurant['TYPE OF FOOD']} | {this.state.restaurant.PRICE} | Rating: {this.state.restaurant.YELP_RATING}/5</p>
            <p class="address">{this.state.restaurant.LOCATION}</p>
            <div class="like-form">
              <form onSubmit={e=>this.reject(e)}>
                <button type="submit" name="reject" value="Reject">
                  <img class="match-buttons" src="assets/img/no.png" alt=""/>
                </button>
              </form>
              <form onSubmit={e=>this.like(e)}>
                <button type="submit" name="like" value="Like">
                  <img class="match-buttons" src="assets/img/yes.png" alt=""/>
                </button>
              </form>
            </div>
      </div> :
      <div>
      <h3>It's a match!</h3>
      <div class="card" style={{backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 80%), url(" + this.state.restaurant.PICTURE + ")"}}>
        <h2 class="name">{this.state.restaurant.NAME}</h2>
        <p class="type-cost">{this.state.restaurant['TYPE OF FOOD']} | {this.state.restaurant.PRICE} | Rating: {this.state.restaurant.YELP_RATING}/5</p>
        <p class="address">{this.state.restaurant.LOCATION}</p>
        <div class="like-form">
          <form onSubmit={e=>this.reject(e)}>
            <button type="submit" name="reject" value="Reject">
              <img class="match-buttons" src="assets/img/no.png" alt=""/>
            </button>
          </form>
          <form onSubmit={e=>this.like(e)}>
            <button type="submit" name="like" value="Like">
              <img class="match-buttons" src="assets/img/yes.png" alt=""/>
            </button>
          </form>
        </div>
      </div></div>

      } </div>
    );
  }

}

export default Card;