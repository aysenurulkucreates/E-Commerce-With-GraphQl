const crypto = require("crypto");

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: crypto.randomUUID(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
};
