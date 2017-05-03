<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Personal Development Manager Tests</title>

    <meta name="author" content="Karol Pasierb">
    <meta name="description" content="">
    <!--<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">-->
    <link href="https://fonts.googleapis.com/css?family=Chewy|Cinzel|Gentium+Basic|Patrick+Hand|Arimo" rel="stylesheet">

    <link rel="stylesheet" href="standard.css">


    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery-ui.min.js"></script>
    <script type="text/javascript" src=""></script>

</head>


<body>
    <div id="wrapper" >
        <div id="mainContent">
            <h1 id="PDMtests">Personal Development Manager</h1>
            <h2>Bug Report Submission</h2>
            <p>I appreciate your feedback, suggestions, requests and sharing any other thoughts.
                Most importantly I'd like to know all the issues you have discovered, so I could fix it and make this page even better.
            </p>

            <form action="bugReportSubmission.php" method="post">
                <label for="name" >Your name: <br></label>
                <input id="name" type="text" name="name"  required placeholder="Enter your name please..." />
                <br>
                <label for="email">Your email: <br></label>
                <input id="email" type="email" name="email"  />
                <br>
                <label for="message">Your message, thoughts, bugs discovered:<br></label>
                <br>
                <textarea id="message" required rows="10" name="message"></textarea>
                <br>
                <label for="submit"></label>
                <input id="submit" type="submit" name="submit" />


            </form>
    </div>
</body>
</html>