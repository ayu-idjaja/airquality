/*
//for testing autoprefixer

const autoprefixer = require('autoprefixer')

var info = autoprefixer({
  browsers: ['last 1 version, not dead, ie >= 11'],
}).info()
console.log(info)

*/

module.exports = {
  plugins: {
    precss: {},
    autoprefixer: {},
  },
}
