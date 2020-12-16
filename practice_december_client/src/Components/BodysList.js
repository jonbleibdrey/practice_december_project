import React from 'react'
import {connect} from 'react-redux'
import './BodysList.css'

const BodysList = ({bodys}) => {
    return (
        <div className="bodyslist" id="bodyslist">
            <h1>
                Bodys of america
            </h1>
            {bodys.map(body => 
                <ul>
                    <li key={body.id}>
                        {body.head}
                    </li>
                    <li>
                        {body.chest}
                    </li>
                    <li>
                        {body.arm}
                    </li>
                    <li>
                        {body.leg}
                    </li>
                </ul>
                
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return {bodys: state.bodys}
}

export default connect(mapStateToProps)(BodysList)
