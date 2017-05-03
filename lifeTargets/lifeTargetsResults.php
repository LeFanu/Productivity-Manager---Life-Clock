<?php

$testResults = $_POST['testResults'];

$returnedResults = array();

array_push($returnedResults, $testResults);

print json_encode($returnedResults);



?>