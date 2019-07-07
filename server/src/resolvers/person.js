const Person = require('../models/person');
const { createDocument, deleteDocument, getAllDocuments, getDocument, updateDocument } = require('../utils/database');

module.exports = {
  Query: {
    getPerson: async (_, { input: { _id } }) => getDocument(Person, _id),
    getAllPersons: async () => {
      return getAllDocuments(Person);
    }
  },
  Mutation: {
    createPerson: async (_, { input }) => {
      return createDocument(Person, input);
    },
    updatePerson: async (_root, { input: { _id, person } }) => {
      return updateDocument(Person, _id, person);
    },
    deletePerson: async (_root, { input: { _id } }) => {
      return deleteDocument(Person, _id);
    }
  },
};
