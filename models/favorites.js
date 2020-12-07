'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.favorites.belongsTo(models.user)
    }
  };
  favorites.init({
    userID: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    restaurant: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};