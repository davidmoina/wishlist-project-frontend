import { useAuth0 } from '@auth0/auth0-react'
import './userInfo.scss'

export const UserInfo = () => {

    const {user} = useAuth0();

    return (
    <div className='user-info-container'>
        <div className='user-fields'>
            <div>
                <label htmlFor=""><strong>Name: </strong></label>
                <p>{user.name}</p>
            </div>
            <div>
                <label htmlFor=""><strong>Email: </strong></label>
                <p>{user.email}</p>
            </div>
            <div>
                <label htmlFor=""><strong>Avatar: </strong></label>
                <p>{user.picture}</p>
            </div>
        </div>
    </div>
    )
}
