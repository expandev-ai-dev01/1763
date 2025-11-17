export interface LogContext {
  correlationId?: string;
  operation?: string;
  [key: string]: any;
}

export class Logger {
  private static formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(context)}` : '';
    return `[${timestamp}] [${level}] ${message}${contextStr}`;
  }

  static info(message: string, context?: LogContext): void {
    console.log(this.formatMessage('INFO', message, context));
  }

  static warn(message: string, context?: LogContext): void {
    console.warn(this.formatMessage('WARN', message, context));
  }

  static error(message: string, context?: LogContext): void {
    console.error(this.formatMessage('ERROR', message, context));
  }

  static debug(message: string, context?: LogContext): void {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage('DEBUG', message, context));
    }
  }
}

export const logger = Logger;
