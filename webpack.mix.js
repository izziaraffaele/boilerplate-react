const mix = require('laravel-mix');
const path = require('path');

const cwd = process.cwd();

/* Plugins */
mix.setPublicPath(path.resolve(cwd, 'build'));
mix.autoload({
  fetch: 'exports-loader?self.fetch!whatwg-fetch',
});

mix.webpackConfig({
  resolve: {
    modules: [path.resolve(cwd, 'src'), 'node_modules'],
  },
  devServer: {
    contentBase: path.resolve(cwd, 'build'),
    compress: true,
  },
});

/* JS Build */
mix.react('src/js/index.js', 'js');

/* CSS builds */
const sassOptions = {
  processCssUrls: false,
  includePaths: [path.resolve(cwd, 'node_modules')],
};

mix.sass('src/scss/main.scss', 'css', sassOptions);
