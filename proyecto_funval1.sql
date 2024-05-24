-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 11:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto_funval1`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_users`
--

CREATE TABLE `all_users` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ;

--
-- Dumping data for table `all_users`
--

INSERT INTO `all_users` (`ID`, `name`, `email`, `role`, `profile_picture`, `password`) VALUES
(2, 'Ana Gómez', 'ana.gomez@example.com', 'Controller', '2ana.jpg', 'password456'),
(4, 'María Fernández', 'maria.fernandez@example.com', 'Maestro', '4maria.jpg', 'password101112'),
(5, 'Luis Martínez', 'luis.martinez@example.com', 'Maestro', '5luis.jpg', 'password131415'),
(6, 'José Maria', 'josemaria@gmail.com', 'Controller', '1716580000898-bill.jpg', 'josemariche147'),
(9, 'Jonatan', 'jonatan@example.com', 'Supervisor', '1716577657679-ellis.png', 'left4dead'),
(12, 'Hyrum', 'hyrum@gmail.com', 'Supervisor', '1716578342370-louis.jpg', 'machupichu123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_users`
--
ALTER TABLE `all_users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_users`
--
ALTER TABLE `all_users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
