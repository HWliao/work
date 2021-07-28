import {app} from 'electron';
import {join} from 'path';
import type {Knex} from 'knex';
import todos from './schema/todos';


const env = import.meta.env;

const db = createDb(env);

export const initDb = () => {
  const todosPromise = todos(db);
  return Promise.all([todosPromise]).finally(() => console.log('local db inited!'));
};

export default db;

export interface SchemaInit {
  (db: Knex): Promise<any>;
}

function createDb(env:ImportMetaEnv){
  // 本地数据库初始化
  const path = join(app.getPath('appData'), app.getName(), 'data/database.db');

  console.log('local db path:' + path);

  const db: Knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: path,
    },
    debug: env.MODE === 'development',
  });
  return db;
}
