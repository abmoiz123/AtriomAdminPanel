import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Portfolio = React.lazy(() => import('./views/Portfolio/Portfolio'))
const Client = React.lazy(() => import('./views/Portfolio/Portfolio'))
const Blogs = React.lazy(() => import('./views/Portfolio/Portfolio'))
// const Portfolio = React.lazy(() => import('./views/Portfolio/Portfolio'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/Client', name: 'Client', component: Client },
  { path: '/Blogs', name: 'Blogs', component: Blogs },
];

export default routes;
