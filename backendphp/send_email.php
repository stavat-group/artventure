<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type,X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Stop processing here for OPTIONS requests
}

echo "Email sent successfully!";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'thevasudev31@gmail.com';
    $mail->Password = 'hdvr ueqe yteu gjbf';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('thevasudev31@gmail.com', 'Vasudev');
    $mail->addAddress('roshan.5.ro.45@gmail.com', 'Roshan');
    $mail->Subject = 'Test Email from PHPMailer';
    $mail->Body = 'This is a test email sent using PHPMailer with SMTP.';

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Email failed: {$mail->ErrorInfo}";
}
?>