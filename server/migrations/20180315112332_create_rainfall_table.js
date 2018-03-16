
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`rainFall`, table => {
    table.increments();
    table.string(`name`);
    table.string(`stationId`);
    table.decimal(`3-HR`);
    table.decimal(`6-HR`);
    table.decimal(`12-HR`);
    table.decimal(`24-HR`);
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`rainFall`);
};
