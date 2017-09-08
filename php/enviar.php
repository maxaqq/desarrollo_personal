<?php
    $destino = "max.light.night@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Nombre: ".$nombre."\nCorreo: ".$correo."\nTelefono: ".$telefono."\nMensaje: ".$mensaje;
    mail($destino,"Comentario del Blog",$contenido);
    header("location:respuesta.html");


 ?>
