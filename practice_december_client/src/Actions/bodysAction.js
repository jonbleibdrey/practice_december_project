export const fetchBodys = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/bodies')
        .then(resp => resp.json())
        .then(bodys => dispatch({type: 'FETCH_BODYS', payload: bodys}))
    }

}

// export const addRobot = robot => {
//     return dispatch => {
//           fetch('http://localhost:3001/robots', {
//         method: 'POST',
//         body:JSON.stringify(robot),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(resp => resp.json())
//     .then(robot => dispatch({type: 'ADD_ROBOT', payload: robot}))
        
//     }
  
// }
