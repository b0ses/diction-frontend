# Developer Setup

Really I don't expect other developers for this project but I like to have this process saved for future projects.

## Text Editors
Text editors I use, you can use whatever:

* ReactJS Frontend: [Sublime Text 3](https://www.sublimetext.com/3)

Good, you can change text documents. Whoopie do. 

## Git

You can use whatever git interface of your choosing. I like:
 
* command-line for more functionality
* [GitHub Desktop](https://desktop.github.com/) for usual committing

Clone the latest `dev` branch.

## ReactJS

Get some [Node.JS](https://nodejs.org/en/)

    Installing react
    > npm init
    > npm install --save react react-dom
    Setup babel
    > npm install --save-dev babel-core babel-preset-es2015 babel-loader babel-preset-react

And make/edit your `.babelrc` file to include:

    {
      "presets": ["react", "es2015"]
    }

Get some webpack:

    > npm install --save-dev webpack webpack-dev-server html-webpack-plugin

Edit the `package.json` file so it makes sense and includes the following:

    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "deploy": "npm run build && npm run git-commit && npm run git-push",
      "build": "webpack",
      "start": "webpack-dev-server"
    },

Let's add Bootstrap while we're at it:

     npm install --save bootstrap

And run things at `localhost:8080`:

    > npm run start