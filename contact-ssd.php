<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
/*if(isset($_POST['send']) && !empty($_POST['send'])){

    $name = addslashes($_POST['name']);
    $city = addslashes($_POST['city']);
    $email = addslashes($_POST['email']);
    $phone = addslashes($_POST['phone']);
    $subject = addslashes($_POST['subject']);
    $how = addslashes($_POST['how']);
    $message = addslashes($_POST['message']);
*/
    foreach($_POST as $campo => $valor){
       echo "- ". $campo ." = ". $valor;
    }

//}
?>