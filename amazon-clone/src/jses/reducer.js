export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount,0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){// action.type is the action of the user
        case 'ADD_TO_BASKET':
            return {
                ...state, //idk
                basket : [...state.basket, action.item], //idk
            };

        case 'REMOVE_FROM_BASKET':
            //will delete the correct item but the first one before the rest e.g u clicked on 2nd one it will delete 1st
            const index = state.basket.findIndex(           //finds the index of the item you click on
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]; //copies the basket
            if(index>=0){ // checks if there is anything in basket
                newBasket.splice(index, 1); //removes the item you clicked on
            }else{
                console.warn(`Cannot remove product (id: ${action.id}) as it is not in the basket!`)
            }
            return {
                ...state,
                basket: newBasket //returns copied array as new array for the updated basket
            };
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

        default:
            return state;
    }
}
export default reducer