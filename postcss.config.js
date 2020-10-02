module.exports = {
  plugins: [
      require('autoprefixer')({
        'browsers': ['last 10 versions']
      }),
      // require('postcss-combine-media-query')
  ]
};