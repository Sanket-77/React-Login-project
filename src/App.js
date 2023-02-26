import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';
import Login1 from './components/Login1';

function App(props) {
  return (
    <div className='App'>
      <Router>
        <div>
          <ul className='nav'>
            <li className='li'><h2>Resto</h2></li>
            <li className='li'><Link to="/" >Home</Link></li>
            <li className='li'><Link to="/list">List</Link></li>
            <li className='li'><Link to="/create">Create</Link></li>
            <li className='li'><Link to="/search">Search</Link></li>
            {
              localStorage.getItem('token') ? 
              <li className='li'><Link to="/login">LogOut</Link></li>
              :
            <li className='li'><Link to="/login">Login</Link></li>
            }
          </ul>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/list' element={<RestaurantList />} ></Route>
          <Route path='/create' element={<RestaurantCreate />} ></Route>
          <Route path='/search' element={<RestaurantSearch />} ></Route>
          <Route path='/update/:id' element={<RestaurantUpdate {...props}/>} ></Route>
          <Route path='/login' element={<Login1/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


