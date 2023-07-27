-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: localhost    Database: p3db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `art`
--

DROP TABLE IF EXISTS `art`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ref_img` varchar(45) NOT NULL,
  `full_title` varchar(100) NOT NULL,
  `short_title` varchar(60) DEFAULT NULL,
  `achievement_date` varchar(60) NOT NULL,
  `dimensions` varchar(45) DEFAULT NULL,
  `art_number` int DEFAULT NULL,
  `description` longtext,
  `url_origin` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `author_id` int NOT NULL,
  `category_id` int NOT NULL,
  `technique_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_art_author1_idx` (`author_id`),
  KEY `fk_art_category1_idx` (`category_id`),
  KEY `fk_art_technique1_idx` (`technique_id`),
  CONSTRAINT `fk_art_author1` FOREIGN KEY (`author_id`) REFERENCES `author` (`aut_id`),
  CONSTRAINT `fk_art_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`c_id`),
  CONSTRAINT `fk_art_technique1` FOREIGN KEY (`technique_id`) REFERENCES `technique` (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art`
--

LOCK TABLES `art` WRITE;
/*!40000 ALTER TABLE `art` DISABLE KEYS */;
INSERT INTO `art` VALUES (1,'40FI79','Effet de nuit sur la Cheminée usine du Tampon','Cheminée du Tampon','1866','20 X 14',1,'Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?','','http://localhost:8000/upload/ChemineeDuTampon.jpg',1,1,1),(2,'40FI78','Arrivée à l\'établissement du Tampon','L\'Établissement','1866','15 X 13.5',2,'Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les \"tables\" pour le séchage du sucre?',NULL,'http://localhost:8000/upload/LEtablissement.jpg',1,1,1),(3,'40FI80','Tampon - Une usine','Usine du Tampon','10 février 1866','11.5 X 20.5',3,'Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)',NULL,'http://localhost:8000/upload/UsineDuTampon.jpg',1,1,3),(4,'40FI106','Quartier St Pierre. Etablissement de la Rivière, montagnes de l\'Entre Deux','Établissement de la Rivière','1861 ou 1866','19.5 X 16.5',4,'L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une \"bande\") de travailleurs engagés effectue la \"trouaison\", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit.',NULL,'http://localhost:8000/upload/EtablissementDeLaRiviere.jpg',1,1,1),(5,'40FI','Boutchiana - Indien','Boutchiana - Indien','juillet 1871','22.5 X 16.5',1,'Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.',NULL,'http://localhost:8000/upload/BoutchianaIndien.jpg',1,2,1),(6,'40FI91','Boutchiana - Casernes','Boutchiana de dos','24 août 1865','19.5 X 11',2,'Travailleur engagé depuis l\'Inde à l\'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur',NULL,'http://localhost:8000/upload/BoutchianaCaserne.jpg',1,2,1),(7,'40FI90','Boutchiana - Casernes, de face','Boutchiana de face','1865','19.5 X 8.5',3,'Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans',NULL,'http://localhost:8000/upload/BoutchianaCaserneDeFace.jpg',1,2,1),(8,'40FI76','Cafrine et son petit au Tampon','Cafrine et son petit','1861','18 X 13',4,'C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le \"Code noir\" de 1723. ',NULL,'http://localhost:8000/upload/CafrineEtSonPetit.jpg',1,2,1),(9,'40FI52','La vieille (Victorine) Mme Samsi Casernes','La vieille (Victorine)','15 décembre 1865','18 X 12',5,'La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l\'employeur. Son foulard noué sur la tête est taillé dans la même toile. ',NULL,'http://localhost:8000/upload/LaVieilleVictorine.jpg',1,2,1),(11,'40FI75','Lucie le ventre plein de cari','Lucie','1866','19 X 13.5',7,'Une autre petite fille de Victorine, sans doute dans la maison des Casernes.',NULL,'http://localhost:8000/upload/Lucie40FI75.jpg',1,2,2),(12,'40FI74','La belle Tina','La belle Tina','1866','21.5 X 11.5',8,'Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.',NULL,'http://localhost:8000/upload/LaBelleTina.jpg',1,2,2),(13,'40FI60','Jamali, Cafre, Gardien','Jamali, Cafre, Gardien','1861','26 X 16.5',9,'\"Cafre\" veut dire que Jamali n\'est pas né sur l\'Habitation, mais qu\'il a vraisemblablement été recruté comme engagé. Il est armé d\'une lance, et surveille l\'orée des champs, ou les abords du camp des travailleurs.',NULL,'http://localhost:8000/upload/Jamali-cafre.jpg',1,2,1),(14,'40FI55','Le parapluie du pauvre Citoyen','Le parapluie','1861','19 X 11.5',10,'Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d\'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la \"boutique\". Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l\'arrière-plan, sur la droite, la silhouette d\'une cheminée d\'usine, peut-être celle de Bel-Air, au Tampon.',NULL,'http://localhost:8000/upload/parapluie_40FI55.jpeg',1,2,1),(15,'40FI53.2','La pli y fait pas rien, ça ! Tampon','La pli - Tampon','27 janvier 1866','30 X 20',11,'La suite du commentaire est: \"Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !....\" Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici? ',NULL,'http://localhost:8000/upload/lapli-Tampon.jpg',1,2,2),(16,'40FI59','Monsieur Bourrayne dans le jardin des Casernes','M. Bourrayne','1861','20 X 12.5',12,'la suite du commentaire est: \"Allons, Virasami, vivement mettre la racine de ce plant (?) comme à Madras!\"  ',NULL,'http://localhost:8000/upload/MrBourrayne_40FI59.jpg',1,2,2),(17,'40FI72',' Chanvert descend le chemin de la Plaine, Golo est à ses côtés','Golo et Chanvert','1861','8 X 15.5',13,'Chanvert est peut-etre un ami de la famille. Golo est un domestique qui l\'accompagne. A l\'arrière du tilbury, il semble qu\'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L\'Etablissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre. ',NULL,'http://localhost:8000/upload/40FI72-ChanvertGolo.jpg',1,2,2),(18,'40FI83','Sortie du Bras de Jean Payet en allant vers le Tampon','Sortie du Bras de Jean Payet','29 janvier 1865','30 X 22.5',1,'Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd\'hui, reliait les chmps de canne situés entre la ravin e Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. au sommet de ces champs, une scierie fournissait le bois et les planches pour les Etablissements K/Véguen',NULL,'http://localhost:8000/upload/sortie_bras_jeanpayet_40FI83.jpg',1,3,2),(19,'40FI77','Le bassin rouge au Tampon, la ravine descend','Bassin rouge','10 février 1866','15 X 9,5',2,'La cascade alimente un bassin à proximité d\'un affluent de la rivière d\'Abord',NULL,'http://localhost:8000/upload/bassin_rouge_40FI77.jpg',1,3,1),(20,'40FI104','Excursion au volcan de Bourbon','Caverne des lataniers','août 1861','24,5 X 32',3,'Mortier de Trévise et sa belle-famille sont ne excursion au volcan. Il n\'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l\'abolition de l\'escalvage de 1848',NULL,'http://localhost:8000/upload/volcan-40FI104.jpg',1,3,2),(21,'40FI105bis','Le volcan de Bourbon vu du Pas de Bellecombre','Pas de Bellecombe','août 1861','18 X 24',4,'Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c\'est un esclave, Jacob, qui l\'a découvert, en réalité. Bellecombe avait commandité l\'expédition.',NULL,'http://localhost:8000/upload/volcan_40FI105bis.jpg',1,3,1),(22,'40FI108','Mam\'selle','Mam\'selle','14 avril 1866','14.5 X 19.5',1,'Les chevaux sont rares sur les établissements: ils font l\'objet de soins attentifs, et ne sont montés que par les propriétaires des Etablissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l\'Etablissement du Tampon.',NULL,'http://localhost:8000/upload/Mamsellemini_40FI108.jpg',1,4,2),(23,'40FI73','Charrette tirée par des mulets','Charette & mulets','1861','6.5 X 15.5',2,'4 mulets tirent une charrette apportant des cannes frâichement coupées à l\'usine. Les mulets sont nombreux dans l\'île à l\'époque de l\'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des boeufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l\'Etablissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.',NULL,'http://localhost:8000/upload/charette_40FI73.jpg',1,4,2),(24,'40FI63','Caille de Bourbon','Caille de Bourbon','21 septembre 1861','19 X 23',3,'En réalité, la caille fut introduite d\'Asie, Inde ou chine, vers 1850. C\'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l\'époque de Mortier de Trévise, c\'est donc une curiosité, un peu en disparition, à cause de l\'extension des champs cultivés en cannes à sucre.',NULL,'http://localhost:8000/upload/caille_40FI63.jpg',1,4,1),(25,'40FI98','Le Citoyen, prononcez cito-ïen','Le Citoyen','1865','19 X 13.5',NULL,'\"Le citoyen\" fait évidemment référence à l\'abolition, un ancien esclave, affranchi, devient citoyen à part entière de la République. L\'aquarelle porte la mention \"Ile Bourbon\", l\'ancien nom sous la royauté, rebaptisé par les révolutionnaires \"Ile de la Réunion\", et la date 1865. A l\'époque et parfois encore aujourd\'hui, les deux noms coexistent, même si le nouveau nom officiel est \"La Réunion\".\n',NULL,'http://localhost:8000/upload/leCitoyen40FI98.jpg',1,2,1);
/*!40000 ALTER TABLE `art` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `aut_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `deathdate` date DEFAULT NULL,
  `biography` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`aut_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Hippolyte','Charles Napoléon Mortier','1835-05-04','1892-02-13','marquis, puis Duc de Trévise');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Usines'),(2,'Travailleurs'),(3,'Lieux'),(4,'Animaux');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technique`
--

DROP TABLE IF EXISTS `technique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technique` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `technique_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technique`
--

LOCK TABLES `technique` WRITE;
/*!40000 ALTER TABLE `technique` DISABLE KEYS */;
INSERT INTO `technique` VALUES (1,'Aquarelle'),(2,'Dessin'),(3,'Dessin à la mine de plomb');
/*!40000 ALTER TABLE `technique` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `isAdmin` tinyint NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John','Doe','Jojo','root','j.d@gallery.com',1,''),(2,'Omar','Heyy','omar','omar','j.d@omar.com',1,'bg.jpg'),(6,'Omdazpodjapzodci','A NEW ONE','zddza','rodopzajzdaùmkdlùakddipjazot','j.d@apefkefkoeajoejgoeofeojeogjgallery.com',1,''),(7,'ok','A NEW ONE','zddza','$argon2id$v=19$m=65536,t=3,p=4$NEmIeGCCWVzMDqOKCVmuFw$dSyu5d3Wb/Xm4YB5YsY2KXq/XzrHdZnGdxp/oruEakc','abc@abc.com',1,''),(17,'ok','A NEW ONE','zddza','$argon2id$v=19$m=65536,t=3,p=4$IkUNg6KQufPha2/YaiZxEw$4MgTQ82rfxrBSfO4dWO/fnDN3baq57K5OXuiwY2oQ2o','hello@gmail.com',0,''),(18,'LOL','A NEW ONE A NEW ONE','HELLO','$argon2id$v=19$m=65536,t=3,p=4$uYRhu+sZ56rsmT76ONIz1g$yTHCnUhySlZtFchASbbj4pjX4lurEm8lyTIqIsxp9Q4','hello@dzadnazfk.com',0,''),(19,'Naomi','Rose','nrose','$argon2id$v=19$m=65536,t=3,p=4$qqiYvssUoTBqQusc+iRxBA$7WUaDI4wg0MIcqesuJ4MniMojSg8wt6NH4ZTz3hME6k','nrose@mail.com',1,NULL),(20,'Adele','Manga','amanga','$argon2id$v=19$m=65536,t=3,p=4$eqz6O60lkXkCBaLFrV5eVw$OkPF+ayHNjcy0Rp8v5K7BFEQDU9pDWMs7wjSsZCq1D8','adele@mail.com',0,''),(21,'Serge-Patrick','Acka','acka','$argon2id$v=19$m=65536,t=3,p=4$KZx6DexGZg4pCMUQSpx/pA$Dkqz1jnQPrnjaUWk7VtKNtpeCg2DCBaZrOPFp9lX3F0','sp@mail.com',0,''),(22,'Benjamin','Hubert','hub','$argon2id$v=19$m=65536,t=3,p=4$mL3OgeGNXnahjqY5yZT5BQ$yDtO+Exf3iXcX8QZV+Ra6115FbUoNlP985fhQBn/wqA','ben@mail.com',0,''),(23,'Tom','Le Laurain','tom','$argon2id$v=19$m=65536,t=3,p=4$pqXFUtgeXCQThhOcYcXJdw$n+WICE5Ow1u5tAjmzZhRMceLXn4FPBty7d61kPCou1A','tom@mail.com',0,''),(24,'Thomas','Lanjon','tom','$argon2id$v=19$m=65536,t=3,p=4$swIhNxkki9wPvCnm43IKFw$EOREDTqzk81Q2TS0eamTsi3RVPv7ryZHZgtOgfNa23g','thomas@mail.com',0,''),(25,'Kader','Benderdouche','kader','$argon2id$v=19$m=65536,t=3,p=4$I52UYmOcNaHlLuBUalR+ZQ$NuC3upbYV2dleHdaeUc7UcXkql2itYEG47/HAdzt7Lc','kader@mail.com',0,''),(26,'Ornella','Tomboza','ornel','$argon2id$v=19$m=65536,t=3,p=4$s0hoUiWPdO1ZMVCG7P9fqg$XmjoLLqfFNedLw++3pzyXtMnfwMWTtms6UWNHQtK/tg','ornel@mail.com',1,''),(27,'Saverio','Cutolo','sav','$argon2id$v=19$m=65536,t=3,p=4$2bDxHb9ePXdGBJd4DnLq3w$0/znGTDjEBbchkVlhExt99szCNOiGH/Dh70giKKgRtU','sav@mail.com',0,''),(28,'Leo','Messi','leo','$argon2id$v=19$m=65536,t=3,p=4$uanmXlkyCHftDW6J+gbXJQ$8dVAamJNLwab2RJ8pRYFEDpvPC2HXC6R3N+Htt/Gsa0','leo@mail.com',1,''),(29,'Elon','Musk','elon','$argon2id$v=19$m=65536,t=3,p=4$ovI7T2rp4y/8tbHiA8+sJQ$FXWza52kRZiTtlUIag6ipcqgftJOHZU+CF8XvA/NsFc','elon@mail.com',1,''),(30,'Bob','Marley','','$argon2id$v=19$m=65536,t=3,p=4$bNa2/9mqVtxXut7FbNl3xw$zlcMCoVfOMEiC7yQmtQZDoL2WkB1q/zrEwzwOiM62k0','bob@mail.com',0,NULL),(31,'Kilian','Mbappé','','$argon2id$v=19$m=65536,t=3,p=4$KCQ0ggQRBlQdMwpyf2Nm4A$5M16KTG+4FYzb96lwnR5LGLHOts0YWhJRIp4tnwqIIU','kiki@mail.com',1,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_art_favorite`
--

DROP TABLE IF EXISTS `user_art_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_art_favorite` (
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`art_id`),
  KEY `fk_user_has_art_art1_idx` (`art_id`),
  KEY `fk_user_has_art_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_art_art1` FOREIGN KEY (`art_id`) REFERENCES `art` (`id`),
  CONSTRAINT `fk_user_has_art_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_art_favorite`
--

LOCK TABLES `user_art_favorite` WRITE;
/*!40000 ALTER TABLE `user_art_favorite` DISABLE KEYS */;
INSERT INTO `user_art_favorite` VALUES (1,1),(19,1),(26,1),(29,1),(1,2),(19,2),(20,2),(25,2),(26,2),(19,3),(25,3),(6,4),(19,4),(22,4),(26,4),(6,5),(19,5),(6,6),(22,7),(26,7),(19,8),(25,8),(28,8),(19,9),(25,9),(27,9),(27,11),(28,11),(29,11),(20,12),(28,12),(29,13),(20,14),(25,14),(20,15),(24,15),(25,15),(28,15),(24,16),(29,16),(24,17),(22,18),(24,18),(28,18),(24,19),(26,19),(29,19),(27,20),(19,21),(27,21),(19,22),(20,23);
/*!40000 ALTER TABLE `user_art_favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'p3db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-27 11:00:20
