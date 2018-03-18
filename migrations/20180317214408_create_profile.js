exports.up = function(knex, Promise) {
  return knex.migrate;
};

exports.down = function(knex, Promise) {};
