const configs = require('./configs')
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'zh-CN',
  title: '知识源泉',
  description: '知识积累',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/favico.ico`,
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'xunloveo/knowledge-blog',
    navbar: configs.navbar,
    sidebar: configs.sidebar,

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    // other
    openInNewWindow: '在新窗口打开',
  },
  plugins: [
    [
      [
        '@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, './components'),
        },
      ],
    ],
    // ['@vuepress/plugin-debug'],
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '3a539aab83105f01761a137c61004d85',
    //     indexName: 'vuepress',
    //     searchParameters: {
    //       facetFilters: ['tags:v2'],
    //     },
    //     // locales: {
    //     //   '/zh/': {
    //     //     placeholder: '搜索文档',
    //     //   },
    //     // },
    //   },
    // ],
  ],
}
