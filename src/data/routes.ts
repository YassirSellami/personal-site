export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Yassir Sellami",
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
   label: 'Contributions',
   path: '/contributions',
  },
  // {
  //   label: 'Stats',
  //   path: '/stats',
  // },
  {
    label: 'Contact',
    path: '/contact',
  },
  // {
  //   label: 'Projects',
  //   path: '/projects',
  // },
];

export default routes;
