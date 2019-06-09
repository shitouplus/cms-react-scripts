# Create React CMS  [![npm](https://img.shields.io/npm/v/cms-react-scripts.svg)](https://www.npmjs.com/package/cms-react-scripts)

Create React cms with no build configuration.

- Auto install mobx, mobx-react, react-router, @material-ui/core, @material-ui/icons, axios
- Enable data mock
- Enable @decorator
- Enable alias
  ```
  @ -> /src
  ```
- Auto generator cms templates
  ```
  my-app
  ├── README.md
  ├── node_modules
  ├── package.json
  ├── .gitignore
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src
      ├── assets
      ├── components
      │   └── Menus.js
      ├── layouts
      │   └── default
      │       ├── Main.js
      │       └── index.js
      ├── mock
      │   └── index.js
      ├── models
      │   └── Home
      │       └── index.js 
      ├── pages
      │   ├── About
      │   │   └── index.js
      │   └── Home
      │       └── index.js
      ├── routers
      │   └── index.js
      ├── utils
      │   └── http.js
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── setupProxy.js
      └── serviceWorker.js
  ```

## Quick Overview

```sh
npx create-react-app my-app --scripts-version cms-react-scripts
cd my-app
npm start
```
