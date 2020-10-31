-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cell_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `colors` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `discount` int(11) NOT NULL,
  `dualsim` varchar(45) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `id_trademark` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idTrademark_idx` (`id_trademark`),
  CONSTRAINT `idTrademark` FOREIGN KEY (`id_trademark`) REFERENCES `trademark` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 11 Pro','iPhone 11 Pro',9999.99,'Gris y Blanco','Libre',10,'Si',64,'2.png',NULL,NULL,1),(2,'Xiaomi Mi 9','Mi 9',9999.99,'Negro','Libre',5,'Si',124,'mi-9.png',NULL,NULL,3),(3,'Samsung S8','S8',9999.99,'Negro','Libre',12,'Si',64,'samsung-s8.png',NULL,NULL,2),(4,'LG K4OS','K40S',8000.00,'Negro','Libre',5,'Si',32,'1.png',NULL,NULL,4),(5,'Samsung J2','J2',5000.00,'Negro','Libre',1,'Si',64,'4.png',NULL,NULL,2),(6,'Moto 8','Moto 8',9990.00,'Negro','Libre',10,'Si',64,'3.png',NULL,NULL,8),(7,'iPhone 11','iPhone 11',9999.99,'Blanco','Libre',20,'Si',124,'iphone-11.png',NULL,NULL,1),(8,'Samsung A31 Plus','Samsung A31 Plus',9999.99,'Blanco - Negro - Rosa','Libre',5,'Si',128,'image-1603669531809.jpg',NULL,NULL,2),(9,'Huawei Y9S','Huawei Y9S',9999.99,'Blanco y Negro','3',0,'Si',64,'image-1603669690047.jpg',NULL,NULL,5),(10,'Nokia 8.3','Nokia 8.3',9999.99,'Azul - Verde - Negro','Libre',10,'Si',220,'image-1603670382380.jpg',NULL,NULL,6),(11,'TCL L5 GO','TCL L5 GO',9999.99,'Negro - Blanco','Libre',5,'No',24,'image-1603670499623.jpg',NULL,NULL,7),(12,'TCL G-60','TCL G-60',9999.99,'Blanco ','Libre',2,'Si',64,'image-1603670637652.jpg',NULL,NULL,7);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-29 23:17:31
