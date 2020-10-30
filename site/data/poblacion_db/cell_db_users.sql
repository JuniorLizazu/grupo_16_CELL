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
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Santiago','Ojeda','santiagoeojeda@gmail.com','avatar-avatar-1601660125002.jpg','$2b$10$Nl9wkjyUZEl6TGgY/Z9TXeHHDq9.HVduEnari31YPFnHNRnoPaCKi','admin',NULL,NULL,NULL,NULL,NULL,NULL),(2,'Juan Junior','Caceres Lizazu','cacereslizazu2@hotmail.com','avatar-avatar-1601840038330.jfif','$2b$10$jEdQy.6Vry.fk/VWUawU4eVCrBkqdhwCKoyD3GI8RXEDqjixtsccW','admin',NULL,NULL,NULL,NULL,NULL,NULL),(3,'Nelson','Barrios','nelson.barrios3@gmail.com','avatar-avatar-1603512441962.jpeg','$2b$10$X5wRXOETNSaEf6e8.JE3aOeqR8k.7rMFIKb0ECASeJW5/nAA/4E36','admin',NULL,NULL,NULL,NULL,NULL,NULL),(4,'Roberto','Ayala','roberto@ayala.com','default.png','$2b$10$aLXjP1FkBguSIg.983q1heNkfgA3NHiqPK0MbBaNX6NwrZEhF.rgS','user',NULL,NULL,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2020-10-29 23:17:31
