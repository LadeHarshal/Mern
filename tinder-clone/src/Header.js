import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className='Header'>

        <IconButton>
            <PersonIcon fontSize='large' className='profileclick' />
        </IconButton>

        <img src='https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3Y5ODItZDMtMTEuanBn.jpg' alt='' className='logocenter'/>
        
        <IconButton>
        <ForumIcon />
        </IconButton>

    </div>
  )
}

export default Header