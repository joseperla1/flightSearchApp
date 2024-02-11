import React from "react";

function Header(){
    return(
        <>
        <div className="header">
            <h1>Venture Vibes</h1>

            <div className="search-feature">
                <input
                    type="text"
                    placeholder="Where are you going today"/>
                <input
                type="date"
                placeholder=""/>
                <input
                type="text"
                placeholder="What is your budget"/>
                <button
                    className='add-button'>
                    Search

                </button>
            </div>

        </div>
        </>
    )
}

export default Header