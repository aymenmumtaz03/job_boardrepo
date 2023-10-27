import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/database';

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;

  public static associate(models: any) {
    // Define associations here
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
