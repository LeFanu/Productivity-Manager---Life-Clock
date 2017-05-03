<?php





    // To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: PDMTests@pdmtests-com.stackstaging.com";


$to = 'lefanu@vivaldi.net';

$name = $_POST['name'];
$emailFrom = $_POST['email'];
$message = $_POST['message'];
echo $message;
echo $name;
echo $emailFrom;

$subject = "Bug Submission Report from: ".$name;

// Mail it



if(mail($to,$subject,$message,$headers)){
    $confirmation =  true;
    array_push($jsonConfirmation, $confirmation);
    print json_encode($jsonConfirmation);

} else {
    $confirmation =  false;
    array_push($jsonConfirmation, $confirmation);
    //array_push($jsonConfirmation, $error);
    print json_encode($jsonConfirmation);

}




?>