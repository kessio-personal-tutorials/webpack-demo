# webpack-demo
 ## Getting Started
> Webpack is used to compile JavaScript modules. Once installed, you can interact with webpack either from its CLI or API. If you're still new to webpack, please read through the core concepts and this comparison to learn why you might use it over the other tools that are out in the community.

##Basic Setup
> First let's create a directory, initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line):
```

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
> Now we'll create the following directory structure, files and their contents:

project

```
 webpack-demo
  |- package.json
  |- package-lock.json
 |- index.html
 |- /src
   |- index.js
   ```
   > We also need to adjust our package.json file in order to make sure we mark our package as private, as well as removing the main entry. This is to prevent an accidental publish of your code.

   - package.json

   ```
   {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
  //"main": "index.js", // Remove main this line
  "private": true,  // add this line
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
   ```

   ## Creating a Bundle
  > First we'll tweak our directory structure slightly, separating the "source" code (./src) from our "distribution" code (./dist). The "source" code is the code that we'll write and edit. The "distribution" code is the minimized and optimized output of our build process that will eventually be loaded in the browser. Tweak the directory structure as follows:

project

```
webpack-demo
  |- package.json
  |- package-lock.json
 |- /dist
   |- index.html
 |- index.html // remove it from here and put it in dist file
  |- /src
    |- index.js
    ```

### Tip
- You may have noticed that index.html was created manually, even though it is now placed in the dist directory. Later on in another guide, we will generate index.html rather than edit it manually. Once this is done, it should be safe to empty the dist directory and to regenerate all the files within it.

- To bundle the lodash dependency with index.js, we'll need to install the library locally:


``` npm install --save lodash```

- When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use npm install --save-dev. More information can be found in the npm documentation.

## Using a Configuration

- As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file. This is much more efficient than having to manually type in a lot of commands in the terminal, so let's create one:

```
webpack-demo
  |- package.json
  |- package-lock.json
 |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```
- webpack.config.js

```
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
- Now, let's run the build again but instead using our new configuration file:


``` $ npx webpack --config webpack.config.js ```

 NPM Scripts
- Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. Let's adjust our package.json by adding an npm script:

package.json

```
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
 ```

 

 - Now the npm run build command can be used in place of the npx command we used earlier. Note that within scripts we can reference locally installed npm packages by name the same way we did with npx. This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts.

 ### Acknowledgements
 This readme file is a copy of the original installation guide from the webpack website: https://webpack.js.org/guides/getting-started/


