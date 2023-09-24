const UserNotFound = require('../../domain/user-not-found');

class UserGetController {
  constructor(userByIdFinder, userGetAll) {
    this.userByIdFinder = userByIdFinder;
    this.userGetAll = userGetAll;
  }

  async run(req, res) {
    const { id } = req.params;

    try {
      const user = await this.userByIdFinder.run(id);

      if (!user) {
        // No se encontró el usuario, devuelve un 404
        throw new UserNotFound(id);
      }

      // Se encontró el usuario, devuelve un 200
      return res.status(200).send(user);
    } catch (error) {
      // Maneja otras excepciones y errores aquí
      console.error(error); // Registra el error en la consola
      return res.status(500).send({ error: 'Internal Server Error' });
    }
  }

  async getAll(req,res) {
    try {
      const users = await this.userGetAll.run();
      return res.status(200).send(users);
    } catch (error) {
      // Maneja excepciones y errores aquí
      console.error(error); // Registra el error en la consola
      return res.status(500).send({ error: 'Internal Server Error' });
    }
  }
  
}

module.exports = UserGetController;
