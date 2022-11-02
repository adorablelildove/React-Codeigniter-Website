-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 01:13 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sbsp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `psswd` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id_blog` int(10) NOT NULL,
  `foto` text DEFAULT NULL,
  `link_video` varchar(50) NOT NULL,
  `tulisan` text DEFAULT NULL,
  `tgl` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id_blog`, `foto`, `link_video`, `tulisan`, `tgl`) VALUES
(1, 'guci.jpg', 'www.youtube.com', 'Database adalah sesuatu yang berfungsi untuk menyimpan data-data pada website. Terdapat berbagai jenis database seperti MySQL, PostgreSQL, Oracle SQL dan sebagainya. Karena database adalah jantungnya website, maka kehadirannya sangat penting. Bagi sebagian orang yang terbiasa membuat website, pasti akan membuat database di localhost terlebih dahulu. Apa itu localhost? Localhost adalah environment hosting yang terinstall di komputer lokal. Jadi sebelum website online dan diletakkan di Hosting murah berkualitas , kamu bisa cek terlebih dahulu database dan website yang dikembangkan. Bagaimana cara membuat database MySQL di localhost/phpmyadmin? Pada panduan kali ini akan dijelaskan cara membuat database MySQL localhost/phpmyadmin – XAMPP.\r\n\r\n', '2021-10-13 23:03:34');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id_contact` int(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `telp1` varchar(15) NOT NULL,
  `telp2` varchar(15) NOT NULL,
  `alamat` varchar(300) NOT NULL,
  `medsos_instagram` varchar(100) NOT NULL,
  `medsos_facebook` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id_contact`, `nama`, `email`, `telp1`, `telp2`, `alamat`, `medsos_instagram`, `medsos_facebook`) VALUES
(1, 'diniiii', 'dini@gmail.com', '082294976854', '087654352757', 'RT. 01 Dusun Kelagian Lama, Desa Kelagian. Kec. Tebing Tinggi, Kab. Tanjung Jabung Barat, Provinsi Jambi ', 'dini12345', 'andinii');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(10) NOT NULL,
  `kd_produk` varchar(10) NOT NULL,
  `nama_produk` varchar(20) NOT NULL,
  `foto` text NOT NULL,
  `harga` int(9) NOT NULL,
  `deskripsi` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `kd_produk`, `nama_produk`, `foto`, `harga`, `deskripsi`, `timestamp`) VALUES
(1, 'PRD11', 'Gantungan Kunci', 'WhatsApp_Image_2021-10-10_at_14_33_26111.jpeg', 100000, 'guci cantik yang terbuat dari koran bekas ', '2021-10-13 23:04:28'),
(13, 'PRD1', 'Guci', '213.png', 100000, 'njsnjsnjs', '2021-10-13 23:04:08'),
(17, 'PRD10', 'Bunga', 'WhatsApp_Image_2021-10-10_at_14_33_2612.jpeg', 30000, 'bunga tulip', '2021-10-13 23:04:50'),
(18, 'prd20', 'Gunting', 'guci.jpg', 2000, 'hhehrhrh', '2021-10-08 06:30:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id_blog`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id_contact`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id_blog` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id_contact` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
