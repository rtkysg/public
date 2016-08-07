True-i Web Application
======================

## Dev Boot

### Prerequisites

You need to install:
- Node.js and NPM ([download](https://nodejs.org/dist/v4.4.7/node-v4.4.7.pkg)) v4.4.7 LTS
- Mongo DB ([download](https://www.mongodb.org/downloads#production)) v3.x or install using brew

### Install dependencies
```sh
  npm install
```

### Build
```sh
  grunt build
```

### Run
```sh
  npm start
```
Access the web app at `http://localhost:8000`.

## Source code structure

The structure is created by the [generator-react-engine](https://www.npmjs.com/package/generator-react-engine) [Yeoman](http://yeoman.io/) generator.

```
   ├─ config            config files for Express, middlewares and MongoDB
   ├─ controllers       server-side routing and web service logic
   ├─ locales           translation files
   ├─ models            back-end models, mostly Mongoose schemas
   ├─ public            front-end files
   │   └─ views         Flux JSX components
   ├─ routes            client-side routing using react-router
   ├─ tasks             Grunt tasks
   └─ test              test cases (subfolders by topic)
```
