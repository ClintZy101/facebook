import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from "@material-ui/icons";
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">

            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                <div className="header-input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            <div className="header-middle">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
