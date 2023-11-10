<?php
// procesar_login.php

// Establecer la conexión con la base de datos (ajusta los valores según tu configuración)
nombredeservidor = "tu_servidor_mysql";
nombredeusuario = "tu_usuario_mysql";
contraseña = "tu_contraseña_mysql";
BD = "tu_base_de_datos";

$conn = new mysqli($servername, nombredeusuario, contraseña, BD);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Consultar la base de datos para verificar las credenciales (ejemplo muy básico)
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$usuario' AND contrasena = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Inicio de sesión exitoso";
} else {
    echo "Credenciales incorrectas";
}

// Cerrar la conexión
$conn->close();
?>
