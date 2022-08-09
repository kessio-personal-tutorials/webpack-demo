# Asset Management
If you've been following the guides from the start, you will now have a small project that shows "Hello webpack". Now let's try to incorporate some other assets, like images, to see how they can be handled.

Prior to webpack, front-end developers would use tools like grunt and gulp to process these assets and move them from their /src folder into their /dist or /build directory. The same idea was used for JavaScript modules, but tools like webpack will dynamically bundle all dependencies (creating what's known as a dependency graph). This is great because every module now explicitly states its dependencies and we'll avoid bundling modules that aren't in use.

One of the coolest webpack features is that you can also include any other type of file, besides JavaScript, for which there is a loader or built-in Asset Modules support. This means that the same benefits listed above for JavaScript (e.g. explicit dependencies) can be applied to everything used in building a website or web app. Let's start with CSS, as you may already be familiar with that setup.

## Set Up
- Let's make a minor change to our project before we get started:

- dist/index.html
- webpack.config.js

## Loading CSS
In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration:

``` npm install --save-dev style-loader css-loader```

> Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain.

> The above order of loaders should be maintained: 'style-loader' comes first and followed by 'css-loader'. If this convention is not followed, webpack is likely to throw errors.

> webpack uses a regular expression to determine which files it should look for and serve to a specific loader. In this case, any file that ends with .css will be served to the style-loader and the css-loader

> This enables you to import './style.css' into the file that depends on that styling. Now, when that module is run, a <style> tag with the stringified css will be inserted into the <head> of your html file.

- Let's try it out by adding a new style.css file to our project and import it in our index.js:
- Now run your build command:

``` $ npm run build ```

> Open up dist/index.html in your browser again and you should see that Hello webpack is now styled in red. To see what webpack did, inspect the page (don't view the page source, as it won't show you the result, because the <style> tag is dynamically created by JavaScript) and look at the page's head tags. It should contain the style block that we imported in index.js.

- Note that you can, and in most cases should, minimize css for better load times in production. On top of that, loaders exist for pretty much any flavor of CSS you can think of – postcss, sass, and less to name a few.

## Loading Images
So now we're pulling in our CSS, but what about our images like backgrounds and icons? As of webpack 5, using the built-in Asset Modules we can easily incorporate those in our system as well:

webpack.config.js
 -add modules for images
 - Add the image to our src folder
 - Import the image on index.js and add ehre it should be dipslayed.
 - add image to our css
 - then run npm run build
 - image will appear on the browser



