module.exports = {
  title: `doecjt's blog`,
  dest: './dist',
  repo: 'https://github.com/DOECJT/blog.git',
  themeConfig: {
    nav: [
      {text: 'HTML', link: '/html/'},
      {text: 'CSS', link: '/css/'},
      {text: 'JavaScript', link: '/javascript/'}
    ],
    sidebar: {
      '/html/': ['html-one'],
      '/css/': ['css-one'],
      '/javascript/': ['javascript-one']
    }
  }
}