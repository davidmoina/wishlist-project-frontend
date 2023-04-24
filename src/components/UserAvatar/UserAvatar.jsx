import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import "./userAvatar.scss"

export const UserAvatar = () => {

    const {user} = useAuth0();

    return (
        <div className='avatar-container'>
            <img src={user.picture} alt="user avatar" />
        </div>
    )
}
