<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $Message = $_POST['Message'];







    $mailTo = "Your Domain Email";
    $headers = "Form: ".$mailFrom;
    $txt = "Yaou have received an e-mail from".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: contact.hmtl");



}
    
?>