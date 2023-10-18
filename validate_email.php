<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $date = date('Y/m/d, H:i:s');
        $logFile = 'log.csv';

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $message = 'Email validated';
            $error = false;
            $logMessage = "$date, $email, true\n";
        } else {
            $message = 'Email is not valid';
            $error = true;
            $logMessage = "$date, $email, false\n";
        }

        // Append to log file
        file_put_contents($logFile, $logMessage, FILE_APPEND);

        echo json_encode(['error' => $error, 'message' => $message]);
    }
}
?>
