const express = require( "express" );
const cors = require( "cors" );
// Routes
const { authRouter } = require("../routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // Init methods
    this.middlewares();
    this.routes();
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
