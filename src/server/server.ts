import * as express from 'express';
import * as path from 'path';

export const serverPort: number|string = process.env.PORT || 3000;

const app: express.Application = express();

// Serve the static Angular App files form the dist directory
app.use(express.static(__dirname + '/../../dist/uniquelicious'));

// Serve the index.html file on all other paths
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../dist/uniquelicious/index.html'));
});

// Serve the application at the given port
app.listen(serverPort, () => {
    // Success callback
    console.log(`Listening at http://localhost:${serverPort}/`);
});
