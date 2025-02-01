<?php

$textValue = $_POST['textValue'];
$servername = "127.0.0.1";
$username = "root";
$password = "TymJerAre123";
$dbname = "todosons";


$conn = mysqli_connect($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$sql = "INSERT INTO Kartki(`tresc`) VALUES ('$textValue')";

?>