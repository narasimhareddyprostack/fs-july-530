import { createStore } from 'redux'
import { counterReducer } from './counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'
//let store= createStore(1,2)
//let store = createStore(counterReducer, composeWithDevTools());
let store = createStore(rootReducer, composeWithDevTools());
export { store }