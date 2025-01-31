<?php

$servername = "localhost";
$username = "root";
$password = "TymJerAre123";
$dbname = "todosons";


$conn = mysqli_connect($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "CREATE TABLE Kartki (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
tresc varchar(30)
)";



if ($conn->query($sql) === TRUE) {
  echo "Table Kartki created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
