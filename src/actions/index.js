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

export const produtUpdate = payload => ({
    type: 'PRODUCT_UPDATE',
    payload,
})

export const productDelete = payload => ({
    type: 'PRODUCT_DELETE',
    payload,
})

export const resetTotal = payload => ({
    type: 'RESET_TOTAL',
    payload,
})

export const setDisc = payload => ({
    type: 'SET_DISC',
    payload,
})

