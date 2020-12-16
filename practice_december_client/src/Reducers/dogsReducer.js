export const dogsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DOGS':
            return action.payload
        case 'ADD_DOG':
            return[...state, action.payload]    
            default:
                return state
    }

}