export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
         
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'developer-doc',
        icon: 'smile',
        component: './Welcome',
      },
     
      {
        component: './404',
      },
    ],
  },
  {
    path: '/ops',
    name: 'ops',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/ops/logs',
        name: 'logs',
        icon: 'smile',
        component: './Welcome',
      },
     
      {
        component: './404',
      },
    ],
  },
  {
    path: '/docs',
    name: 'docs',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/docs/api',
        name: 'docs-api',
        icon: 'smile',
        component: './docs/api-page',
      },
      {
        path: '/docs/framework',
        name: 'docs-framework',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/~docs',
        name: 'docs-framework',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
