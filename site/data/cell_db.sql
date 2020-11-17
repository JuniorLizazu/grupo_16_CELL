CREATE DATABASE  IF NOT EXISTS `cell_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cell_db`;
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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `remito` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_idx` (`id_usuario`),
  KEY `id_producto_idx` (`id_productos`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_productos`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

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
  `price` int(11) NOT NULL,
  `colors` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `discount` int(11) NOT NULL,
  `dualsim` varchar(45) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_trademark` int(11) NOT NULL,
  `description` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idTrademark_idx` (`id_trademark`),
  CONSTRAINT `idTrademark` FOREIGN KEY (`id_trademark`) REFERENCES `trademark` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Xiaomi Mi 9','Mi 9',21000,'Negro - Blanco','',5,'Si',124,'mi-9.png',NULL,'2020-11-16 01:10:44',3,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(2,'Samsung S8','S8',54000,'Negro - Blanco','',12,'Si',64,'samsung-s8.png',NULL,'2020-11-16 01:12:19',2,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(3,'LG K4OS','K40S',10000,'Negro','Empresa',5,'Si',32,'1.png',NULL,'2020-11-17 02:58:25',4,''),(4,'Samsung J2','J2',5000,'Negro','Libre',3,'Si',64,'4.png',NULL,'2020-11-15 05:46:50',2,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(5,'Moto 8','Moto 8',9990,'Negro','Libre',10,'Si',64,'3.png',NULL,NULL,8,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(6,'iPhone 11','iPhone 11',25000,'Blanco','Libre',20,'Si',124,'iphone-11.png',NULL,NULL,1,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(7,'Samsung A31 Plus','Samsung A31 Plus',35000,'Blanco - Negro - Rosa','Libre',5,'Si',128,'image-1603669531809.jpg',NULL,NULL,2,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(8,'Huawei Y9S','Huawei Y9S',20000,'Blanco y Negro','3',0,'Si',64,'image-1603669690047.jpg',NULL,NULL,5,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(9,'Nokia 8.3','Nokia 8.3',6000,'Azul - Verde - Negro','Libre',10,'Si',220,'image-1603670382380.jpg',NULL,NULL,6,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(10,'TCL L5 GO','TCL L5 GO',12000,'Negro - Blanco','Libre',5,'No',24,'image-1603670499623.jpg',NULL,NULL,7,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(11,'TCL G-60','TCL G-60',13000,'Blanco ','Libre',2,'Si',64,'image-1603670637652.jpg',NULL,NULL,7,'Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this '),(18,'Samsung A10','A10',55000,'Blanco - Negro - Azul','Empresa',2,'Si',32,'image-1605577357284.png','2020-11-17 01:42:37','2020-11-17 01:42:55',2,'adawdawdwdwadwad');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trademark`
--

DROP TABLE IF EXISTS `trademark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trademark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trademark`
--

LOCK TABLES `trademark` WRITE;
/*!40000 ALTER TABLE `trademark` DISABLE KEYS */;
INSERT INTO `trademark` VALUES (1,'Apple','apple.png'),(2,'Samsung','samsung.png'),(3,'Xiomi','mi.png'),(4,'LG','lg.png'),(5,'Huawei','huawei.png'),(6,'Nokia','nokia.png'),(7,'TCL','tcl.png'),(8,'Motorola','motorola.png');
/*!40000 ALTER TABLE `trademark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol` varchar(45) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Santiago','Ojeda','santiagoeojeda@gmail.com','avatar-avatar-1601660125002.jpg','$2b$10$Nl9wkjyUZEl6TGgY/Z9TXeHHDq9.HVduEnari31YPFnHNRnoPaCKi','admin','Milán 720','Lomas de Zamora','Buenos Aires','2020-11-18',NULL,'2020-11-15 03:33:54'),(2,'Juan Junior','Caceres Lizazu','cacereslizazu2@hotmail.com','avatar-avatar-1601840038330.jfif','$2b$10$jEdQy.6Vry.fk/VWUawU4eVCrBkqdhwCKoyD3GI8RXEDqjixtsccW','admin','Aristobulo del Valle 1100','Lanus','Buenos Aires','2020-11-01',NULL,'2020-11-15 03:37:12'),(3,'Nelson','Barrios','nelson.barrios3@gmail.com','avatar-avatar-1603512441962.jpeg','$2b$10$X5wRXOETNSaEf6e8.JE3aOeqR8k.7rMFIKb0ECASeJW5/nAA/4E36','admin',NULL,NULL,NULL,NULL,NULL,NULL),(4,'Roberto','Ayala','roberto@ayala.com','avatar-avatar-1605573468911.jpg','$2b$10$aLXjP1FkBguSIg.983q1heNkfgA3NHiqPK0MbBaNX6NwrZEhF.rgS','user','Milán 720','Lomas de Zamora','Lomas de Zamora','2020-11-18',NULL,'2020-11-17 00:37:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-17  0:33:53
