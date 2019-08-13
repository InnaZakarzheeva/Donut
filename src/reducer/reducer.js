const products = (state, action) => {
    switch(action.type){
        case 'add':
            return {
                id: action.id,
                text: action.text,
                price: action.price
            }
        case 'delete':
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({}, state)
        default:
            return state;
    }
}
const product = (state=[], action) => {
    switch(action.type){
        case 'add':
            return[
                ...state,
                products(undefined, action)
            ]
        case 'delete':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}
export default product;