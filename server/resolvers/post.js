const { gpl } = require('apollo-server-express');

module.exports = {
  Query: {
    totalPosts: () => 42
  }
}