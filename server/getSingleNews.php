<?php

include("./connection.php");

$id=$_GET["id"];

$getNews=$mysqli->prepare('select * from news where id=?');
$getNews->bind_param('i',$id);
$getNews->execute();
$getNews->store_result();
$getNews->bind_result($id, $title, $content, $image,$createdAT);
$getNews->fetch();



$response['status']="success";
$response["message"]= "todos fetched succesfully";

$response["id"]=$id;
$response['title']=$title; 
$response['content']=$content;
$response['image']=$image;
$response['createdAt']=$createdAT;


    


echo json_encode($response);