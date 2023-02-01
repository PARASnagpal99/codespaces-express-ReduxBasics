// REDUX 
/*
Three Principles of redux :
1. State 
2. Action
3. reducer 

*/
const BUY_CAKE = 'BUY_CAKE' ;

// Action 
const buyCake =()=>{
    return {
        type : BUY_CAKE ,
        info : 'First redux action'
    }
}

// Reducer Func(action,prevState) => newState 
const initialState = {
      numOfCakes : 10 
}

const reducer =(state = initialState, action)=>{
     switch(action.type){
        case BUY_CAKE : return {
            ...state , 
            numOfCakes : state.numOfCakes - 1 
        }
        default : return state ;
     }
}


