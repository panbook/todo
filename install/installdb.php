<?php

$servername = "localhost";
$username = "todoadmin";
$password = "TymJerAreSzefy";
$dbname = "todosons";


$conn = new mysqli($servername, $username, $password, $dbname);


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
