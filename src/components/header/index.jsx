import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../routes'

const navItems = [
  {
    label: 'Home',
    url: routes.home
  },
  {
    label: 'My Account',
    url: routes.myAccount
  },
  {
    label: 'Login',
    url: routes.login
  },
  {
    label: 'Logout',
    url: routes.logout
  }
]

const PageHeader = () => (
  <header style={{ padding: '0 2rem 2rem' }}>
    Every card you can play in EDH/Commander is assigned a point value that
    indicates its approximate power level. Use it to play against similarly
    balanced decks.
    {/* <ul>
      {navItems.map(({ label, url }) => (
        <li button key={url}>
          <Link to={url}>
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul> */}
  </header>
)

export default PageHeader
