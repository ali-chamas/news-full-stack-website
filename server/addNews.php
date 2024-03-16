<?php

include("./connection.php");

$title=$_POST['title'];
$content=$_POST['content'];
$image=$_POST['image'];


$addTodo=$mysqli->prepare("insert into news (title,content,image) values (?,?,?)");
$addTodo->bind_param('sss',$title,$content,$image);
$addTodo->execute();
$response['status']='success';
$response['message']= 'news '.$title.' created';

echo json_encode($response);   