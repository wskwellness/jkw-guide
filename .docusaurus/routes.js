import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jkw-guide/search',
    component: ComponentCreator('/jkw-guide/search', '151'),
    exact: true
  },
  {
    path: '/jkw-guide/',
    component: ComponentCreator('/jkw-guide/', '5d8'),
    routes: [
      {
        path: '/jkw-guide/',
        component: ComponentCreator('/jkw-guide/', '2df'),
        routes: [
          {
            path: '/jkw-guide/',
            component: ComponentCreator('/jkw-guide/', '2d9'),
            routes: [
              {
                path: '/jkw-guide/apa-style-guide',
                component: ComponentCreator('/jkw-guide/apa-style-guide', '14f'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/article-manuscripts',
                component: ComponentCreator('/jkw-guide/article-manuscripts', '585'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/faq',
                component: ComponentCreator('/jkw-guide/faq', '823'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/massengale-papers',
                component: ComponentCreator('/jkw-guide/massengale-papers', '476'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/student-scholarship',
                component: ComponentCreator('/jkw-guide/student-scholarship', '830'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/submission-guidelines',
                component: ComponentCreator('/jkw-guide/submission-guidelines', 'c3e'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/templates',
                component: ComponentCreator('/jkw-guide/templates', '7dd'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/wskw-chronicles',
                component: ComponentCreator('/jkw-guide/wskw-chronicles', '63a'),
                exact: true,
                sidebar: "jkwSidebar"
              },
              {
                path: '/jkw-guide/',
                component: ComponentCreator('/jkw-guide/', 'b60'),
                exact: true,
                sidebar: "jkwSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
