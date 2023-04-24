import React from 'react'
import Header from '../../containers/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { UserInfo } from '../../components/UserInfo/UserInfo'

export const Profile = () => {
  return (
    <div>
        <Header />
        <UserInfo/>
    </div>
  )
}
