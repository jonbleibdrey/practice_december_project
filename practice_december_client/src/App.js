import React, { Component } from 'react'
import{connect} from 'react-redux'
import{fetchBodys} from './Actions/bodysAction'
import{fetchDogs} from './Actions/dogsAction'
import BodysList from './Components/BodysList'
import BodysForm from './Components/BodysForm'
import Router from './Components/Router'
import{Parallax} from 'react-parallax'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'



class App extends Component {

  componentDidMount() {
    this.props.fetchBodys()
    this.props.fetchDogs()
  }

  
  render(){
 
  return (
    <div className="App" style={{ textAlign: 'center' }}>
        <NavBar/>
          <div className='background1'>
            <Home />
          </div>
        <br/>
        <div className='background4'>
        <About/>
        </div>
        <br/>
          <div className='background2' >
            <BodysForm/>
          </div>
        <br/>
          <div className='background3'>
            <BodysList/>
          </div>
        </div>
  );
  }
  }
  


export default connect(null, {fetchBodys,fetchDogs})(App);
