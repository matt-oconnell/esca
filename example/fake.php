<?php

$iid = $_GET['iid'];

print_r($_GET);die;

$dummy = [
	'id' => $iid,
	'name' => 'Test Name',
	'data' => [1,2,3,4,5,6,7,8,9]
];

echo json_encode($dummy);