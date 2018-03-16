
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`rainGaugeStations`, table => {
    table.increments();
    table.string(`name`);
    table.string(`stationId`);
  })
  
};

exports.down = function(knex, Promise) {
  
};
