<?php
include('db.php');

if(isset($_GET['offset']) && isset($_GET['limit']))
{
$limit=htmlspecialchars(strip_tags($_GET['limit']));
$offset=htmlspecialchars(strip_tags($_GET['offset']));

$query=$db->prepare("SELECT * FROM posts LIMIT $limit OFFSET $offset");
$query->execute();


while($item=$query->fetch())
{
//Include Publication Infos
include('publication_item.php');
}

	
}

?>