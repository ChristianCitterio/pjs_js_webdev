import sqlite, { Database } from 'better-sqlite3';
import path from 'path';

const db: Database = new sqlite(path.resolve('pjs_webdev.db'), { fileMustExist: true });

export function query(sql: string, params: any[]): any[] {
  return db.prepare(sql).all(params);
}
