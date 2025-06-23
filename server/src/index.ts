import https from 'https';
import fs from 'fs';
import { app } from './app';
import { config } from './config';
import { connectDB } from './config/database';



// SSL certificate configuration
const sslOptions = {
  key: fs.readFileSync(config.ssl.key),
  cert: fs.readFileSync(config.ssl.cert)
};

// Create HTTPS server
const server = https.createServer(sslOptions, app);

// Start server
server.listen(config.port, async () => {
  await connectDB();
  console.log(`Server is running on https://localhost:${config.port}`);
}); 