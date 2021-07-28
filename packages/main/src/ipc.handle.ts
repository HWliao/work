import {ipcMain} from 'electron';
import {initDb} from './db/db';
import dao from './dao/dao';

/**
 * 数据库先关远程调用
 */
ipcMain.handle('rpc-db', async (event, ...args) => {
  const method = args[0];
  if (method === 'init') {
    return await initDb();
  }
  throw new Error(`rpc-db handle fail! there is no target method:${method}`);
});
/**
 * 数据访问接口远程调用
 */
ipcMain.handle('rpc-dao', async (event, ...args) => {
  const table = <string>args[0];
  const method = <string>args[1];
  const restArgs: any[] = args.slice(2);
  const fns = dao && dao[table];
  const fn = fns && fns[method];
  if (fn) {
    return await fn(...restArgs);
  }
  throw new Error('rpc-dao fail! there is no');
});
