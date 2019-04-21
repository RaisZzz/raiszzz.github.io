<?php
if (!isset($_REQUEST)) { return; }

$confirmation_token = '2b3ca431';
$token = '5c4d11259c96268f64e670d19a39da68f4542f67e7df7f222e22bc1fd1fc22050f252174af8dfc14f58e7'; 

$data = json_decode(file_get_contents('php://input'));
switch ($data->type) {
	case 'confirmation':
	echo $confirmation_token; 
	break;
	case 'message_new':
		$user_id = $data->object->user_id;
		$user_info = json_decode(file_get_contents("https://api.vk.com/method/users.get?user_ids={$user_id}&access_token={$token}&v=5.0"));
		$user_name = $user_info->response[0]->first_name; 
		$request_params = array( 
		'message' => "Hello, {$user_name}!", 
		'user_id' => $user_id, 
		'access_token' => $token, 
		'v' => '5.0' 
		);
		$get_params = http_build_query($request_params);
	file_get_contents('https://api.vk.com/method/messages.send?'. $get_params);
	echo('ok');
	break;
} 
?> 