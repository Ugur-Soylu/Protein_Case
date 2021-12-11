function reducer (state, action){
    switch (action.type){
        case "CHANGE TO TRUE" :
           state.value = true;
           return {...state}

        default:
            return state
    }
}
export default reducer;