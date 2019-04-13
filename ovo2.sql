-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.37-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for ovo
CREATE DATABASE IF NOT EXISTS `ovo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ovo`;

-- Dumping structure for table ovo.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile_phone` int(20) NOT NULL,
  `is_activated` tinyint(1) NOT NULL DEFAULT '0',
  `is_email_verified` tinyint(4) NOT NULL DEFAULT '0',
  `temp_pin_verify` int(1) NOT NULL DEFAULT '0',
  `reward_point` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `device_signup` datetime DEFAULT NULL,
  `device_last_signin` datetime DEFAULT NULL,
  `social_media_provider` varchar(10) DEFAULT NULL,
  `ovo_saldo` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table ovo.customers: ~1 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `username`, `hash`, `full_name`, `email`, `mobile_phone`, `is_activated`, `is_email_verified`, `temp_pin_verify`, `reward_point`, `createdAt`, `updatedAt`, `device_signup`, `device_last_signin`, `social_media_provider`, `ovo_saldo`) VALUES
	(4, 'malik', '$2a$10$DjcFut885HqDCy4z70YR/O8XvW1Dlx.f.MzwHgngD5hoctr7YtCOO', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0),
	(5, 'parjo', '$2a$10$mA411a9k6Q0Tjs2Ci24nxe/CrPNPIWmkTsi7Cy3diDfLD5EhuzmSa', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0),
	(6, 'parjo', '$2a$10$6CPA5LARYMsTQoObvWaIaueoF9RWCNvVw0cNYyx5T3TDyFhaRjwCq', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0),
	(7, 'parjo', '$2a$10$5.vRGeOwFaRA9ZjRIh5kbupcn4w18zN2LaQUCZJucYkMpKhmlAyi6', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0),
	(8, 'malik', '$2a$10$DMFFpfwSo5E9e09sAIW07.TARe6KAfo3l4rBbMFeY9fmRyFJx6Y26', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 1, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0),
	(9, 'malik2', '$2a$10$ZCjMH0Lq56dGMVQCEQ6tSeDnUO9ezIU8xl5mcP/9pWz/8EBg.Fore', 'muhammad cholis malik', 'mcholismalik.official@gmail.com', 2147483647, 1, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
