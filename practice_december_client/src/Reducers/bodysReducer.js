export const bodysReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BODYS':
            return action.payload
        case 'ADD_BODYS':
            return [...state, action.payload]
            
        default:
            return state
    }

}