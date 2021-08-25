import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Portfolio = React.lazy(() => import('./views/Portfolio/Portfolio'))
const Client = React.lazy(() => import('./views/Client/Client'))
const Blogs = React.lazy(() => import('./views/Blogs/Blog'))
const ClientReviews = React.lazy(() => import('./views/ClientReviews/ClientReviews'))
const ClientRequests = React.lazy(() => import('./views/ClientReviews/ClientReviews'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/Client', name: 'Client', component: Client },
  { path: '/Blogs', name: 'Blogs', component: Blogs },
  { path: '/ClientReviews', name: 'ClientReviews', component: ClientReviews },
  { path: '/ClientRequests', name: 'ClientRequests', component: ClientRequests },
];

export default routes;
