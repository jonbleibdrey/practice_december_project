import React from 'react'
import {connect} from 'react-redux'
import './BodysList.css'
import Card from 'react-bootstrap/Card'

const BodysList = ({bodys}) => {
    return (
        <div className="bodyslist" id="bodyslist">
            <h1>
                Bodys list
            </h1>
            {bodys.map(body => 
                <Card className='card' >
                    <Card.Body >
                    <Card.Title>Body</Card.Title>
                    <Card.Text key={body.id}>
                       Head Type: {body.head}
                       <br/>
                       <br/>
                        Chest Type: {body.chest}
                       <br/>
                       <br/>
                       Arm Type: {body.arm}
                       <br/>
                       <br/>
                        Leg Type: {body.leg}
                       <br/>
                       <br/>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return {bodys: state.bodys}
}

export default connect(mapStateToProps)(BodysList)
