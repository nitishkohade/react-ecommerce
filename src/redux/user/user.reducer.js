const initial_stae = {
    currentUser: null
}

const userReducer = (state = initial_stae, action) => {
    
    switch(action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer