<?php 
	
	$file = fopen("data.json", "w+") or die("Unable to open file!");	
	fwrite($file, "{");
	fclose($file);

	$file = fopen("data.json", "a+") or die("Unable to open file!");	
	$file1 = fopen("choice.json", "r") or die("Unable to open file!");	

	fwrite($file, fread($file1,filesize("choice.json")));
	fclose($file);
//
	$file = fopen("data.json", "r+") or die("Unable to open file!");
	fseek($file, -3, SEEK_END);
	fwrite($file, "}");

	fclose($file);
	fclose($file1);

?>








