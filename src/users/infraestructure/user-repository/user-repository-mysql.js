const User = require("../../domain/user")
const UserRepository  = require("../../domain/user-repository")
const userDatabase = require("./user-database.json")

class MysqlUserRepository extends UserRepository{

    async getById(id){
        console.log('Using MySQL!');

        const user = userDatabase.find((user) => user._id === id)

        return user ? new User(user._id, user.name, user.skills, user.img) : null;
    }

    async getAll(){
        console.log("using MySQL")

        const users = userDatabase.map((user) => new User(user._id, user.name, user.skills, user.img));

        return users
    }

    
}

module.exports = MysqlUserRepository;