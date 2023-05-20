<?php

    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', 587);
    ini_set('sendmail_from', 'localhost');

 if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    // Dados vindos do formulário
    $email = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['msg'];

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<strong>Assunto:</strong><h2> $subject</h2>
             <p><strong>Nome:</strong> $name</p>
             <p><strong>Mensagem:</strong> $message</p>";


    $to = "wesleyysilvaa1912@gmail.com";

    if (mail($to, $body, $headers)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Ocorreu um erro ao enviar a mensagem.';
    }
}



?>




