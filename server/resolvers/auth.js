const { gql } = require('apollo-server-express');

const me = () => 'Mohamad Arif Mujaki';

module.exports = {
  Query : {
    me
  }
}