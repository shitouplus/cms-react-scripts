# Create React CMS  [![npm](https://img.shields.io/npm/v/cms-react-scripts.svg)](https://www.npmjs.com/package/cms-react-scripts)

Create React cms with no build configuration.

- Auto install mobx, mobx-react, react-router, @material-ui/core, @material-ui/icons, axios
- enable data mock
- enable @decorator
- enable alias
  ```
  @ -> /src
  ```
- Generator cms templates
  ```
  my-app
  ├── README.md
  ├── node_modules
  ├── package.json
  ├── setupProxy.js
  ├── .gitignore
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src
      ├── layouts
      │   └── default
      │       └── index.js
      ├── mock
      │   └── index.js
      ├── models
      │   └── HelloWorld
      │       └── index.js 
      ├── pages
      │   └── HelloWorld
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
      └── serviceWorker.js
  ```

## Quick Overview

```sh
npx create-react-app my-app --scripts-version cms-react-scripts
cd my-app
npm start
```
