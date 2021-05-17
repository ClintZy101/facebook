import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, {useState} from 'react'
import "./MessageSender.css"
import { useStateValue } from './StateProvider';
import firebase from "firebase"
import db from "./firebase"


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        // push/add  something into the database
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });
       
        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className="messageSender-top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender-input" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input 
                    value={imageUrl}
                    onChange={e=> setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender-option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender-option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
