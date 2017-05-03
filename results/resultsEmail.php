<?php


$error ="";
$jsonConfirmation = array();


    if (!$_POST['email']) {

        $error .= "An email address is required. ";

    }



    if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {

        $error .= "The email address is invalid. Email was not sent. ";

    }




    if ($error != "") {

        //TODO write code for displaying error while email is wrong
        array_push($jsonConfirmation, false);
        array_push($jsonConfirmation, $error);
        print json_encode($jsonConfirmation);


    }
    else
    {

            // To send HTML mail, the Content-type header must be set
                    $headers  = 'MIME-Version: 1.0' . "\r\n";
                    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                    $headers .= "From: PDMTests@pdmtests-com.stackstaging.com";

                    $message = $_POST['url'];
                    $to = $_POST['email'];

                    $subject = 'PDM Life Clock Results!';

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

                   /* array_push($jsonConfirmation, true);
                    array_push($jsonConfirmation, $error);
                    print json_encode($jsonConfirmation);*/


    }




?>
