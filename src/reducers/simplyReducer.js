export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTIONS':
            return {
                result: action.payload
            }
            default:
                return state
    }
}