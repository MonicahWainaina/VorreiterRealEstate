import React from 'react'
import "./hero.css"

const Hero = () => {
    return (
        <>
        <div className="search-bar">
        <form action="" method="get">
            <label for="">Location: </label>
            <input type="text" name="" id="" placeholder="Where?"/>

            <label for="">Property Type: </label>
            <input type="text" name="" id="" placeholder="Which?"/>

            <label for="">Price: </label>
            <input type="number" name="" id="" placeholder="How much?"/>

            <button>SEARCH</button>
        </form>
    </div>
</>
    )
}

export default Hero