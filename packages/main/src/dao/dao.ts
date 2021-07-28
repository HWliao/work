interface Daos {
  [key: string]: Dao;
}

interface Dao {
  [key: string]: (...args: any[]) => Promise<any>;

}

export default <Daos>{};
