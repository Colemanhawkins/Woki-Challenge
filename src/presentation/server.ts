import express, { Router } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

interface Options {
  port: number;
  routes: Router;
}

export class Server {

  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }
  
  async start() { 

    //* Middlewares
    this.app.use(bodyParser.json());
    this.app.use( compression() )

    //* Routes
    this.app.use( this.routes );

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

}