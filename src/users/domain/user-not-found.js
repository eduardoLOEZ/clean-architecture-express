class UserNotFound extends Error{
    constructor(id){
        super(`User not found "${id}"`);
        this.name = 'UserNotFound';
    }
}

module.exports= UserNotFound