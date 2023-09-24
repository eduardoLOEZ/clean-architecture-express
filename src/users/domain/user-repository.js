const User = require("./user")

class UserRepository{
    getById(id){
        return id ? User: null
    }

    getAll(){
        return Promise.resolve([]);
    }
}

module.exports= UserRepository