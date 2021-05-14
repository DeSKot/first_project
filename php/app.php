<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$service = $_POST['service'];
$message = $_POST['message'];

$array = [$name, $tel, $service, $message, $email];

foreach ($array as $value) {
  $value = htmlspecialchars($value);
  $value = urldecode($value);
  $value = trim($value);
}

if (mail("mail@gmail.com", "Прошу связатся со мной", "Мой телефон" . $fio . ". E-mail: " . $email . "Сообщение" . "<br>" . $message, "From:" . $email . "\r\n")) {
  echo "Сообщение отправлено";
} else {
  echo "При отправке сообщения возникли ошибки";
};
