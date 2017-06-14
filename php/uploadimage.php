<?php
	if ( 0 < $_FILES['file']['error'] ) {
        echo 'impossible de téléverser ce fichier';
        exit();
    }

	$text = $_POST['text'];
	$text = str_replace("<", "", $text);
	$tmpfilename =  $_FILES['file']['tmp_name'];
	$filename = $_FILES['file']['name'];
	$ext = pathinfo($filename, PATHINFO_EXTENSION);
	$outputdir = '../media/image/room_nepastoucher/visitors/';

	switch($ext)
	{
	    case "jpg":
	    case "png":
	    case "tiff":
	    	$fi = new FilesystemIterator($outputdir, FilesystemIterator::SKIP_DOTS);
	    	$output = $outputdir . iterator_count($fi) . "." . $ext;
    		move_uploaded_file($tmpfilename,   $output);
    		file_put_contents("../rooms/museum-list.html", "\n<span>$text</span>", FILE_APPEND);
    		file_put_contents("../rooms/img-list.html", "\n<img class='image' src=\"$output\"/>", FILE_APPEND);
    		echo "Done!";
    		exit();
	    break;
	    default:
	    echo "l'extension doit être : .jpg .png .tiff $ext";
	    exit();
	}

?>