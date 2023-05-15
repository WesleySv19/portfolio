<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['msg'];
    $send_date = date('d/m/Y');
    $send_hour = date('H:i:s');

    // Campo E-mail
    $file = "
    <html>
        <p><strong>Nome:</strong> $name</p>
        <p><strong>E-mail:</strong> $email</p>
        <p><strong>Mensagem:</strong> $message</p>
        <p>Esse e-mail foi enviado em<strong>$send_date</strong>Às<strong>$send_hour</strong></p>
    </html>
    
    ";

    // Para quem o email será enviado
    $destiny = 'wesleyysilvaa1912@gmail.com';
    $subject = 'Contato pelo site.';

    
  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $name <$email>";

  //Enviar
  mail($destiny, $subject, $file, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../contact.html'>";
?>