import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  ssl: {
    key: path.join(__dirname, '../ssl/server.key'),
    cert: path.join(__dirname, '../ssl/server.cert')
  }
} as const; 