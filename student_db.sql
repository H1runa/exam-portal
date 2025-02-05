-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2025 at 07:19 PM
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
-- Database: `student_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `241f_credit`
--

CREATE TABLE `241f_credit` (
  `subject` varchar(10) NOT NULL,
  `credit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `241f_credit`
--

INSERT INTO `241f_credit` (`subject`, `credit`) VALUES
('apf', 4),
('cn', 3),
('dlc', 3),
('dm', 4),
('dmw', 4),
('ead', 3),
('ecs', 2),
('final', 4),
('gui', 3),
('ics', 3),
('mc', 3),
('oop', 3),
('os', 3),
('se', 3);

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `index_num` varchar(15) NOT NULL,
  `subject` text NOT NULL,
  `date` date NOT NULL,
  `cw` varchar(10) NOT NULL,
  `exam` varchar(10) NOT NULL,
  `final` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `index_num`, `subject`, `date`, `cw`, `exam`, `final`) VALUES
(2, 'codse241f-058', 'ics', '2024-02-13', 'A+', 'A', 'A+'),
(3, 'codse241f-058', 'mc', '2024-02-06', 'A+', 'B', 'B'),
(4, 'codse241f-058', 'apf', '2024-02-13', 'A', 'C', 'B-'),
(5, 'codse241f-058', 'dlc', '2024-02-05', 'B+', 'A-', 'A-'),
(6, 'codse241f-058', 'oop', '2024-02-08', 'A', 'B', 'B+'),
(7, 'codse241f-058', 'dm', '2024-02-12', 'B-', 'B+', 'B'),
(8, 'codse241f-058', 'cn', '2024-02-15', 'A-', 'A', 'A'),
(9, 'codse241f-058', 'gui', '2024-02-18', 'B+', 'C+', 'B-'),
(10, 'codse241f-058', 'ead', '2024-02-21', 'A', 'A-', 'A'),
(11, 'codse241f-058', 'dmw', '2024-02-24', 'B-', 'C', 'C+'),
(12, 'codse241f-058', 'os', '2024-02-27', 'A-', 'B+', 'A-'),
(13, 'codse241f-058', 'ecs', '2024-03-02', 'B', 'B-', 'B'),
(14, 'codse241f-058', 'final', '2024-03-05', 'A', 'A+', 'A+'),
(15, 'codse241f-058', 'mc', '2024-02-22', 'X', 'A', 'A+'),
(16, 'codse241f-058', 'apf', '2019-02-13', 'X', 'A', 'A+'),
(17, 'codse241f-032', 'ics', '2019-02-13', 'A', 'B+', 'A-'),
(18, 'codse241f-032', 'mc', '2025-02-04', 'A', 'C', 'B'),
(19, 'codse241f-032', 'apf', '2025-02-04', 'A', 'B+', 'A'),
(20, 'codse241f-032', 'dlc', '2025-02-04', 'A', 'D+', 'B'),
(21, 'codse241f-032', 'oop', '2025-02-04', 'A+', 'X', 'X'),
(22, 'codse241f-032', 'dm', '2025-02-04', 'A+', 'A+', 'A+'),
(23, 'codse241f-032', 'gui', '2025-02-04', 'A+', 'A+', 'A+'),
(24, 'codse241f-032', 'se', '2025-02-04', 'A+', 'A', 'A'),
(25, 'codse241f-032', 'oop', '2024-02-13', 'X', 'A+', 'A+');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `index` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `241f_credit`
--
ALTER TABLE `241f_credit`
  ADD PRIMARY KEY (`subject`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
