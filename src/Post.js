import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="post" >
            <div className="post-top">
                <Avatar className="post-avatar" src={profilePic} />
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image}  />
            </div>
            <div className="post-options">
                <div className="post-option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
