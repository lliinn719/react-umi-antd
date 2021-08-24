const theme = require('../theme');

export default {
  history: 'browser',
  treeShaking: true,
  define: {
    'process.env.API_PROTOCOL': process.env.API_PROTOCOL,
    'process.env.API_HOST': process.env.API_HOST,
    'process.env.API_PORT': process.env.API_PORT,
    'process.env.API_PREFIX': process.env.API_PREFIX,
  },
  routes: [
    {
      path: '/login',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/login', component: '../pages/login/Login', exact: true }
      ],
    },
    {
      path: '/',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/', component: '../pages/index', exact: true }
      ],
    },
  ],

  hash: true,
  theme: theme,
  disableCSSModules: true,
  lessLoaderOptions: {
    modifyVars: theme,
    javascriptEnabled: true,
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        title: 'umi-test',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
