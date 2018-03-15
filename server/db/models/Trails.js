const bookshelf = require(`./bookshelf`);

class Trail extends bookshelf.Model {
  get tableName() { return `trails` }

}

module.exports = bookshelf.model(`Trail`, Tail);