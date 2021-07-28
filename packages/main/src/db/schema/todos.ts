import type {SchemaInit} from '../db';

const todos: SchemaInit = (db) => {
  return db.schema
    .hasTable('todos')
    .then((exists) => {
      if (!exists) {
        return db.schema.createTable('todos', (tableBuilder) => {
          tableBuilder.increments('id').comment('主键');
          tableBuilder.string('title', 256).defaultTo('').comment('标题');
          tableBuilder.text('content').defaultTo('').comment('内容备注');
          tableBuilder.dateTime('handle_date',{precision:3}).defaultTo(null).comment('处理时间');
          tableBuilder.integer('status').defaultTo(0).comment('状态 0 新建 1 待处理 2 已处理');
          tableBuilder.integer('is_delete').defaultTo(0).comment('是否已经删除 0 未删除 1 已删除');
          tableBuilder.dateTime('create_date',{precision: 3}).defaultTo(db.fn.now()).comment('创建时间');
          tableBuilder.dateTime('last_upd_date',{precision: 3}).defaultTo(db.fn.now()).comment('更新时间');
        });
      }
    });
};

export default todos;
