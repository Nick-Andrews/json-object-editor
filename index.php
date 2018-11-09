<!DOCTYPE html>
<html>
<head>
	<title>JSON Object Editor</title>
	<link rel="stylesheet" href="joe.css">
	<script type="text/javascript" src="joe-core.js"></script>
	<script type="text/javascript" src="sample-object.js"></script>	
	<script>
		var posted; 
	<?php 
	if( isset($_POST["joe"]) ){
	?>
		posted = JSON.parse( '<?php echo $_POST["joe"];?>');
	<?php 
	}
	?>		
	</script>
</head>
<body>
	<input type="submit" id="close-report" class="close-report" value="close">
	<input type="submit" id="save-report-1234" class="save-report" value="save">
	
	<div id="modelwalker"></div>
</body>
<footer>
	<script>	
		window.onload = function(){	
			if( posted  ){
				SAMPLE = posted;
			}else{
				make_sample();	
			}
			WK.ID = Math.floor(Math.random()*1000);
			WK.type = 1;
			WK.loca = "index.php";
			WK.dynamise(WK.ID);
			WK.expose_obj( SAMPLE );
		}
	</script>
</footer>
</html>