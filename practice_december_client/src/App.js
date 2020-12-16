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
    const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const inLineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

  return (
    <div className="App" style={{ textAlign: 'center' }}>

      <NavBar/>
      <About/>

        <Parallax bgImage={image1} >
          <div style={{ height: 500, inLineStyle }}>
            <Router />
          </div>
        </Parallax>
        <br/>
      {/* <DogsList /> */}
        <Parallax bgImage={image2} >
          <div style={{height:500, inLineStyle}}>
            <BodysForm/>
          </div>
        </Parallax>
     
        <br/>
        <Parallax bgImage={image3}>
          <div style={{height:500, inLineStyle}}>
            <BodysList/>
          </div>
        </Parallax>
        <br/>
        <Home/>
    </div>
  );
  }
}

export default connect(null, {fetchBodys,fetchDogs})(App);
