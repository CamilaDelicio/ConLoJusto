import express from "express"
//dirname:sino no funciona por el moduele
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//servidor//
const app = express();
app.set("port",4000);
app.listen(app.get("port"));//escuchar el puerto
console.log("Servidor corriendo en puerto",(app.get("port"))) //servidor para protger los datos, hacerlo en backend(adm sin darle acceso)
<<<<<<< HEAD

//Configuracion//
app.use(express.static(__dirname + "/public"));

=======
>>>>>>> c4a4ff11c7307babb2bd182b0a9c9fb8e0ff0e4b
//Rutas: conectar con la pagina//
app.get("/",(req,res)=> res.sendFile(__dirname +"/pages/login.html")) //que se gete la pagina, dando funcion de respuesta y consulta
app.get("/register",(req,res)=> res.sendFile(__dirname +"/pages/register.html"))

<<<<<<< HEAD



=======
//Configuracion//
app.use(express.static(__dirname + "/public"));
>>>>>>> c4a4ff11c7307babb2bd182b0a9c9fb8e0ff0e4b
