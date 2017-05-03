<?php

$testResults = $_POST['testResults'];

if(!array_key_exists('testResults', $_POST)){
    print "<p>FUCKK!!!!!!!!!!!!!!!!!!</p> ";
    exit();
}

/*$returnedResults = array();

array_push($returnedResults, $testResults);*/





?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Results</title>

    <meta name="author" content="Karol Pasierb">
    <meta name="description" content="">
    <!--<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">-->
    <link href="https://fonts.googleapis.com/css?family=Chewy|Cinzel|Gentium+Basic|Patrick+Hand|Arimo" rel="stylesheet">

    <link rel="stylesheet" href="results.css">



    <script type="text/javascript" src="../jquery.min.js"></script>



    <script type="text/javascript" src="results-jQuery.js"></script>

</head>


<body>
    <div id="mainContent">
        <h1 id="PDMtests">Personal Development Manager</h1>
        <h2>Congratulations!!!
            <br>
            <br>
            Below are your results for the Life Clock Test!
        </h2>

        <?php
            echo $testResults;
        ?>
    </div>

    <div id="personalized">
        <p>This is the end of the test and now you can save your results either by printing this page, creating PDF or sending the results to your email.</p>
        <!--<label>Do you want to personalize your test and get the final results?</label>
        <input type="checkbox" id="personalCheckbox" name="personalCheckbox" />-->
        <!--<span class="checkBox"></span>-->
        <form id="sendEmailForm" method="post" action="">
            <input type="hidden" id="resultsContent" name="resultsContent" value="" />
            <input type="email" id="email" name="email" placeholder="Enter your email..."/>
            <input type="button" id="send_email" name="send_email" value="Send Email">
            <input type="button" id="createPDFbutton" name="createPDF" value="Create PDF">
        </form>

    </div>
    <div id="thankYou">
        <h4>Thank you for taking the test.</h4>
        <p>We hope you enjoyed the test and you liked what you could do with it.
            Please remember you have done that for yourself and these results can help you set priorities in regards to things you want to do in life.
            <br> You can return to the main page <a href="../index.html">here</a>.
        </p>

    </div>

</body>
</html>
