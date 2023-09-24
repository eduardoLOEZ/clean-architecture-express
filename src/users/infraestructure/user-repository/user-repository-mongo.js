const User = require("../../domain/user")
const { UserModel, connectToMongoDB } = require('../DB/mongo-config');
// const mongoose = require("mongoose")
const UserRepository  = require("../../domain/user-repository")
// const userDatabase = require("./user-database.json")

class MongoUserRepository extends UserRepository{
    constructor() {
        super();
        // Conecta a la base de datos MongoDB al instanciar el repositorio
        connectToMongoDB();
    }

    async getById(id){
        console.log('Using Mongo!');

        // if(!UserModel.Types.ObjectId.isValid(id)){
        //   return null

        // }


        const user = await UserModel.findOne({ _id: id });

        return user ? new User(user._id, user.name, user.skills, user.img) : null;
    }

    async getAll() {
        try {
          
          const users = await UserModel.find();
    
          return users
        } catch (error) {
          throw error;
        }
      }
}

module.exports = MongoUserRepository;