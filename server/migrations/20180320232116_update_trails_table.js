
exports.up = function(knex, Promise) {
  return knex.schema.table('trails', table =>{
    table.string('region')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('region')
};
