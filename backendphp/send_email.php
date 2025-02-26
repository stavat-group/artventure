<?php

// Handle preflight request for OPTIONS method (required for CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow frontend domain
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allowed methods
    header("Access-Control-Allow-Headers: Content-Type, X-Requested-With"); // Allowed headers
    http_response_code(200);
    exit; // Respond immediately to preflight request
}

// Set CORS headers before other output
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow your frontend domain
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow the methods
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With"); // Allow the necessary headers

// $name = $_POST["name"];
$name = "Vasudev";
// $email = $_POST["email"];
$email = "vasudev082002@gmail.com";
// $subject = $_POST["subject"];
$subject = "Test Subject";

// $message = $_POST["message"];
$message = "Test Message";
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// SMTP setup and email sending logic

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "thevasdev31@gmail.com";
$mail->Password = "Vasudev@1234";

$mail->setFrom($email, $name);
$mail->addAddress("dave@example.com", "Dave");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");
?>
