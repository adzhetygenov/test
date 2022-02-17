<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/Exception.php';

	$mail = new PHPMailer(true);

	$mail->CharSet = 'UTF-8';
	$mail->IsHTML(true);

	$mail->setFrom('mail@dzhetygenov.ru', 'Тестовая заявка');
	$mail->addAddress('mail@dzhetygenov.ru');
	$mail->Subject = 'Тестовая заявка';

	$body = 'Имя: ' .$_POST['name']. ' Фамилия: ' .$_POST['second_name']. ' Сообщение: ' .$_POST['message']. '';

	$mail->Body = $body;

	if(!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные успешно отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);

?>