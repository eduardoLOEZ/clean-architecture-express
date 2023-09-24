const UserNotFound = require("../domain/user-not-found")

class UserByIdFinder{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }


    async run(id){
        const user= await this.userRepository.getById(id)

        if(!user) {
            throw new UserNotFound(id);
        }

        return user;
    }
}

module.exports= UserByIdFinder;