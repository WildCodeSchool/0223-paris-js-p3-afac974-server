
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: project_3
-- ------------------------------------------------------
-- Server version	8.0.18

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

  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_img` varchar(45) NOT NULL,
  `full_title` varchar(100) NOT NULL,
  `short_title` varchar(60) DEFAULT NULL,
  `achievement_date` varchar(60) NOT NULL,
  `dimensions` varchar(45) DEFAULT NULL,
  `art_number` int(11) DEFAULT NULL,
  `description` longtext,
  `url_origin` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `technique_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_art_author1_idx` (`author_id`),
  KEY `fk_art_category1_idx` (`category_id`),
  KEY `fk_art_technique1_idx` (`technique_id`),
  CONSTRAINT `fk_art_author1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `fk_art_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_art_technique1` FOREIGN KEY (`technique_id`) REFERENCES `technique` (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art`
--

LOCK TABLES `art` WRITE;
/*!40000 ALTER TABLE `art` DISABLE KEYS */;
INSERT INTO `art` VALUES (1,'40FI79','Effet de nuit sur la Cheminée usine du Tampon','Cheminée du Tampon','1866','20 X 14',1,'Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?','','',1,1,1),(2,'40FI78','Arrivée à l\'établissement du Tampon','L\'Établissement','1866','15 X 13.5',2,'Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les \"tables\" pour le séchage du sucre?',NULL,NULL,1,1,1),(3,'40FI80','Tampon- Une usine','Usine du Tampon','10 février 1866','11.5 X 20.5',3,'Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)',NULL,NULL,1,1,3),(4,'40FI106','Quartier St Pierre. Etablissement de la Rivière, montagnes de l\'Entre Deux','Établissement de la Rivière','1861 ou 1866','19.5 X 16.5',4,'L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une \"bande\") de travailleurs engagés effectue la \"trouaison\", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit.',NULL,NULL,1,1,1),(5,'40FI','Boutchiana- Indien','','juillet 1871',NULL,1,'Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.',NULL,NULL,1,2,1),(6,'40FI91','Boutchiana- Casernes',NULL,'24 août 1865','19.5 X 11',2,'Travailleur engagé depuis l\'Inde à l\'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur',NULL,NULL,1,2,1),(7,'40FI90','Boutchiana-Casernes, de face',NULL,'1865','19.5 X 8.5',3,'Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans',NULL,NULL,1,2,1),(8,'40FI76','Cafrine et son petit au Tampon',NULL,'1861','18 X 13',4,'C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le \"Code noir\" de 1723. ',NULL,NULL,1,2,1);
/*!40000 ALTER TABLE `art` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `deathdate` date DEFAULT NULL,
  `biography` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(45) NOT NULL UNIQUE,
  `isAdmin` tinyint(4) NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John','Doe','Jojo','root','j.d@gallery.com',1,'');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_art_favorite`
--

DROP TABLE IF EXISTS `user_art_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_art_favorite` (
  `user_id` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
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
/*!40000 ALTER TABLE `user_art_favorite` ENABLE KEYS */;
UNLOCK TABLES;

--

-- Dumping routines for database 'project_3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-08  0:30:45

