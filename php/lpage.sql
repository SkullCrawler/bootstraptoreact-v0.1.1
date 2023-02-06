-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 25, 2023 at 02:40 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hamza`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`title`, `content`, `id`) VALUES
('First Blog', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Ea eveniet aut dolorem repellendus, id repudiandae neque provident enim quaerat possimus? Delectus, omnis voluptates. Odio veritatis distinctio iusto error!\r\nCorporis eum maiores t', 1),
('2nd Blog', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Ea eveniet aut dolorem repellendus, id repudiandae neque provident enim quaerat possimus? Delectus, omnis voluptates. Odio veritatis distinctio iusto error!\r\nCorporis eum maiores t', 2),
('3rd Blog', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Ea eveniet aut dolorem repellendus, id repudiandae neque provident enim quaerat possimus? Delectus, omnis voluptates. Odio veritatis distinctio iusto error!\r\nCorporis eum maiores t', 3),
('4th Blog', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Ea eveniet aut dolorem repellendus, id repudiandae neque provident enim quaerat possimus? Delectus, omnis voluptates. Odio veritatis distinctio iusto error! Corporis eum maiores t', 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
