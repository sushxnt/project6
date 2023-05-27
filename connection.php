<?php
    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'futsal';
    // Try and connect using the info above.
    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

    if ( mysqli_connect_error()) {
        // If there is an error with the connection, stop the script and display the error.
        echo "<script>alert('Cannot connect to the database.);</script>";
        exit();
    }
?>