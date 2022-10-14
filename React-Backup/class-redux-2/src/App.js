import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Message from './Message/Message'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
                <Counter />
                <Message />
            </Provider>
        </div>
    )
}

export default App
