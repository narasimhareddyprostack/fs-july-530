
import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {

    return (
        <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <hr />
                <Message />
            </Provider>
        </div>
    )
}

export default App
