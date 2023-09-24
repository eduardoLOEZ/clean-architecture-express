const {config} = require("../../config")
const UserByIdFinder = require("../application/user-byId-finder");
const GetAllUsers = require("../application/get-all-users")
// const  UserRepository  = require("../domain/user-repository");
const  UserGetController  = require("./http/user-get-controller");
const MongoUserRepository = require("./user-repository/user-repository-mongo")
const MysqlUserRepository = require("./user-repository/user-repository-mysql")

const getUserRepository = () => {
    switch (config.database) {
      case "mongo":
        return new MongoUserRepository();
    //   case "elastic":
    //     return new ElasticUserRepository();
      case "mySQL":
        return new MysqlUserRepository();
      default:
        throw new Error("Invalid Database type");
    }
  };

const userByIdFinder = new UserByIdFinder(getUserRepository())
const getAllUsers = new GetAllUsers(getUserRepository()); 

const userGetController  = new UserGetController(userByIdFinder, getAllUsers)



module.exports = {
    userGetController,
};