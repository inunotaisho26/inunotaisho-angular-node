# InuNoTaisho: Angular

**Important note: The branch of this repo that is `master` is most likely the active version of Angular. Branchs that are `angular#` are probaly not running.**

This is the Angular 4 fullstack version of my website which will be the upgrade for www.ebseiten.com.

Its about 62% of the way complete. It runs so long as you have `mongodb`.

Plans are in the works to migrate the backend from `es5` to `TypeScript`.

First clone this repo. Before taking futher steps, make sure you have `nodejs` and `npm` installed. Then run `npm install` to install all required `node_modules`.

All modules a stored in `node_modules` and `webpack` is used as a module loader.  

Make sure you have `mongodb` installed. `Redis-server` server is no longer required due to the use of `JSON Web Tokens` to handle sessions. Open another terminal tab and create the desired name for your database using **Mongo Shell**. Run the command `mongo` to open the shell and run the `use "DATABASE_NAME"` to create your desired database.
 
For easier access use something like `Robo3T`or something similar. Command line control of `mongo` is also an option, but is not covered by this readme.

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:5000` and you should be there. 

**Documentation**
- http://mongoosejs.com/docs/guide.html
- https://docs.mongodb.com/manual/
- https://expressjs.com/
- https://webpack.js.org/configuration/
- https://angular.io/docs
- http://www.typescriptlang.org/docs/home.html
- https://github.com/DefinitelyTyped/DefinitelyTyped
- http://lesscss.org/

**Supportting Software Documentation**
- https://robomongo.org/