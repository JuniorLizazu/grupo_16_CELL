-- MySQL dump 10.17  Distrib 10.3.16-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: cell
-- ------------------------------------------------------
-- Server version	10.3.16-MariaDB

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
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `trademark` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(200) NOT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `colors` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(100) NOT NULL,
  `capacidad` int(100) NOT NULL,
  `dualsim` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 11 Pro','menu','Apple','iPhone 11 Pro',50000,'2.png','Gris y Blanco','Libre',10,64,'Si',NULL,NULL),(2,'Xiaomi Mi 9','menu','Xiomi','Mi 9',25000,'mi-9.png','Negro','Libre',5,124,'Si',NULL,NULL),(3,'Samsung S8','menu','Samsung','S8',18000,'samsung-s8.png','Negro','Libre',12,64,'Si',NULL,NULL),(4,'LG K4OS','menu','LG','K40S',8000,'1.png','Negro','Libre',5,32,'Si',NULL,NULL),(5,'Samsung J2','Samsung','nomenu','J2',5000,'4.png','Negro','Libre',1,64,'Si',NULL,NULL),(6,'Moto 8','Motorola','nomenu','Moto 8',9990,'3.png','Negro','Libre',10,64,'Si',NULL,NULL),(7,'iPhone 11','Apple','nomenu','iPhone 11',40999,'iphone-11.png','Blanco','Libre',20,124,'Si',NULL,NULL),(8,'Samsung A31 Plus','Samsung','nomenu','Samsung A31 Plus',35000,'image-1603669531809.jpg','Blanco - Negro - Rosa','Libre',5,128,'Si',NULL,NULL),(9,'Huawei Y9S','Huawei','nomenu','Huawei Y9S',40000,'image-1603669690047.jpg','Blanco y Negro','Libre',3,64,'Si',NULL,NULL),(10,'Nokia 8.3','Nokia','nomenu','Nokia 8.3',50000,'image-1603670382380.jpg','Azul - Verde - Negro','Libre',10,220,'Si',NULL,NULL),(11,'TCL L5 GO','TCL','nomenu','TCL L5 GO',11000,'image-1603670499623.jpg','Negro - Blanco','Libre',5,24,'No',NULL,NULL),(12,'TCL G-60','TCL','nomenu','TCL G-60',35000,'image-1603670637652.jpg','Blanco ','Libre',2,64,'Si',NULL,NULL);
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

-- Dump completed on 2020-10-28 10:41:57
