<!-- <?php
if(isset($_POST['submit'])){
    $newusers = array (
        "username"=>$_POST['username'],
        "phone"=>$_POST['phone']
    );
    if(filesize("data.json") == 0){
        $first_record=array($newusers);
        $data_save=$first_record;    
        echo "Hello, $newusers";

    }else{
        $old_records=json_decode(file_get_contents("data.json"));
        array_push($old_records, $newusers);
        $data_save = $old_records;    
        echo "Hello, $newusers";

    }
    $encoded_data = json_encode($data_save, JSON_PRETTY_PRINT);


    if(!file_put_contents('data.json', $encoded_data, LOCK_EX)){
        $error = "Error)0";
    }else{$success='Success(9';}
    echo "Hello, $newusers";
}
// $name = $_POST['phone'];
// echo "Hello, $name";

	 -->