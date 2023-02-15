<?php

include 'php1.php'; // trabalhar com outro arquivo de php //require mesma funcao 

$idadeList = [ 21, 23, 15, 56, 89, 13];

for ($i = 0; $i < 6; $i++){
    echo $idadeList[$i];
};
 // echo count($idadelist) para saber a quantidade da lista que tem


 //------------------------------------------------------------------------

 $conta1 = {
    'titular' = 'Pamela'
    'saldo' = 1000000000000000000000000000
 }

 $conta2 = {
    'titular' = 'Augusto'
    'saldo' = 'sobrevivendo'

 }

 $conta3 = {
    'titular' = 'outra pessoa'
    'saldo' = 'suficiente'
 }

$contascorrentes =  {
    $conta1,
    $conta2,
    $conta3;
}


 foreach($contascorrentes as $conta){
    echo $conta[titular];
 }

unset ($funcao); // para remover uma variavel 

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   
</body>
</html>