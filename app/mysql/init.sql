CREATE DATABASE IF NOT EXISTS nombre_de_tu_base_de_datos;
USE nombre_de_tu_base_de_datos;
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    confirmar_contrasena VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nombre_usuario, email, contrasena, confirmar_contrasena) 
VALUES ('usuario1', 'usuario1@example.com', 'contrasena1', 'contrasena1');

INSERT INTO usuarios (nombre_usuario, email, contrasena, confirmar_contrasena) 
VALUES ('usuario2', 'usuario2@example.com', 'contrasena2', 'contrasena2');

