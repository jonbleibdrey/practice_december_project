import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class DogsForm extends Component {
    state = {
        head: "",
        chest: "",
        leg: "",
    }
    render() {
        return (
            <Form>
                 <Form.Group controlId="head"> 
                 <Form.Label>Head</Form.Label>  
                <Form.Control type="text" value={this.state.head} placeholder="head" onChange={this.handleChange} name="name"/>
                </Form.Group> 
                <Form.Group> 
                <Form.Label>chest</Form.Label>  
                <Form.Control type="text" value={this.state.chest} placeholder="chest" onChange={this.handleChange} name="chest"/>
                </Form.Group> 
                <Form.Group> 
                <Form.Label>leg</Form.Label>  
                <Form.Control type="text" value={this.state.leg} placeholder="leg" onChange={this.handleChange} name="leg"/>
                </Form.Group> 
                <Form.Control type="submit" value="create dog"/>
            </Form>
        )
    }
}
export default DogsForm;
