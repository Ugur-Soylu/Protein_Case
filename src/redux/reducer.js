function reducer (state, action){
    switch (action.type){
        case "CHANGE TO TRUE" :
           state.value = true;
           return {...state}

        default:
            return state
    }
}

// Buton'a tıklandığında state'i true'ya çevirecek olan reducer fonksiyonunu hazırladık.
export default reducer;