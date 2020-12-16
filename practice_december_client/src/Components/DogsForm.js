// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import Form from 'react-bootstrap/Form';
// import{addDog} from '../Actions/dogsAction'

// class DogsForm extends Component {
//     state = {
//         head: "",
//         chest: "",
//         leg: "",
//     }

//     handleChange = (e) => {
//         const {name, value} = e.target

//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.addDog(this.state)
//     }

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                  <Form.Group> 
//                  <Form.Label>Head</Form.Label>  
//                 <Form.Control type="text" value={this.state.head} placeholder="head" onChange={this.handleChange} name="head"/>
//                 </Form.Group> 
//                 <br/>
//                 <Form.Group> 
//                 <Form.Label>chest</Form.Label>  
//                 <Form.Control type="text" value={this.state.chest} placeholder="chest" onChange={this.handleChange} name="chest"/>
//                 </Form.Group> 
//                 <br/>
//                 <Form.Group> 
//                 <Form.Label>leg</Form.Label>  
//                 <Form.Control type="text" value={this.state.leg} placeholder="leg" onChange={this.handleChange} name="leg"/>
//                 </Form.Group> 
//                 <br/>
//                 <Form.Control type="submit" value="create dog"/>
//             </Form>
//         )
//     }
// }
// export default connect(null, {addDog})(DogsForm);
