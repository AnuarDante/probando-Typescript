import App from './app';
import database from './database';

//Iniciar servidor
database();
const app = new App();
app.start();