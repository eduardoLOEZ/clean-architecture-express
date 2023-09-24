const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Campo para el nombre del usuario
  skills: [String],  // Campo para las habilidades (una matriz de cadenas)
  img: { type: String, required: true },  // Campo para la URL de la imagen
},
{ collection: "marvel" }
);



// Crea el modelo User basado en el esquema
const UserModel = mongoose.model('User', userSchema);

// Función para conectar a la base de datos
async function connectToMongoDB() {
    try {
      await mongoose.connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });   
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
  
  module.exports = {
    UserModel,
    connectToMongoDB,
  }