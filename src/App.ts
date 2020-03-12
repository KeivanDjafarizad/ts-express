import express from 'express';

// const app = express();

// const port = 3000;

// const server = app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

export default class App {
  public express: express.Express;
  public constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private async mountRoutes(): Promise<void> {
    const ping = express.Router();

    ping.get('/ping', (req, res): void => {
      const result: object = { message: 'Pong' };
      res.json(result);
    });

    this.express.use('/', ping);
  }
}
