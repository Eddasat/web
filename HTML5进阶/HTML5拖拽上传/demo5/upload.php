<?php
  if(isset($_FILES['pic'])) {
    if(is_uploaded_file($_FILES['pic']['tmp_name'])) {
      if($_FILES['pic']['size'] < 1000000) { //不能超过1M
        move_uploaded_file($_FILES["pic"]["tmp_name"], dirname ( __FILE__ ) . "/upload/" . $_FILES['pic']['name']);
        echo "success";
      } else {
        echo "file too large";
      }
    } else {
      echo "error";
    }
  } else {
    echo "error, check php.ini";
  }
?>	