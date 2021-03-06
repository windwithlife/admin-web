// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/ctrip/code/iot/admin-web/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/umi/plugin/openapi",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-openapi__openapi' */'/Users/ctrip/code/iot/admin-web/src/.umi/plugin-openapi/openapi.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/ctrip/code/iot/admin-web/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/ctrip/code/iot/admin-web/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent})],
        "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/ctrip/code/iot/admin-web/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/ctrip/code/iot/admin-web/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/ctrip/code/iot/admin-web/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/ctrip/code/iot/admin-web/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1629338803000,
              "componentName": "admin-web",
              "slugs": [
                {
                  "depth": 1,
                  "value": "???????????????",
                  "heading": "???????????????"
                },
                {
                  "depth": 2,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 2,
                  "value": "Scripts??????",
                  "heading": "scripts??????"
                },
                {
                  "depth": 3,
                  "value": "??????????????????",
                  "heading": "??????????????????"
                },
                {
                  "depth": 3,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 3,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 3,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 2,
                  "value": "??????",
                  "heading": "??????"
                }
              ],
              "title": "???????????????"
            },
            "title": "???????????????"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/ctrip/code/iot/admin-web/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "filePath": "src/components/index.md",
              "updatedTime": 1629338803000,
              "title": "????????????",
              "sidemenu": true,
              "slugs": [
                {
                  "depth": 1,
                  "value": "????????????",
                  "heading": "????????????"
                },
                {
                  "depth": 2,
                  "value": "Footer ????????????",
                  "heading": "footer-????????????"
                },
                {
                  "depth": 2,
                  "value": "HeaderDropdown ??????????????????",
                  "heading": "headerdropdown-??????????????????"
                },
                {
                  "depth": 2,
                  "value": "HeaderSearch ???????????????",
                  "heading": "headersearch-???????????????"
                },
                {
                  "depth": 3,
                  "value": "API",
                  "heading": "api"
                },
                {
                  "depth": 2,
                  "value": "NoticeIcon ????????????",
                  "heading": "noticeicon-????????????"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon API",
                  "heading": "noticeicon-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIcon.Tab API",
                  "heading": "noticeicontab-api"
                },
                {
                  "depth": 3,
                  "value": "NoticeIconData",
                  "heading": "noticeicondata"
                },
                {
                  "depth": 2,
                  "value": "RightContent",
                  "heading": "rightcontent"
                }
              ],
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              }
            },
            "title": "????????????"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/ctrip/code/iot/admin-web/src/pages/Welcome'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "path": "/user",
            "routes": [
              {
                "name": "login",
                "path": "/user/login",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/ctrip/code/iot/admin-web/src/pages/user/Login'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/gateway",
        "name": "gateway",
        "icon": "highlight",
        "routes": [
          {
            "path": "/gateway/home",
            "name": "home",
            "icon": "list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__gateway__home' */'/Users/ctrip/code/iot/admin-web/src/pages/gateway/home'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/gateway/alert",
            "name": "alert",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__gateway__alert' */'/Users/ctrip/code/iot/admin-web/src/pages/gateway/alert'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/device",
        "name": "device",
        "icon": "table",
        "routes": [
          {
            "path": "/device/home",
            "name": "status",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__device__home' */'/Users/ctrip/code/iot/admin-web/src/pages/device/home'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/device/alert",
            "name": "alert",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__device__alert' */'/Users/ctrip/code/iot/admin-web/src/pages/device/alert'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/ops",
        "name": "ops",
        "icon": "table",
        "routes": [
          {
            "path": "/ops/monitor",
            "name": "monitor",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor__index' */'/Users/ctrip/code/iot/admin-web/src/pages/dashboard/monitor/index'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/ops/analysis",
            "name": "analysis",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis__index' */'/Users/ctrip/code/iot/admin-web/src/pages/dashboard/analysis/index'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/cms",
        "name": "cms",
        "icon": "smile",
        "routes": [
          {
            "path": "/cms/channel",
            "name": "channel",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__channel' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/channel'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/cms/page-module",
            "name": "page-module",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__page-module' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/page-module'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/cms/tag",
            "name": "cms-tag",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__tag' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/tag'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/cms/image-text",
            "name": "image-text",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__image-text' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/image-text'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/cms/rich-text",
            "name": "rich-text",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__rich-text' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/rich-text'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/cms/addNewRichText",
            "name": "rich-text-new",
            "icon": "smile",
            "hideInMenu": "true",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__cms__richtext__NewRichText' */'/Users/ctrip/code/iot/admin-web/src/pages/cms/richtext/NewRichText'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/admin",
        "name": "admin",
        "icon": "user",
        "access": "canAdmin",
        "routes": [
          {
            "name": "settings",
            "icon": "smile",
            "path": "/admin/settings",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/ctrip/code/iot/admin-web/src/pages/account/settings'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin/user",
            "name": "system-user-admin",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__admin-user' */'/Users/ctrip/code/iot/admin-web/src/pages/account/admin-user'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin/role",
            "name": "role-admin",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__role' */'/Users/ctrip/code/iot/admin-web/src/pages/account/role'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin/permission",
            "name": "permission-admin",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__permission' */'/Users/ctrip/code/iot/admin-web/src/pages/account/permission'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin/menu",
            "name": "menu-admin",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__menu' */'/Users/ctrip/code/iot/admin-web/src/pages/account/menu'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/docs",
        "name": "docs",
        "icon": "crown",
        "routes": [
          {
            "path": "/docs/api",
            "name": "docs-api",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__docs__api-page' */'/Users/ctrip/code/iot/admin-web/src/pages/docs/api-page'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/docs/framework",
            "name": "docs-framework",
            "icon": "smile",
            "hideInMenu": "true",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__docs__framework-page' */'/Users/ctrip/code/iot/admin-web/src/pages/docs/framework-page'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/index.html",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/ctrip/code/iot/admin-web/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
