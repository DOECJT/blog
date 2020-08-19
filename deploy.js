const ghpages = require('gh-pages')
ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/DOECJT/blog.git'
}, error => {
  console.log('error', error)
})
