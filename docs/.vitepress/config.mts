import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vichea Blog",
  description: "Weekly Blogs",
  themeConfig: {
    logo: '/avatar.png',
    siteTitle: 'Vichea Blogs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blogs',
        items: [
          { text: "Japan Blogs", link: "japan-blogs" },
          { text: "Coding Blogs", link: "coding-blogs" }
        ]
      }
    ],
    sidebar: [
      {
        text: "Section A",
        collapsed: true,
        items: [
          {text: "Introduction", link: "/introduction"},
          {text: "Getting Started", link: "/getting-started"},
        ],
      },
      {
        text: "Section B",
        collapsed: false,
        items: [
          {text: "Introduction", link: "/introduction"},
          {text: "Getting Started", link: "/getting-started"},
        ],
      },
      {
        text: "Section C",
        collapsed: true,
        items: [
          {text: "Introduction", link: "/introduction"},
          {text: "Getting Started", link: "/getting-started"},
        ],
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rikithegoat' },
      { icon: 'youtube', link: 'https://github.com/rikithegoat' },
      { icon: 'linkedin', link: 'https://github.com/rikithegoat' }
    ],
    footer: {
      message: 'Released under the MIT license',
      copyright: 'Copyright @ 2022-present VitePress'
    }
  },

})
