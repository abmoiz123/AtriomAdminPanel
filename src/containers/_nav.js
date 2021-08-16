import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Portfolio',
    to: '/Portfolio',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Client',
    to: '/Client',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blogs',
    to: '/Blogs',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Log Out',
    to: '/Logout',
    icon: 'cil-lock-locked',
  },
]

export default _nav
