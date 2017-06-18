<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Ne pas toucher</title>
	<link rel="icon" type="image/png" href="../media/favicon.png" />
	<link rel="stylesheet" href="../css/nepastoucher.css">
	<link rel="stylesheet" href="../css/menu.css">
	<script type="text/javascript" src="../js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="../js/jquery-ui-min.js"></script>
	<script type="text/javascript" src="../js/menu.js"></script>
	<script type="text/javascript" src="../js/nepastoucher.js"></script>
	<link href='https://fonts.googleapis.com/css?family=Karla:400,400italic,700italic,700' rel='stylesheet' type='text/css'>
</head>
<body>

	<!-- M E N U -->

	<div class="dropdown">
		<img src="../media/image/bouton/bouton-menu-black.png">
		<div class="dropdown-content" id="black">
			<a id="menulink" href="#">Parcourir</a>
			<a id="feuillelink" href="#">Feuille de salle</a>
			<a class="upload" href="#">Participer</a>
		</div>
	</div>

	<form action="../php/uploadimage.php" method="post">
		<span>✕</span>
		<input id="text" type="text" name="text" placeholder="Provenance de l'image"/>
		<input id="file" type="file" name="filename"/>
		<input type="submit" name="submit" value="Send" method="post"/>
		<span id="output"></span>
	</form>

	<!-- C O N T E N U -->

	<div class="header">
		<?php
			include("museum-list.html");
		?>
	</div>

	<div class="images">
		<?php
			include("img-list.html");
		?>
	</div>

	<!-- M E N U - S A L L E S -->

	<div class="menu">
		<div class="contenu-menu">
			<p class="rooms"></br>
				<a id="r1" href="../index.html">Hall</a></br>
				<a id="r2" href="nepastoucher.php">Ne pas toucher</a></br>
				<a id="r3" href="faireletour.html">Faire le tour</a></br>
				<a id="r4" href="enchantier.html">En chantier</a></br>
				<a id="r5" href="jeprendsuneoeuvre.html">Je prends une œuvre</a></br>
				<a id="r6" href="reflexion.html">Réflexion</a></br>
				<a id="r7" href="editerlespace.html">Éditer l'espace</a>
			</p>
		</div>
	</div>	

	<!-- F E U I L L E  D E  S A L L E  -->

	<div class="feuille">
		<p id="titre-feuille">Ne pas toucher</p>
		<p>
			<i>Typologies de l'exposition</i></br></br>
			«&#8239;D'abord, un constat tout à fait trivial&#8239;: à l’entrée </br>
			de la plupart des musées du monde sont énoncés tout un ensemble d’instructions concernant le comportement à adopter lors de la visite : interdictions de boire, de manger, de fumer, 
			de courir, de faire trop de bruit… Ces instructions font partie des bonnes manières qui se sont imposées progressivement dans le champ culturel au cours du temps. […] Le monde des arts plastiques s’est progressivement policé et en est venu à adopter tout un ensemble de comportements standards, comportements impliquant une forme de civilité et valable dans tous les musées du monde. Les instructions présentes sur les murs des musées nous renvoient directement à l’idée d’une autorité de l’art qui serait invisible.&#8239;»</br></br>

			Jérôme Glicenstein, <i>L’art&#8239;: une histoire d’expositions,</i> Paris, PUF, 2009, p.87.</br></br>

			Je vous invite à enrichir cette collecte en m'adressant vos images en cliquant sur l'onglet «&#8239;participer&#8239;». 
			Vous contriburez ainsi à élargir cette analyse typologique des éléments de l'exposition.
		</p>
	</div>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-100453981-1', 'auto');
	  ga('send', 'pageview');

	</script>

</body>
</html>
