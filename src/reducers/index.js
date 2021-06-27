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
        case 'SET_SUBTOTAL':
            return {
            ...state,
                subTotal: state.subTotal + action.payload 
            }
        case 'SET_TOTAL':
            return {
            ...state,
                total: state.total + action.payload 
            }
        case 'SET_DISC':
            return {
            ...state,
                total: state.total - action.payload 
        }
            
        default:
            return state;
    }
}

export default reducer;