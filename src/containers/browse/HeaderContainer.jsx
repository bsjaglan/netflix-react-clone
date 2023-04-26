import React from 'react'
import {Header} from '../../components'
import {NavbarContainer} from './'

function HeaderContainer({profile}) {
  return (
    <Header>
        <NavbarContainer profile={profile} />

    </Header>
  )
}

export default HeaderContainer