'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Profile, {
        foreignKey: 'jobId'
      })
      Job.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
    }
  }
  Job.init({
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: DataTypes.STRING,
    position:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    applyLink: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};