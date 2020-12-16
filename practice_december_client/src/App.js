import React, { Component } from 'react'
import{connect} from 'react-redux'
import{fetchBodys} from './Actions/bodysAction'
import{fetchDogs} from './Actions/dogsAction'
import DogsList from './Components/DogsList'
import BodysList from './Components/BodysList'
import DogsForm from './Components/DogsForm'



class App extends Component {

  componentDidMount() {
    this.props.fetchBodys()
    this.props.fetchDogs()
  }
  render(){
  return (
    <div>
      <DogsList />
      <BodysList/>
      <DogsForm/>

    </div>
  );
  }
}

export default connect(null, {fetchBodys,fetchDogs})(App);
