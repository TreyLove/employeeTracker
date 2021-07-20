import React from 'react'

const Header = ({ view, setView }) => {
    return (
        <div className="header">
            <h1 >Employee Directory</h1>

            <button className="btn" onClick={() => setView({ sorted: !view.sorted })}>Sort?</button>

        </div>
    )
}

export default Header
