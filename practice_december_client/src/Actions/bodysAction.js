export const fetchBodys = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/bodies')
        .then(resp => resp.json())
        .then(bodys => dispatch({type: 'FETCH_BODYS', payload: bodys}))
    }

}

export const addBody = body => {
    return dispatch => {
          fetch('http://localhost:3001/bodies', {
        method: 'POST',
        body:JSON.stringify(body),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(body => dispatch({type: 'ADD_BODY', payload: body}))
        
    }
  
}
