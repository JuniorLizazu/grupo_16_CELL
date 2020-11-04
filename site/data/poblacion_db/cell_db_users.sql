LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Santiago','Ojeda','santiagoeojeda@gmail.com','avatar-avatar-1601660125002.jpg','$2b$10$Nl9wkjyUZEl6TGgY/Z9TXeHHDq9.HVduEnari31YPFnHNRnoPaCKi','admin',NULL,NULL,NULL,NULL,NULL,NULL),(2,'Juan Junior','Caceres Lizazu','cacereslizazu2@hotmail.com','avatar-avatar-1601840038330.jfif','$2b$10$jEdQy.6Vry.fk/VWUawU4eVCrBkqdhwCKoyD3GI8RXEDqjixtsccW','admin',NULL,NULL,NULL,NULL,NULL,NULL),(3,'Nelson','Barrios','nelson.barrios3@gmail.com','avatar-avatar-1603512441962.jpeg','$2b$10$X5wRXOETNSaEf6e8.JE3aOeqR8k.7rMFIKb0ECASeJW5/nAA/4E36','admin',NULL,NULL,NULL,NULL,NULL,NULL),(4,'Roberto','Ayala','roberto@ayala.com','default.png','$2b$10$aLXjP1FkBguSIg.983q1heNkfgA3NHiqPK0MbBaNX6NwrZEhF.rgS','user',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


