<?php 

$name = $_POST['name'];
$city = $_POST['city'];
$mail = $_POST['mail'];
$msg = $_POST['msg'];


$to  = "example@mail.ru";//куда отправлять заявки

$subject = "Заявка"; 

$message = "
	<p><b>Имя:</b> ".$name."</p>
	<p><b>Город:</b> ".$city."</p>
	<p><b>E-mail:</b> ".$mail."</p>
	<p><b>Мессенджер:</b> ".$msg."</p>
";

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: JOB MONEY <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers);


$action = "<div class='man'>".$message."</div>";

$file = '163a0afe7fkb1ba2acd04c11ef0eefe8/mans.php';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);
// Добавляем нового человека в файл
$current .= $action;
// Пишем содержимое обратно в файл
file_put_contents($file, $current);


header("Location: index.php");
?>