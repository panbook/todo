<?php


$servername = "sql.freedb.tech";
$username = "freedb_todoadmin";
$password = "GhxSZq8$5BavF5#";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";





?>