import React from 'react'
import Story from './Story'
import "./StoryReel.css"
import Profile from "./Images/one.jpg"
import imagetwo from "./Images/two.jpg"
import three from './Images/three.jpg'
import rain from "./Images/rain.jpg"
import flower from "./Images/flower.jpg"
import shoes from "./Images/shoes1.jpg"


function StoryReel() {
    return (
        <div className="storyReel" >
            <Story image={imagetwo}
            profileSrc={Profile}
            title= "RANDOM CLINT"/>
            
            <Story image={three}
            profileSrc="https://www.pexels.com/photo/man-in-black-jacket-771742/"
            title= "User Unknown"/>

             <Story image={rain}
            profileSrc={three}
            title= "User Unknown"/>

             <Story image={flower}
            profileSrc={shoes}
            title= "User Unknown"/>
            
             <Story image={shoes}
            profileSrc="https://www.freeimages.com/photo/leopard-profile-portrait-1400889"
            title= "User Unknown"/>

        </div>
    )
}

export default StoryReel
