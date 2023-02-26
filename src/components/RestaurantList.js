import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export class RestaurantList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: null
    }
  }

  componentDidMount() {
    this.getData()
  }
  getData(){
    fetch("http://localhost:3000/restaurant").then((res) => {
      res.json().then((result) => {
        console.log(result);
        this.setState({ list: result })
      })
    })
  }

  Delete(id){
    fetch('http://localhost:3000/restaurant/'+id,{method: "DELETE",})
    .then((result)=>{result.json().then((res)=>{alert('Restaurant has been deleted')
    this.getData()})})
  }

  render() {

    return (

      <div>
        <h1>Restaurant List</h1>
        {
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Change Info</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td><Link to={"/update/"+ item.id}>Edit</Link> 
                        <span onClick={()=>this.Delete(item.id)}>Delete</span>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
            : <p>Please Wait....</p>
        }
      </div>
    )
  }
}

export default RestaurantList
