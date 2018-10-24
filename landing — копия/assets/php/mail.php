<?php if (isset($_POST["dfotpr"]) && isset($_POST["antirobotpro"]) && $_POST["antirobotpro"] == "gdfg56FG423er") { 
$to = "beats.tapping@gmail.com"; 
$subject = "Письмо с вашего сайта"; 
$charset = "utf-8"; 
$un = strtoupper(uniqid(time()));
$head = "Mime-Version: 1.0\r\n"; 
$head .= "Content-Type:multipart/mixed;"; 
$head .= "boundary=\"----------".$un."\"\n\n"; 

$body = "------------".$un."\nContent-Type:text/html; charset=$charset\r\n";

$msg = 
"*Текстовое поле: ".$_POST["elemnamea0"]."\n<br />".
"*Текстовое поле: ".$_POST["elemnamea1"]."\n<br />".
"*Сообщение: ".$_POST["elemnameb0"]."\n<br />".
"";

$body .= "Content-Transfer-Encoding: 8bit\n\n".$msg."\n\n";

if (is_uploaded_file($_FILES["elemnameg0"]["tmp_name"])) { 
$body .= "------------".$un."\n"; 
$body .= "Content-Type: ".$_FILES["elemnameg0"]["type"].";"; 
$body .= "name=\"".basename($_FILES["elemnameg0"]["name"])."\"\n"; 
$body .= "Content-Transfer-Encoding:base64\n"; 
$body .= "Content-Disposition:attachment;"; 
$body .= "filename=\"".basename($_FILES["elemnameg0"]["name"])."\"\n\n"; 
$body .= chunk_split(base64_encode(file_get_contents($_FILES["elemnameg0"]["tmp_name"])))."\n"; 
} 

mail($to, $subject, $body, $head);
}
?>