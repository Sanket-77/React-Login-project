import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export class RestaurantSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchData: null
    }
  }
  search(key) {
    console.log(key);
    fetch('http://localhost:3000/restaurant?q=' + key).then((data) => { data.json().then((res) => { console.log("res", res)
  this.setState({searchData:res}) }) })
  }

  render() {
    return (
      <div>
        <h1>Restaurant Search</h1>
        <input className='input-search' placeholder='Search' type="text" onChange={(event) => this.search(event.target.value)} />
        <div>

          {
            this.state.searchData? 
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
                this.state.searchData.map((item)=>
                <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td><Link to={"/update/"+ item.id}>Edit</Link> 
                        <span onClick={()=>this.Delete(item.id)}>Delete</span>
                        </td>
                      </tr>)
              }
              </tbody>
              </Table>
            </div>
            :''
          }
          
        </div>
      </div>
    )
  }
}

export default RestaurantSearch

