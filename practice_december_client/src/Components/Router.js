import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../Components/Home'
import BodysList from '../Components/BodysList'
import About from '../Components/About'

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/body' component={BodysList}/>

          
       </Switch>
    )
}

export default Router
