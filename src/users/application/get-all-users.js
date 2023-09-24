const UserNotFound = require("../domain/user-not-found")

class GetAllUsers{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }


    async run(){
        const data= await this.userRepository.getAll()

        if(!data) {
            console.log("nor found")
        }

        return data;
    }
}

module.exports= GetAllUsers;