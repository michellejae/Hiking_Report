
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trails', table => {
    table.increments();
    table.integer('objectid_1');
    table.integer('objectid');
    table.integer('quad');
    table.string('district');
    table.string('yrcreated');
    table.decimal('length_m');
    table.integer('elev_range');
    table.string('st_access');
    table.string('start_pt');
    table.string('end_pt');
    table.string('standard');
    table.string('climat');
    table.string('tspt_type');
    table.string('feature');
    table.string('amenitie');
    table.string('use_rest');
    table.string('hazard');
    table.string('comment');
    table.string('trailname');
    table.string('web_link');
    table.string('nah');
    table.string('trail_url');
    table.json('coordinates');
    table.string('trail_num');
    table.string('rain');
    table.string('weather');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trails');
};
