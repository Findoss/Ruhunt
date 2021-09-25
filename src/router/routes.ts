import { MainPage } from 'pages/main';
import { MapPage } from 'pages/map';
import { TurPage } from 'pages/rivals';
import { RivalsLeaderboardPage } from 'pages/rivals-leaderbord';
import { RivalsStreamPage } from 'pages/rivals-steam';
// import { SpecialPage } from 'pages/special';

import { Hide } from './hide';

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
  // { id: 0, isExact:true, link: '/xxx', component: SpecialPage, text: 'xxx', className: '' },
  {
    id: 90,
    isExact: false,
    link: '/rivals/3/leaderboard',
    component: RivalsLeaderboardPage,
    text: '',
    className: '',
  },
  {
    id: 91,
    isExact: false,
    link: '/rivals/leaderboard',
    component: RivalsLeaderboardPage,
    text: '',
    className: '',
  },
  {
    id: 92,
    isExact: false,
    link: '/rivals/stream',
    component: RivalsStreamPage,
    text: 'xxx',
    className: '',
  },
];
