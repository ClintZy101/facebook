
// data initial data layer
export const initialState = {
    user: null,
};

// dispatch actions into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                // return whatever the data layer currently look like but change user action passed into it
                ...state,
                user:action.user,
            }
        
        default:
            return state;
    }
 };

 export default reducer;