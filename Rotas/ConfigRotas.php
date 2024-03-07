<?php
include_once __DIR__ .'/Rotas.php';

Rotas::add('/', 'view/home.php');
Rotas::add('/home', 'view/home.php');
Rotas::add('/projetos', 'view/projetos.php');
Rotas::add('/quemsomos', 'view/quemsomos.php');
Rotas::add('/contatos', 'view/contatos.php');
Rotas::add('/site_theskyline', 'view/site_theskyline.php');
Rotas::exec();
?>

