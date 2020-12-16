import React, { Component } from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form';
import{addBody} from '../Actions/bodysAction'
import BodysList from '../Components/BodysList'

class BodysForm extends Component {
    state = {
        head: "",
        chest: "",
        arm: "",
        leg: "",
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBody(this.state)
    }

    render() {
        return (
            <div>
                <BodysList/>
            <Form onSubmit={this.handleSubmit}>
                 <Form.Group> 
                 <Form.Label>Head</Form.Label>  
                <Form.Control type="text" value={this.state.head} placeholder="head" onChange={this.handleChange} name="head"/>
                </Form.Group> 
                <br/>
                <Form.Group> 
                <Form.Label>chest</Form.Label>  
                <Form.Control type="text" value={this.state.chest} placeholder="chest" onChange={this.handleChange} name="chest"/>
                </Form.Group> 
                <br/>
                <Form.Group> 
                <Form.Label>arm</Form.Label>  
                <Form.Control type="text" value={this.state.arm} placeholder="arm" onChange={this.handleChange} name="arm"/>
                </Form.Group> 
                <br/>
                <Form.Group> 
                <Form.Label>leg</Form.Label>  
                <Form.Control type="text" value={this.state.leg} placeholder="leg" onChange={this.handleChange} name="leg"/>
                </Form.Group> 
                <br/>
                <Form.Control type="submit" value="create body"/>
            </Form>
            </div>
       
        )
    }
}
export default connect(null, {addBody})(BodysForm);
