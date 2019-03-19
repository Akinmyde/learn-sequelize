module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnDoe@test.com',
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  down(queryInterface) {
    queryInterface.bulkDelete('Users');
  },
};
