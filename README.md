# Webpack-React

A starter kit for [React.js](https://reactjs.org/) and [Webpack](https://webpack.js.org/) project, based on Create React App. Some Create React App features like Typescript, PWA support, their custom dev server, etc are not included.

## Features

- ES2015+ and JSX support via [babel 7](https://babeljs.io/)
- [Public Class Fields Syntax support](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- Sass support via [sass-loader](https://github.com/webpack-contrib/sass-loader)
- Linting via [eslint-loader](https://github.com/webpack-contrib/eslint-loader) and React Eslint config.
- Image support via [file-loader](https://github.com/webpack-contrib/file-loader)

## Directories

- `src/public` - All assets in this directory will be copied into the `dist/assets/` directory.
- `src/assets` - Static assets that will be imported into the project on demand. File loader will automatically move them into `dist/assets/`
- `src/index.js` - React entry point.
- `src/App.js` - The main App component which loads sub-components.
- `src/index.html` - The HTML template that is used to render React.

## Build Scripts
- `npm run build` - Build development bundle in the `dist` directory. Assets are placed in the `dist/assets/` directory.
- `npm run start` - Run Webpack Dev Server which automatically reloads on CSS/JS changes.
- `npm run production` - Build production bundle with minified code.