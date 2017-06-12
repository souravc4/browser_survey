<?php

	class ArrayValue implements JsonSerializable {
	    public function __construct(array $array) {
	        $this->array = $array;
	    }

	    public function jsonSerialize() {
	        return $this->array;
	    }
	}
	//put user input values in json
	$file = fopen("choice.json", "a+") or die("Unable to open file!");	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$browser = $_POST['browser'];
	$data_array = ['name' => $name, 'browser'=> $browser];
	$data = "\"".$email."\"";
	$data = $data.": ".json_encode(new ArrayValue($data_array), JSON_PRETTY_PRINT).",".PHP_EOL;
	fwrite($file, $data);
	fclose($file);

?>