<?php
include_once __DIR__ . '/Constantes.php';

class Rotas{

	private static $rotas = array();
	private static $erro = '';
	
	public static function addExpReg($rota, $destino){
		self::$rotas[$rota] = $destino;
	}
	
	public static function add($rota, $destino){
		self::$rotas[''.$rota.'(/?)'] = $destino;
	}
			
	public static function addGetInt($rota, $destino, $variavel){
		self::$rotas[''.$rota.'/(?P<'.$variavel.'>\d+)'] = $destino;
	}
	
	public static function addGet($rota, $destino, $variaveis){
		$parametros = '';
		if(is_array($variaveis)){			
			foreach ($variaveis as $var){
				$parametros .= '/(?P<'.$var.'>\w+)';
			}
		}else{
			$parametros = '/(?P<'.$variaveis.'>\w+)';
		}
		self::$rotas[''.$rota.$parametros.''] = $destino;
	}
	
	public static function erro($destino){
		self::$erro = $destino;
	}
	
	public static function exec(){
		$uri = str_replace(rtrim(HOME, '/'),'',$_SERVER['REQUEST_URI']);
		foreach(self::$rotas as $rota=>$destino){
			$padrao  = '@^'.$rota.'$@';
			if(preg_match($padrao,$uri,$_GET)){
				include($destino);
				exit();
			}
		}

		// Rota não encontrada
		http_response_code(404);
		if(is_file(self::$erro)){
			include(self::$erro);
			exit();
		}else{
			echo "<h1>404 Página não Encontrada.</h1>";
			exit();
		}
	}
		
}
?>
			
