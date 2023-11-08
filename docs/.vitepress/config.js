import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "qb-flip-book",
  description: "qb-flip-book docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide' }
    ],

    sidebar: [
      { text: 'Guide', link: '/guide' },
      { text: 'Api', link: '/api' },
      {
        text: 'Examples',
        items: [
          { text: 'Normal book', link: '/book' },
          { text: 'Board book', link: '/board-book' },
          { text: 'Magazine', link: '/magazine' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maqingbo/qb-flip-book' }
    ]
  }
})
