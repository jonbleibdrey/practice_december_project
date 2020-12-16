import React, { Component } from 'react'
import{connect} from 'react-redux'
import{fetchBodys} from './Actions/bodysAction'
import{fetchDogs} from './Actions/dogsAction'
// import DogsList from './Components/DogsList'
import BodysForm from './Components/BodysForm'
import Router from './Components/Router'



class App extends Component {

  componentDidMount() {
    this.props.fetchBodys()
    this.props.fetchDogs()
  }
  render(){
  return (
    <div>
      <Router/>
      {/* <DogsList /> */}
      <BodysForm/>
    </div>
  );
  }
}

export default connect(null, {fetchBodys,fetchDogs})(App);
