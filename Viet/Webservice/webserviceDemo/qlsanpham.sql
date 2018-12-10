-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2018 at 11:51 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlsanpham`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbsanpham`
--

CREATE TABLE `tbsanpham` (
  `id` int(11) NOT NULL,
  `masp` varchar(500) NOT NULL,
  `tensp` varchar(5000) NOT NULL,
  `soluong` int(255) NOT NULL,
  `HinhAnh` varchar(5000) NOT NULL DEFAULT 'https://facebook.github.io/react/logo-og.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbsanpham`
--

INSERT INTO `tbsanpham` (`id`, `masp`, `tensp`, `soluong`, `HinhAnh`) VALUES
(3, 'sp001', 'ao', 10, 'http://icons.iconarchive.com/icons/michael/nike/128/Nike-Shirt-14-icon.png'),
(7, 'sp100', 'ao them', 10, 'http://cf.shopee.vn/file/8617824621ddcb68cb8d33af6eb13690'),
(20, 'sp00020', 'Giày nam', 1, 'https://cf.shopee.vn/file/168b9d14e86fc4f6cb8b5837b3b0f022'),
(21, 'sp00021', 'quần tây', 11, 'https://cf.shopee.vn/file/c89ddb2e7ecd8f061106bb8acd540255');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbsanpham`
--
ALTER TABLE `tbsanpham`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbsanpham`
--
ALTER TABLE `tbsanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
