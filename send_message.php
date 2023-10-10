<?php
// Подключение к базе данных (замените параметры на ваши)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ChatBot";

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
  die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Получение сообщения из POST-запроса
$message = $_POST['message'];

// Подготовка и выполнение SQL-запроса для вставки сообщения в базу данных
$sql = "INSERT INTO chat_text (text) VALUES ('$message')";
if ($conn->query($sql) === TRUE) {
//   echo "Сообщение успешно сохранено.";
} else {
  echo "Ошибка при сохранении сообщения: " . $conn->error;
}

// Закрытие подключения к базе данных

$conn->close();

?>
