# FantasticBoxCo Calculator Test Application

## Getting Started

This project requires [node.js](https://nodejs.org/en/) and `npm` (node package manager) installed to
run.

With node installed you can install the development dependancies by running:

```sh
$ npm install
```

This will install all the dependancies listed in `package.json`

## Installing New Dependancies

You can install new dependencies to the project with the following:

```sh
$ npm search [module-name]              <-- search for a module on npm
$ npm install [module-name] --save-dev  <-- installs module and adds it as a dependancy to the package.json
```

## Development

Development files are found in the `./src` directory. All the HTML is in
`index.html`, CSS (as SASS) in `./src/scss` and javascript in `./src/js`.

There are a number of npm tasks listed in `package.json`, running these will
build and compile the CSS and other assets in to the `./dist` directory.

```sh
$ npm run dev      <-- use this for development, will compile CSS, and run server
$ npm run build    <-- compiles and builds app into ./dist directory
$ npm run test     <-- To be implemented...
```

You may wish to add a new task to concat, minify/uglify the JS, currently the
`build:js` task just copies the `application.js` file over to `./dist/js`

