export const fetchDogs = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/dogs')
        .then(resp => resp.json())
        .then(dogs => dispatch({type: 'FETCH_DOGS', payload: dogs}))
    }

}

export const addDog = dog => {
    return dispatch => {
          fetch('http://localhost:3001/dogs', {
        method: 'POST',
        body:JSON.stringify(dog),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(dog => dispatch({type: 'ADD_DOG', payload: dog}))
        
    }
  
}