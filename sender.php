<?php
    $name = $_POST['name'];
    $country = $_POST['country'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $doors = $_POST['doors'];
    $drawer = $_POST['drawer'];
    $wall = $_POST['wall'];


  
	$to = "mail@exportagtplus.com.ua"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

  
	
	$msg="
    Name: $name /n
    Country: $country /n
    Email: $email /n
    Doors: $doors /n
    Drawer: $drawer /n
    Wall: $wall /n
    Question: $message"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p style="text-align: center">Form Submit</p>
