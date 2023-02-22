

export const initialState={
    basket:[],
    user:null,
    search:""
};



export const addTotal=(basket)=>
  basket.reduce((amount,item)=> item.price + amount ,0)




const reducer = (state,action)=>{

    switch(action.type){
        case "ADD_TO_BASKET":   
          return{
            ...state,
            basket:[...state.basket,action.item],
            
          }
  
          case "REMOVE_FROM_BASKET":
  
            const index =state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
            )
            let newBasket=[...state.basket]
            if(index >= 0){
               newBasket.splice(index,1)
            }else{
              console.warn(`cant remove ${action.id} from list`)
            }

            return{
              ...state,
              basket:newBasket
            }

            case "SET_USER":
              return{
                ...state, 
                user:action.user
              }
            
            case "SEARCH":
              const search = action.payload
              return{
                ...state,
                search:action.search
              }
    default:
         return state;
    }
} 
export default reducer




 