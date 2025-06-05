<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = isset($_POST['full_name']) ? htmlspecialchars($_POST['full_name']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $message_content = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';
    $choice = isset($_POST['choice']) ? htmlspecialchars($_POST['choice']) : '';
    $from = 'nazaim-vit.com';

    if (!empty($full_name) && !empty($phone) && !empty($email) && !empty($message_content) && !empty($choice)) {
        $contact_method = ($choice == 'phone') ? 'По телефону' : 'По электронной почте';

        $email_message = "Пришло сообщение с сайта Nazaim.VIT:\n";
        $email_message .= "Имя отправителя: $full_name\n";
        $email_message .= "Телефон: $phone\n";
        $email_message .= "Емейл: $email\n";
        $email_message .= "Сообщение: $message_content\n";
        $email_message .= "Предпочтительный вид связи: $contact_method";

        $headers = "From: $from\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

        $mailTo = mail('rusacov91@mail.ru', 'Сообщение с сайта Nazaim.VIT', $email_message, $headers);

        if ($mailTo) {
            header('Location: index.html?success=1');
            exit;
        } else {
            echo 'Ошибка при отправке сообщения.';
        }
    } else {
        echo 'Пожалуйста, заполните все поля.';
    }
} else {
    echo 'Некорректный метод запроса.';
}

?>