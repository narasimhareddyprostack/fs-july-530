import { createStore } from 'redux'
import { counterReducer } from './counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
//let store= createStore(1,2)
let store = createStore(counterReducer, composeWithDevTools());
export { store }