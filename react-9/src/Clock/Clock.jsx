import React, { useEffect } from 'react'

const Clock = () => {
    let [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, [1000])
    }, []);
    return (
        <div className="container mt-5">
            <pre>{JSON.stringify(currentTime)}</pre>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h5>{currentTime}</h5>
                        </div>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
