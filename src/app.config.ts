/*global defineAppConfig */
export default defineAppConfig({
  pages: ['pages/index/index', 'pages/chart-view/index', 'pages/mine/index'],
  tabBar: {
    backgroundColor: '#ccc',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/footer/pool1.png',
        selectedIconPath: './assets/footer/pool1_active.png',
        text: '首页',
      },
      {
        pagePath: 'pages/chart-view/index',
        iconPath: './assets/footer/browser1.png',
        selectedIconPath: './assets/footer/browser1_active.png',
        text: '图表',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: './assets/footer/mine1.png',
        selectedIconPath: './assets/footer/mine1_active.png',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
