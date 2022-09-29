const vector = (state = false, action) => {
    switch(action.type){
        case "FRICTION":
            return{
                ...state,
                disfric: !action.payload
            }
        case "WEIGHT":
            return{
                ...state,
                diswei: !action.payload
            } 
        case "NORMAL":
            return{
                ...state,
                disnor: !action.payload
            } 
        case "TORQUE":
            return{
                ...state,
                distor: !action.payload
            } 
        default: 
            return state
    }
}

export default vector