'use strict';
import { Model } from 'sequelize';
// eslint-disable-next-line no-undef
export default (sequelize, DataTypes) => {
  class Job_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job_post.belongsTo(models.Company, {
        foreignKey: 'company_id', 
      });

      Job_post.belongsTo(models.User, {
        foreignKey: 'user_id', 
      });

    }
  }
  Job_post.init({
    title: DataTypes.STRING,
    company_name: DataTypes.STRING,
    location: DataTypes.INTEGER,
    industry: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    benefits: DataTypes.STRING,
    discription: DataTypes.STRING,
    company_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },

    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },


  }, {
    sequelize,
    modelName: 'job_post',
  });
  return Job_post;
};