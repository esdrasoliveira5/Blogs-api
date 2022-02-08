module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
