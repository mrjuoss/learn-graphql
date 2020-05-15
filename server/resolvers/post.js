const { gpl } = require('apollo-server-express');

const totalPosts = () => 99;
module.exports = {
  Query: {
    totalPosts
  }
}