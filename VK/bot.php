<?php
if (!isset($_REQUEST)) { return; }

$confirmation_token = '2b3ca431';
$token = '5c4d11259c96268f64e670d19a39da68f4542f67e7df7f222e22bc1fd1fc22050f252174af8dfc14f58e7'; 

$data = json_decode(file_get_contents('php://input')); // vkbot | raiszzz | GFIFgfif2002
switch ($data->type) {
	case 'confirmation':
	echo $confirmation_token; 
	break;
	case 'message_new':
		$user_id = $data->object->user_id;
		$user_info = json_decode(file_get_contents("https://api.vk.com/method/users.get?user_ids={$user_id}&access_token={$token}&v=5.0"));
		$user_name = $user_info->response[0]->first_name;

		$user_stat = GetUserStat($user_id);

		sendmsg($user_id, '{$user_name}, hello! You have: {$user_stat["money"]}$');
	break;
}

function sendmsg($user_id, $message){
	global $token;
	$request_params = array( 
		'message' => "Hello, {$user_name}!", 
		'user_id' => $user_id, 
		'access_token' => $token, 
		'v' => '5.0' 
	);
	file_get_contents('https://api.vk.com/method/messages.send?'. $get_params);
}

function GetUserStat($user_id){
	$link = new mysqli('localhost', 'vkbot', 'GFIFgfif2002', 'raiszzz');
	$result = mysqli_query($link, "SELECT * FROM 'accounts' WHERE 'uid' = '".$user_id."'");
	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
	if($row['uid'] == $user_id) return $row;
	else{
		mysqli_query($link, "INSERT INTO 'accounts'('uid','money','firstMsg') VALUES ('".$user_id."', '500', '".time()."')");
		$result = mysqli_query($link, "SELECT * FROM 'accounts' WHERE 'uid' = '".$user_id."'");
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		return $row;
	}
}

?> 