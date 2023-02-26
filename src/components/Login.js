import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         password: ''
      }
    }
    login(){
        console.log(this.state);
        fetch('http://localhost:3000/Login?q=' + this.state.name).then((data) => { data.json().then((res) => { console.log("res", res)
        if(res.length>0)
        {
            console.log(this.props);
        }else{
            alert("Please check username and password")
        }
        }) })
    }
    
  render() {
    return (
      <div className='login-div'>
        <input className='login' type="text" name='User' placeholder='Enter Name' onChange={(event)=> {this.setState({name:event.target.value})}} /> <br /> <br />
        <input className='login' type="password" name='password' placeholder='Enter Password' onChange={(event)=> {this.setState({password:event.target.value})}} /> <br /> <br />
        <button onClick={()=>{this.login()}} >Login </button>
      </div>
    )
  }
}

export default Login
