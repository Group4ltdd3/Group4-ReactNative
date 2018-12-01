-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2018 at 11:26 AM
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
-- Database: `data`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`) VALUES
(1, 'asdasd', '123', 'asdasd@gmail.com'),
(2, 'phuc', '202cb962ac59075b964b07152d234b70', 'phuc@gmail.com'),
(3, 'hoang', '202cb962ac59075b964b07152d234b70', 'hoang@gmail.com'),
(4, 'quan_vo', 'e10adc3949ba59abbe56e057f20f883e', 'quan@gmail.com'),
(5, 'ahii', 'b59c67bf196a4758191e42f76670ceba', 'aa@gmai.com'),
(6, 'admin', '4297f44b13955235245b2497399d7a93', 'admin@admin.com'),
(7, 'hoang1', 'e10adc3949ba59abbe56e057f20f883e', 'hoang1@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `img` text COLLATE utf8_unicode_ci,
  `des` text COLLATE utf8_unicode_ci,
  `title` text COLLATE utf8_unicode_ci,
  `price` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `img`, `des`, `title`, `price`) VALUES
(1, 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphone4s-black-338x450.png', 'Băng tần - Sim 2G/3G, HSPA\r\nGPU PowerVR SGX543MP2\r\nCPU Cortex-A9\r\nBộ nhớ trong 64 GB\r\nRAM 512 MB\r\nMàn hình IPS LCD 3.5\", DVGA\r\nCamera trước 0.3 MP\r\nCamera sau 8.0 MP\r\nPin Li-Po 1432 mAh\r\nSim 1 Micro SIM\r\nMàu sắc Đen, Trắng', 'Iphone 4S', '4,000,000đ'),
(2, 'https://didongthongminh.vn/upload_images/2017/10/5SGOLD.png', 'Băng tần - Sim 2G/3G, LTE\r\nGPU PowerVR G6430\r\nCPU Apple A9\r\nBộ nhớ trong 64 GB\r\nBảo mật nâng cao Mở khóa bằng vân tay\r\nRAM 1 GB\r\nPin Li-Po 1560 mAh\r\nMàn hình IPS LCD, 4.0\", DVGA\r\nCamera trước 1.2 MP\r\nCamera sau 8.0 MP\r\nSim 1 Nano SIM\r\nMàu sắc Trắng, Vàng, Xám', 'Iphone 5S', '6,000,000đ'),
(3, 'https://didongthongminh.vn/upload_images/2017/10/5trang-1.png', 'Băng tần - Sim 2G/3G, LTE\r\nGPU PowerVR SGX 543MP3\r\nCPU Apple A6\r\nBộ nhớ trong 32 GB\r\nRAM 1 GB\r\nPin Li-Po 1440 mAh\r\nMàn hình IPS LCD, 4.0\", DVGA\r\nCamera trước 1.2 MP\r\nCamera sau 8.0 MP\r\nSim 1 Nano SIM\r\nMàu sắc Đen, Trắng', 'Iphone 5', '4,500,000đ'),
(4, 'https://cdn.didongthongminh.vn/upload_images/2018/05/iphone6s-sliver-300x400.png', 'Băng tần - Sim 2G/3G, LTE\r\nGPU PowerVR GT7600\r\nCPU Apple A9\r\nBộ nhớ trong 128 GB\r\nBảo mật nâng cao Mở khóa bằng vân tay\r\nRAM 2 GB\r\nPin Li-Po 2750 mAh\r\nMàn hình IPS LCD, 5.5\", Full HD\r\nCamera trước 5.0 MP\r\nCamera sau 12 MP\r\nSim 1 Nano SIM\r\nMàu sắc Bạc, Hồng, Vàng, Xám', 'Iphone 6S Plus', '8,000,000đ'),
(5, 'https://didongthongminh.vn/upload_images/2017/10/iphone7-black.png', 'Băng tần - Sim 2G/3G, LTE\r\nBảo mật nâng cao Mở khóa bằng vân tay\r\nMàu sắc Bạc, Đen, Hồng, Jet Black, Vàng\r\nCPU Apple A10 Fusion\r\nBộ nhớ trong 128 GB\r\nCamera sau 12 MP\r\nCamera trước 7.0 MP\r\nPin Li-Po 1960 mAh\r\nRAM 2 GB\r\nMàn hình IPS LCD, 4.7\", HD\r\nSim 1 Nano SIM', 'Iphone 7', '7,500,000đ'),
(6, 'https://didongthongminh.vn/upload_images/2017/10/iphone7-plus-jetblack.png', 'Băng tần - Sim 2G/3G, LTE\r\nBảo mật nâng cao Mở khóa bằng vân tay\r\nMàu sắc	Bạc, Đen, Đỏ, Hồng, Jet Black, Vàng\r\nCPU Apple A10 Fusion\r\nBộ nhớ trong 128 GB\r\nCamera sau 12 MP\r\nCamera trước 7.0 MP\r\nPin Li-Ion 2900 mAh\r\nRAM 3 GB\r\nSim 1 Nano SIM\r\nMàn hình IPS LCD, 5.5\", Full HD', 'Iphone 7 Plus', '10,000,000đ'),
(7, 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphone8-gold-338x450.png', 'Băng tần - Sim 2G/3G, LTE\r\nBảo mật nâng cao Mở khóa bằng vân tay, Quét mống mắt\r\nMàu sắc Bạc, Đỏ, Vàng, Xám\r\nCPU Apple A11 Bionic\r\nBộ nhớ trong 256 GB\r\nCamera sau 12 MP\r\nCamera trước 7.0 MP\r\nPin Li-Ion 1821 mAh\r\nRAM 2 GB\r\nMàn hình IPS LCD, 4.7\", qHD\r\nSim 1 Nano SIM', 'iPhone 8', '15,000,000đ'),
(8, 'https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png', 'Băng tần - Sim	2G/3G, LTE\r\nMàn hình 6.5\" Super Retina HD\r\nCPU Apple A12 Bionic\r\nRAM 4 GB\r\nBộ nhớ trong 512 GB\r\nCamera sau Dual 12 MP\r\nCamera trước 7.0 MP\r\nSim Dual SIM (nano-SIM and eSIM)\r\nCảm biến Face ID, Barometer, Three‑axis gyro, Accelerometer, Proximity sensor, Ambient light sensor\r\nBảo mật nâng cao FaceID\r\nPin Li-Ion 3174 mAh\r\nMàu sắc Bạc, Vàng, Xám', 'iPhone XS', '32,000,000đ'),
(9, 'https://cdn.didongthongminh.vn/upload_images/2017/10/apple-ipadair2-4g-qsd-grey-338x450.png', 'Màn hình IPS LCD, 9.7\", HD\r\nCPU  Apple A8X\r\nRAM  2 GB\r\nBộ nhớ trong	16 GB, 32 GB, 64 GB, 128 GB\r\nPin	Li-Po 8600 mAh\r\nCamera sau	8.0 MP', 'Ipad Air', '7,990,000đ'),
(10, 'https://cdn.didongthongminh.vn/upload_images/2017/10/apple-ipadpro12.9-4g-qsd-grey-338x450.png', 'Màn hình IPS LCD, 10.5\" 1668 x 2224 pixels\r\nCPU Apple A10X Fusion\r\nRAM 4 GB\r\nBộ nhớ trong 64 GB\r\nCamera sau 12 MP\r\nCamera trước 7 MP\r\nMàu sắc Đen, Hồng, Trắng, Vàng\r\nPin Li-Ion 8134 mAh\r\n', 'Ipad Pro', '13,790,000đ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
