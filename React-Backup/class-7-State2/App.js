import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Counter from './/Counter/Counter'
class App extends React.Component {

    render() {
        return <div>
            <Navbar />
            <Counter />
        </div>
    }
}
export default App