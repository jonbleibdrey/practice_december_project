export const fetchDogs = () => {
    return(dispatch) => {
        fetch('http://localhost:3001/dogs')
        .then(resp => resp.json())
        .then(dogs => dispatch({type: 'FETCH_DOGS', payload: dogs}))
    }

}
