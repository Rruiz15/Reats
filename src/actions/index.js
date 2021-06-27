export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
}) 

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
}) 

export const produtSelect = payload => ({
    type: 'PRODUCT_SELECT',
    payload,
})

export const setSubtotal = payload => ({
    type: 'SET_SUBTOTAL',
    payload,
})

export const setTotal = payload => ({
    type: 'SET_TOTAL',
    payload,
})

export const setDisc = payload => ({
    type: 'SET_DISC',
    payload,
})

