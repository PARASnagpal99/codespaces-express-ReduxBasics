const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.legacy_createStore ;
const combineReducers = redux.combineReducers ;
const applyMiddleware = redux.applyMiddleware ;
const logger = reduxLogger.createLogger();
// REDUX 
/*
Three Principles of redux :
1. State 
2. Action
3. reducer 

*/
const BUY_CAKE = 'BUY_CAKE' ;
const BUY_ICECREAM = 'BUY_ICECREAM'
// Action 
const buyCake =()=>{
    return {
        type : BUY_CAKE ,
        info : 'First redux action'
    }
}

const buyIceCream =()=>{
    return {
        type : BUY_ICECREAM ,
        info : 'First redux action'
    }
}

// Reducer Func(action,prevState) => newState 
// const initialState = {
//       numOfCakes : 10 , 
//       numOfIceCreams : 20 
// }

const initialCakeState = {
    numOfCakes : 10 
}
const initialIceCreamState = {
    numOfIceCreams : 20 
}



// const reducer =(state = initialState, action)=>{
//      switch(action.type){
//         case BUY_CAKE : return {
//             ...state , 
//             numOfCakes : state.numOfCakes - 1 
//         }
        
//         case BUY_ICECREAM : return {
//             ...state ,
//             numOfIceCreams : state.numOfIceCreams - 1 
//         }
//         default : return state ;
//      }
// }

const cakeReducer =(state = initialCakeState, action)=>{
    switch(action.type){
       case BUY_CAKE : return {
           ...state , 
           numOfCakes : state.numOfCakes - 1 
       }
       default : return state ;
    }
}

const iceCreamReducer =(state = initialIceCreamState , action)=>{
    switch(action.type){ 
       case BUY_ICECREAM : return {
           ...state ,
           numOfIceCreams : state.numOfIceCreams - 1 
       }
       default : return state ;
    }
}


// Redux Store 
/*
One Redux store for whole application .
Responsibilties :
1. Holds Application State 
2. Allows access to state via getState()
3. Allows state to get updated via dispatch(action)
4. Registers listeners via Subsribe(listener)
Handles unregistering of listeners via the function returned by Subscribe(listener)
*/
const rootreducer = combineReducers({
    cake : cakeReducer ,
    iceCream : iceCreamReducer 
})

const store = createStore(rootreducer,applyMiddleware(logger));
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
