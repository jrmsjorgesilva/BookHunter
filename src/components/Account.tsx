import React from 'react'
import { UserAuth } from '../contexts/AuthContext'

const Account = () => {

  const { user, logout } = UserAuth();

  console.log(user);

  return (
    <section className='box-layout'>
      account {user ? user.email : ''}
    </section>
  )
}

export default Account