import React from 'react'
import Movie from './Movies/Movie'
import './assets/css/rajni.css'
class App extends React.Component {
    render() {
        return <div>
            <h2>App Componet</h2>
            <hr />
            <Movie />

        </div>
    }
}
export default App