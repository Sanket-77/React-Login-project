import React, { Component } from 'react'

export class RestaurantCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: null,
       address: null,
       email: null,
       ratting:null
    }
  }

  //  post Request ***********************************
  
  create(){
    fetch('http://localhost:3000/restaurant',{
      method: "post",
      headers: {'content-Type':'application/json'},
      body:JSON.stringify(this.state)
    }).then((result)=> {
      result.json().then((res)=> {
        console.log(res);
        alert('Restaurant has been Added')
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Restaurant Create </h1>
        <div>
          <input onChange={(event) => {this.setState({name:event.target.value})}} placeholder="Restaurant Name"/> <br /><br />
          <input onChange={(event) => {this.setState({address:event.target.value})}} placeholder="Restaurant Address"/><br /><br />
          <input onChange={(event) => {this.setState({email:event.target.value})}} placeholder="Restaurant Email"/><br /><br />
          <input onChange={(event) => {this.setState({rating:event.target.value})}} placeholder="Restaurant Rating"/><br /><br />
          <button onClick={() => {this.create()}}>Add Restaurant</button>
        </div>
      </div>
    )
  }
}

export default RestaurantCreate
