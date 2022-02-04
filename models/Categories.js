module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    postId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Categories;
};
