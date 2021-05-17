import React from 'react'
import "./Widgets.css"

function Widgets () {
    return (
        <div className="widgets" >
            <iframe src="https://www.youtube.com/watch?v=B-kxUMHBxNo&t=11289s"
            frameborder="0"
            width="340"
            height="100%"
            style={{ border:"none", overflow:"hidden" }}
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets

