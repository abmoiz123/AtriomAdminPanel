import React from 'react'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import YoutubeSearchedForOutlinedIcon from '@material-ui/icons/YoutubeSearchedForOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardOutlinedIcon style={{marginRight: 15}} />,
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Portfolio',
    to: '/Portfolio',
    icon: <WorkOutlineOutlinedIcon style={{marginRight: 15 }} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Client',
    to: '/Client',
    icon: <PeopleAltOutlinedIcon style={{marginRight: 15 }} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blogs',
    to: '/Blogs',
    icon: <YoutubeSearchedForOutlinedIcon style={{marginRight: 15 }} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'ClientReviews',
    to: '/ClientReviews',
    icon: <RateReviewOutlinedIcon style={{marginRight: 15 }} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'ClientRequests',
    to: '/ClientRequests',
    icon: <NotificationsActiveOutlinedIcon style={{marginRight: 15 }} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Log Out',
    to: '/Logout',
    icon: <LockOutlinedIcon style={{marginRight: 15 }} />,
  },
]

export default _nav
