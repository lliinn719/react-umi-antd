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
      path: '/share',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/share', component: '../pages/shareSetting/shareSetting', exact: true }],
    },
    {
      path: '/babylist',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/babylist', component: '../pages/babyList/babyList', exact: true }],
    },
    {
      path: '/create',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/create', component: '../pages/createBaby/createBaby', exact: true }],
    },
    {
      path: '/edit/password',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/edit/password', component: '../pages/editPassword/editPassword', exact: true },
      ],
    },
    {
      path: '/edit',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/edit', component: '../pages/editUser/editUser', exact: true }],
    },
    {
      path: '/instruction',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/instruction', component: '../pages/newInstuction/newInstuction', exact: true },
      ],
    },
    {
      path: '/confirm',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/confirm', component: '../pages/confirmEmail/confirmEmail', exact: true }],
    },
    {
      path: '/forget',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/forget', component: '../pages/forgetPassword/forgetPassword', exact: true },
      ],
    },
    {
      path: '/signup',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/signup', component: '../pages/signUp/signUp', exact: true }],
    },
    {
      path: '/login',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/login', component: '../pages/login/Login', exact: true }],
    },
    {
      path: '/',
      component: '../layouts/GlobalLayout',
      routes: [{ path: '/', component: '../pages/index/Index', exact: true }],
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
