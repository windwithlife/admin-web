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
    routes: [
      {
        path: '/admin/user',
        name: 'user-admin',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/role',
        name: 'role-admin',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/permission',
        name: 'permission-admin',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/cms',
    name: 'cms',
    icon: 'crown',
    routes: [
      {
        path: '/cms/category',
        name: 'cms-category',
        icon: 'smile',
        component: './cms/category',
      },
      {
        path: '/cms/tag',
        name: 'cms-tag',
        icon: 'smile',
        component: './cms/tag',
      },
      {
        path: '/cms/image-text',
        name: 'image-text',
        icon: 'smile',
        component: './cms/image-text',
      },
      {
        path: '/cms/rich-text',
        name: 'rich-text',
        icon: 'smile',
        component: './cms/rich-text',
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
    path: '/device',
    name: 'device',
    icon: 'crown',
    routes: [
      {
        path: '/device/status',
        name: 'status',
        icon: 'smile',
        component: './device/status',
      },
      {
        path: '/device/alert',
        name: 'alert',
        icon: 'smile',
        component: './device/alert',
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
        component: './docs/framework-page',
      },
      
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
