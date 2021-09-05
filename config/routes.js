export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
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
    path: '/gateway',
    name: 'gateway',
    icon: 'highlight',
    routes: [
      
      {
        path: '/gateway/home',
        name: 'home',
        icon: 'list',
        component: './gateway/home',
      },
      {
        path: '/gateway/alert',
        name: 'alert',
        icon: 'smile',
        component: './gateway/alert',
      },
      
      {
        component: './404',
      },
    ],
  },
  {
    path: '/device',
    name: 'device',
    icon: 'table',
    routes: [
      
      {
        path: '/device/home',
        name: 'status',
        icon: 'smile',
        component: './device/home',
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
    path: '/ops',
    name: 'ops',
    icon: 'table',
    routes: [
      {
        path: '/ops/monitor',
        name: 'monitor',
        icon: 'smile',
        component: './dashboard/monitor/index',
      },
      {
        path: '/ops/analysis',
        name: 'analysis',
        icon: 'smile',
        component: './dashboard/analysis/index',
      },
     
      {
        component: './404',
      },
    ],
  },

  {
    path: '/cms',
    name: 'cms',
    icon: 'smile',
    routes: [
      {
        path: '/cms/category',
        name: 'category',
        icon: 'smile',
        component: './cms/category',
      },
      {
        path: '/cms/channel',
        name: 'channel',
        icon: 'smile',
        component: './cms/channel',
      },
      {
        path: '/cms/page-module',
        name: 'page-module',
        icon: 'smile',
        component: './cms/page-module',
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
        path: '/cms/todo',
        name: 'todo',
        icon: 'smile',
        component: './cms/todo',
      },
      
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'user',
    access: 'canAdmin',
    routes: [
      {
        name: 'settings',
        icon: 'smile',
        path: '/admin/settings',
        component: './account/settings',
      },
      {
        path: '/admin/user',
        name: 'system-user-admin',
        icon: 'smile',
        component: './account/admin-user',
      },
      
      {
        path: '/admin/role',
        name: 'role-admin',
        icon: 'smile',
        component: './account/role',
      },
      {
        path: '/admin/permission',
        name: 'permission-admin',
        icon: 'smile',
        component: './account/permission',
      },
      {
        path: '/admin/menu',
        name: 'menu-admin',
        icon: 'smile',
        component: './account/menu',
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
        hideInMenu: 'true',
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
