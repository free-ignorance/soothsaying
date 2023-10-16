import { createLogger, transports, format } from "winston";

// Create a logger instance
const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, metadata }) => {
          const meta = JSON.stringify(metadata) != "{}" ? JSON.stringify(metadata) : '';
          return `[${timestamp}] ${level}: ${message}. ${meta}`;
        })
      ),
    }),
  ],
  format: format.combine(format.metadata(), format.timestamp()),
});

export { logger };