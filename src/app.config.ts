export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/qianren/qianren',
    'pages/consult/consult',
    'pages/me/me'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#646464',
    selectedColor: '#000000',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/images/index.png',
        selectedIconPath: './assets/images/index.selected.png',
        text: '首页'
      },
      {
        pagePath: 'pages/qianren/qianren',
        selectedIconPath: './assets/images/qianren.selected.png',
        iconPath: './assets/images/qianren.png',
        text: '前人'
      },
      {
        pagePath: 'pages/consult/consult',
        selectedIconPath: './assets/images/consult.selected.png',
        iconPath: './assets/images/consult.png',
        text: '咨询'
      },
      {
        pagePath: 'pages/me/me',
        selectedIconPath: './assets/images/me.selected.png',
        iconPath: './assets/images/me.png',
        text: '我的'
      }
    ],
    position: 'bottom',
    custom: false
  }
})
