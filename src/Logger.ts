import { EventEmitter } from 'node:events';
import { appendFile, copyFile, stat, truncate } from 'node:fs/promises';
import { parse } from 'node:path';

class Logger extends EventEmitter {
  private readonly filename: string;
  private readonly maxSize: number;
  private readonly logQueue: string[];
  private writing: boolean;
  constructor(filename: string, maxSize: number) {
    super();
    this.filename = filename;
    this.maxSize = maxSize;
    this.logQueue = [];
    this.writing = false;
  }

  private writeLog = async () => {
    if (!this.logQueue.length) {
      this.writing = false;
      return;
    }

    const message = this.logQueue.pop();
    this.emit('messageLogged', message);

    await this.checkFileSize();
    if (message) {
      await appendFile(this.filename, `${message}\n`);
      await this.writeLog();
    }
  };

  private rotateLog = async () => {
    const name = parse(this.filename).name;
    await copyFile(this.filename, `${name}.bak`);
    await truncate(this.filename, this.maxSize);
  };

  private checkFileSize = async () => {
    const size = await this.getFileSize();
    if (size > this.maxSize) {
      await this.rotateLog();
    }
  };

  private getFileSize = async () => {
    try {
      const stats = await stat(this.filename);
      return stats.size;
    } catch {
      return 0;
    }
  };

  public log(message: string) {
    this.logQueue.unshift(message);
    if (!this.writing) {
      this.writing = true;
      this.writeLog().catch(e => console.log(e));
    }
  }
}

export default Logger;
