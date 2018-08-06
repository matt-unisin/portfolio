<?php
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ){
	$n = preg_replace('#[^a-z0-9]#i', '', $_POST['n']);
	$e = ($_POST['e']);
	$m = nl2br($_POST['m']);
	$to = "matt.unisin@gmail.com";	
	$from = $e;
	$subject = 'Matt Fitch Portfolio Contact Form';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>