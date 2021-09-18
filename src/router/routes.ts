import { MainPage } from 'pages/main';
import { MapPage } from 'pages/map';
import { TurPage } from 'pages/rivals';
import { SpecialPage } from 'pages/special';

export const routes = [
  {
    id: 2,
    isExact: true,
    link: '/',
    component: MapPage,
    text: 'Map',
    className: '',
  },
  {
    id: 1,
    isExact: false,
    link: '/community',
    component: MainPage,
    text: 'Community',
    className: '',
  },
  {
    id: 3,
    isExact: false,
    link: '/rivals',
    component: TurPage,
    text: 'Rivals',
    className: 'menu_item--rivals',
  },
  // {
  //   id: 4,
  //   isExact:false,
  //   link: '/xxx',
  //   component: SpecialPage,
  //   text: 'xxx',
  //   className: '',
  // },
];

export const specialRoutes = [
  { id: 100, isExact:true, link: '/test', component: SpecialPage, text: 'test', className: '' },
];
