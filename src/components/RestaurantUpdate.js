import React, { Component } from 'react'

export class RestaurantUpdate extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/restaurant',)
  }

  render() {
    console.log(this.props);
    return (
      <section className='upBackground'>
        <div>
          <h1> Update Restaurant Details</h1>
          <div>
            <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /> <br /><br />
            <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
            <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br /><br />
            <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br />
            <button onClick={() => { this.update() }}>Update Info</button>
          </div>
        </div>
      </section>
    )
  }
}

export default RestaurantUpdate
