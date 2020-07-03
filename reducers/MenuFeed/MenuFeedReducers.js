import { MenuListOperation } from "../../actions/MenuFeed";

const MenuFeedReducers = (state = [] , action ) => {
    switch(action.type){
           case MenuListOperation.INCREMENT :
                 return state.map((item) => {
                         return (item.id === action.id && item.orderCount >= 0) ?
                            { ...item , orderCount: item.orderCount+1} : item
                     
                  });
           return state
           default:
                  return state;
    }
}

export default MenuFeedReducers;