
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
                    bill : [...state.bill,action.payload],
                    subTotal: state.subTotal + action.payload.price,
                    total: state.total + action.payload.price
                }
        case 'PRODUCT_UPDATE':
            let itemPrice = 0
             state.bill.find(item => {
                if (item.id == action.payload.id){
                    itemPrice = item.price
                    item.price = action.payload.price
                    item.cant = action.payload.cant
                }  
            })
            return{
                ...state,
                subTotal: state.subTotal + action.payload.price - itemPrice,
                total: state.total + action.payload.price - itemPrice
            }
        case 'RESET_TOTAL':
            return {
            ...state,
                total: action.payload 
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