-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2018 at 01:09 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

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
(4, 'quan_vo', 'e10adc3949ba59abbe56e057f20f883e', 'quan@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `img` text COLLATE utf8_unicode_ci,
  `des` text COLLATE utf8_unicode_ci,
  `title` text COLLATE utf8_unicode_ci,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `img`, `des`, `title`, `price`) VALUES
(1, 'https://drop.ndtv.com/TECH/product_database/images/530201374810PM_635_iPhone_4s.png', 'The Apple iPhone 4S is powered by 800 MHz dual-core processor and it comes with 512MB of RAM. The phone packs 16GB of internal storage that cannot be expanded.\r\nThe Apple iPhone 4S is a single SIM (GSM) smartphone that accepts a Micro-SIM.', 'Iphone 4S', 4000000),
(2, 'https://shopdunk.com/wp-content/uploads/2016/11/iphone-5s-den-1.png', 'Apple iPhone 5s. Apple iPhone 5s smartphone was launched in September 2013. The phone comes with a 4.00-inch touchscreen display with a resolution of 640 pixels by 1136 pixels at a PPI of 326 pixels per inch.\r\nThe Apple iPhone 5s is powered by 1.3GHz dual-core processor and it comes with 1GB of RAM.', 'Iphone 5S', 6000000),
(3, 'https://drop.ndtv.com/TECH/product_database/images/918201370949PM_635_iPhone-5s.jpeg', 'The Apple iPhone 5 is powered by 1.3GHz dual-core processor and it comes with 1GB of RAM. The phone packs 16GB of internal storage that cannot be expanded. As far as the cameras are concerned, the Apple iPhone 5 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.', 'Iphone 5', 4500000),
(4, 'https://www.91-img.com/pictures/apple-iphone-6s-plus-32gb-mobile-phone-large-1.jpg', 'Apple iPhone 6s Plus smartphone was launched in September 2015. The phone comes with a 5.50-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 401 pixels per inch. Apple iPhone 6s Plus price in India starts from Rs. 30,999. Apple iPhone 6s Plus comes with 2GB of RAM.', 'Iphone 6S Plus', 8000000),
(5, 'https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-black_8.jpg', 'The Apple iPhone 7 is powered by 2.34GHz quad-core processor and it comes with 2GB of RAM. The phone packs 32GB of internal storage that cannot be expanded. As far as the cameras are concerned, the Apple iPhone 7 packs a 12-megapixel (f/1.8) primary camera on the rear and a 7-megapixel front shooter for selfies.', 'Iphone 7', 7500000),
(6, 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-7-plus-128gb-ll-a-quoc-te-didongviet_1.jpg', 'The Apple iPhone 7 Plus is powered by quad-core processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that cannot be expanded. As far as the cameras are concerned, the Apple iPhone 7 Plus packs a 12-megapixel primary camera on the rear and a 7-megapixel front shooter for selfies.', 'Iphone 7S Plus', 10000000),
(7, 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-8-64gb-quoc-te-chua-active-den-didongviet.jpg', 'he iPhone 8 includes a 4.7-inch display, while the iPhone 8 Plus features a larger 5.5-inch display. Both displays were upgraded with True Tone support, designed to adapt color temperature and intensity to the ambient light in a room for a more natural, paper-like viewing experience.', 'iPhone 8', 15000000),
(8, 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-512gb-2-sim-moi-mau-vang-didongviet.jpg', 'The XS has a design visually near-identical to the X but includes upgraded hardware, featuring the A12 Bionic chip built with a 7 nanometer process.[10] It also features a 5.85-inch (149 mm) OLED display and contains dual 12-megapixel rear cameras and one 7-megapixel front-facing camera. The XS Max features the same hardware and cameras, but has a larger 6.46-inch (164 mm) OLED display and battery (3,174mAh)', 'iPhone XS', 32000000);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
