const express = require( "express" );
const cors = require( "cors" );
// Database
const dbConnection = require("../database/config.db");
// Routes
const { authRouter } = require("../routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // Connect to DB
    this.dbConnect();

    // Init methods
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    try {
      await dbConnection();
      console.log( `${ '[SERVER.DB-CONNECTION]'.green }: Database ONLINE` );

    } catch ( err ) {
      console.log( `${ '[SERVER.DB-CONNECTION]'.red }: Error details - ${ err }` );
    }
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

module.exports = Server;
