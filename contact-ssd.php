<?php
    // Permitiendo Acceso de otros Websites
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    // Constructor POST
    $cont=0;
    $toQuery='';
    $toMail='';
    foreach($_POST as $campo => $valor){
        // > To Query
        if($cont!=0){$toQuery .= ',';}
        $toQuery .='"'.addslashes($valor).'"';
        // To Email
        $toMail .= ucfirst($campo).":$valor<br>";
        //
        $cont++;
    }

      // Conexion a Base de Datos
   include('../db/db-ssd.php');
    
    // Almacenado en Base de Datos 
    $query = "INSERT INTO contact_SSD(name,city,email,phone,subject,how,message) VALUES(".$toQuery.")";
    $insert = $mysqli->query($query) or die('SSD'.mysqli_error($mysqli));


    // Email
    $destinatario = "sinergia.solucionesdigitales@gmail.com";
    $cabeceras = 'From: Contacto Website <contacto@unasolucion.digital>' . "\r\n";
    $cabeceras .= 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $cabeceras .= 'X-Priority: 1 (Highest)' . "\r\n"; 
    $cabeceras .= 'X-MSMail-Priority: High' . "\r\n"; 
    $cabeceras .= 'Importance: High' . "\r\n"; 
    $enviar = mail($destinatario,'Contacto - Website ('.date('l d, m/Y').' - '.date('H:i:s').')',$toMail,$cabeceras);

    if($enviar && $insert){
        echo '1';
    }

?>