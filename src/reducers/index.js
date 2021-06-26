const reducer = (state,action) => { 
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload 
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload 

            }
        case 'PRODUCT_SELECT':
            return {
             ...state,
                bill : state.bill.concat(action.payload)
             }
        default:
            return state;
    }
}

export default reducer;