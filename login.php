<?php
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    //echo $email."******" ;
    //echo $senha;

    if ($email == "cc@gmail.com" && $senha == "aaaa") {
        echo "OK";
        header("Location: benvindo.php");
    } else {
        echo "email ou senha inválidos!";
        header("Location: index.php");
    }

