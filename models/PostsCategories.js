module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', 
    {},
    { timestamps: false });
  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, { as: 'blogposts',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPosts.belongsToMany(models.Categories, { as: 'categories',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};
