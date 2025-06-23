import { createLogger, format, transports, Logger } from 'winston';
import path from 'path';
import fs from 'fs-extra';


type LogLevel = 'info' | 'warn' | 'error' | 'debug';

// Format: [YYYY-MM-DD HH:mm:ss] LEVEL: message
const logFormat = format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

function getDynamicLogPath(): string {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');

  const dir = path.join(__dirname, '..', '..', 'logs', year, month, day, hour);
  fs.ensureDirSync(dir);

  return path.join(dir, 'log.txt');
}

// Singleton logger instance
const logger: Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: getDynamicLogPath() })
  ],
  exceptionHandlers: [
    new transports.File({ filename: path.join('logs', 'exceptions.log') })
  ]
});

export function log(level: LogLevel, message: string) {
  logger.log(level, message);
}

