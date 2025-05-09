import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MyComponent from 'ui-component/modal/LoveModal';
import CalendarComponent from '../ui-component/calendar';
import RomanticScheduleList from '../ui-component/romantic/romantic';
import Book from '../ui-component/book-animation/book.jsx';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = [
  {
    path: '/',
    element: <MyComponent />
  },
  {
    path: 'book',
    element: <Book />
  }
];

// path: '/',
// element: <MainLayout />,
// children: [

// {
//   path: '/',
//   element: <DashboardDefault />
// },
// {
//   path: 'dashboard',
//   children: [
//     {
//       path: 'default',
//       element: <DashboardDefault />
//     }
//   ]
// },
// {
//   path: 'typography',
//   element: <UtilsTypography />
// },
// {
//   path: 'color',
//   element: <UtilsColor />
// },
// {
//   path: 'shadow',
//   element: <UtilsShadow />
// },
// {
//   path: '/sample-page',
//   element: <SamplePage />
// },
// {
//   path: '/calandar',
//   element: <CalendarComponent />
// },
// {
//   path: '/romantic',
//   element: <RomanticScheduleList />
// }
// ]

export default MainRoutes;
