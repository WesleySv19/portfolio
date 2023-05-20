<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../lib/phpMailer/Exception.php';
    require '../lib/phpMailer/PHPMailer.php';
    require '../lib/phpMailer/SMTP.php';

    echo $email = $_POST['email'];  
    echo $name = $_POST['name'];
    echo $subject = $_POST['subject'];
    echo $message = $_POST['msg'];
  
if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->IsHTML(true); 
    $mail->Port = 587;


    $mail->addAddress($email, 'Wesley');
    $mail->Subject = $_POST['subject'];
    $mail->Body = $_POST['msg'];

    if(!$mail->Send())
    echo "Erro ao enviar Email:" . $mail->ErrorInfo;

}


?>




