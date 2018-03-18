exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company_profile')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('company_profile').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ]);
    });
};
