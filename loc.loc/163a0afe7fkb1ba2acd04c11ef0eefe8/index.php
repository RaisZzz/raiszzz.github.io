<?php
	if (isset($_POST['save'])) {
		$data = $_POST['foo'];
    	file_put_contents('../content.html', $data);
	}
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Редактировать контент</title>
  <style type="text/css" media="screen">
    body {
      background-color: #ffff;
      color: #333;
      margin: 0;
      padding: 0;
    }
	
	#editor{
		position: absolute;
		top: 50px;
		bottom: 0;
		left: 0;
		right: 0;
	}

    .editor_container {
      text-align: center;
    }

    .editor_container form {
      margin: 15px 45px;
      text-align: center;
    }

    .ace_gutter-cell {
      color: white;
      !important
    }
  </style>
</head>

<body>
  <div class="editor_container">
    <form action="" method="post" id="myForm">
    	<input type="submit" name="save" value="Сохранить">
    	<textarea  name="foo" type="text" hidden id="editortext"></textarea>
    	<div id="editor"><?php echo htmlspecialchars(file_get_contents("../content.html"));?></div>
    </form>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.3/ace.js" type="text/javascript" charset="utf-8"></script>
  <script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/ambiance");
    editor.session.setMode("ace/mode/css");
    document.getElementById('editor').style.fontSize = '14px';

    // added event handler
    document.getElementById("myForm").onsubmit = function(evt) {
      document.getElementById("editortext").value = editor.getValue();
    }
  </script>
</body>

</html>