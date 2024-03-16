<?php

include("./connection.php");



$getNews=$mysqli->prepare('select * from news');
$getNews->execute();
$getNews->store_result();
$getNews->bind_result($id, $title, $content, $image,$createdAT);



$response['status']="success";
$response["message"]= "todos fetched succesfully";

$news = [];
   
    while ($getNews->fetch()) {
        $new = [
            'id' => $id,
            'title' => $title,
            'content' => $content,
            'createdAt' => $createdAT,
            'image' => $image,
            
        ];
    $news[] = $new;
    }

    
    $response['news']=$news;

echo json_encode($response);