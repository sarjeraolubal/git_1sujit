-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Sep 11, 2017 at 10:28 AM
-- Server version: 5.6.35-80.0-log
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bigdata1_devstar`
--

-- --------------------------------------------------------

--
-- Table structure for table `audittrail`
--

DROP TABLE IF EXISTS `audittrail`;
CREATE TABLE IF NOT EXISTS `audittrail` (
  `id` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  `script` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  `table` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `keyvalue` longtext,
  `oldvalue` longtext,
  `newvalue` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_adv_deduct`
--

DROP TABLE IF EXISTS `H_lp_adv_deduct`;
CREATE TABLE IF NOT EXISTS `H_lp_adv_deduct` (
  `adduct_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `adduct_date` date DEFAULT NULL,
  `adduct_amt` double DEFAULT NULL,
  `adduct_auth` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_adv_finyear`
--

DROP TABLE IF EXISTS `H_lp_adv_finyear`;
CREATE TABLE IF NOT EXISTS `H_lp_adv_finyear` (
  `fy_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `fy_accyear` varchar(10) DEFAULT NULL,
  `fy_accyearstartdt` date DEFAULT NULL,
  `fy_accyearenddt` date DEFAULT NULL,
  `fy_year` int(11) DEFAULT NULL,
  `fy_month` int(11) DEFAULT NULL,
  `fy_trandtfrom` date DEFAULT NULL,
  `fy_trandtto` date DEFAULT NULL,
  `fy_status` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_adv_m`
--

DROP TABLE IF EXISTS `H_lp_adv_m`;
CREATE TABLE IF NOT EXISTS `H_lp_adv_m` (
  `am_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `am_advdate` date DEFAULT NULL,
  `am_slip_nbr` varchar(4) DEFAULT NULL,
  `am_amount` double DEFAULT NULL,
  `am_desc` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_lp_adv_m`
--

INSERT INTO `H_lp_adv_m` (`am_tabreckey`, `sys_co_code`, `gm_badge_no`, `am_advdate`, `am_slip_nbr`, `am_amount`, `am_desc`) VALUES
(5, '02', '1', '2017-07-12', '2222', 200, 'ssssssss'),
(5, '02', '1', '2017-07-12', '2222', 200, 'ssssssss');

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_adv_os`
--

DROP TABLE IF EXISTS `H_lp_adv_os`;
CREATE TABLE IF NOT EXISTS `H_lp_adv_os` (
  `ao_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `ao_date` date DEFAULT NULL,
  `ao_totadv` double DEFAULT NULL,
  `ao_totrecoverd` double DEFAULT NULL,
  `ao_balance_amt` double DEFAULT NULL,
  `ao_recover_month` int(11) DEFAULT NULL,
  `ao_recover_amt_pm` double DEFAULT NULL,
  `ao_process_schedule` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`ao_tabreckey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_commo_m`
--

DROP TABLE IF EXISTS `H_lp_commo_m`;
CREATE TABLE IF NOT EXISTS `H_lp_commo_m` (
  `cm_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `cm_code` varchar(4) DEFAULT NULL,
  `cm_name` varchar(40) DEFAULT NULL,
  `cm_price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_dc_gdtl`
--

DROP TABLE IF EXISTS `H_lp_dc_gdtl`;
CREATE TABLE IF NOT EXISTS `H_lp_dc_gdtl` (
  `dc_gdtl_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `dwd_tabreckey` bigint(20) DEFAULT NULL,
  `gm_gang_code` varchar(4) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_lp_dc_gdtl`
--

INSERT INTO `H_lp_dc_gdtl` (`dc_gdtl_tabreckey`, `dwd_tabreckey`, `gm_gang_code`, `gm_badge_no`) VALUES
(6, 2, '001', '1'),
(7, 2, '001A', '2'),
(16, 4, '001', '1'),
(17, 4, '001A', '2'),
(18, 4, '001B', '3'),
(19, 4, '001C', '4'),
(20, 4, '001D', '5'),
(21, 4, '001E', '6'),
(22, 4, '001F', '7'),
(23, 4, '001G', '8'),
(36, 6, '004', '38'),
(37, 6, '004A', '39'),
(38, 6, '004B', '40'),
(39, 6, '004C', '41'),
(40, 6, '004', '38'),
(41, 6, '004A', '39'),
(42, 6, '004B', '40'),
(43, 6, '004C', '41'),
(92, 18, '012A', '141'),
(93, 18, '012C', '143'),
(94, 18, '012D', '144'),
(95, 18, '012E', '145'),
(96, 18, '012G', '147'),
(97, 18, '012H', '148'),
(1, 1, '001', '1'),
(2, 1, '001A', '2'),
(3, 1, '001B', '3'),
(4, 1, '001C', '4'),
(5, 1, '001D', '5'),
(116, 1, '001', '1'),
(117, 1, '001A', '2'),
(118, 1, '001B', '3'),
(119, 1, '001C', '4'),
(120, 1, '001D', '5'),
(121, 1, '001E', '6'),
(122, 1, '001', '1'),
(123, 1, '001A', '2'),
(124, 1, '001B', '3'),
(125, 1, '001C', '4'),
(126, 1, '001D', '5'),
(127, 1, '001E', '6'),
(128, 1, '001', '1'),
(129, 1, '001A', '2'),
(130, 1, '001B', '3'),
(131, 1, '001C', '4'),
(132, 1, '001D', '5'),
(133, 1, '001E', '6'),
(1, 25, '007B', '79'),
(2, 25, '007C', '80'),
(3, 25, '007E', '82'),
(4, 25, '007G', '84'),
(5, 25, '010A', '115'),
(21, 28, '006', '63'),
(22, 28, '006A', '64'),
(12, 27, '043C', '533'),
(13, 27, '043E', '534'),
(14, 27, '043F', '535'),
(15, 27, '043G', '536'),
(16, 27, '043H', '537'),
(17, 27, '043I', '538'),
(18, 27, '043J', '539'),
(19, 27, '043K', '540'),
(20, 27, '031I', '380'),
(6, 25, '007B', '79'),
(7, 25, '007C', '80'),
(8, 25, '007E', '82'),
(9, 25, '007G', '84'),
(10, 25, '010A', '115'),
(11, 25, '007F', '83'),
(372, 105, 'FM14', '905');

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_dc_pri_inf`
--

DROP TABLE IF EXISTS `H_lp_dc_pri_inf`;
CREATE TABLE IF NOT EXISTS `H_lp_dc_pri_inf` (
  `dwd_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `dwd_date` date DEFAULT NULL,
  `dwd_slip_nbr` varchar(4) DEFAULT NULL,
  `vm_code` varchar(4) DEFAULT NULL,
  `dwd_cha_no` varchar(4) DEFAULT NULL,
  `dwd_shed` varchar(6) DEFAULT NULL,
  `dwd_shift` varchar(6) DEFAULT NULL,
  `cm_code` varchar(4) DEFAULT NULL,
  `clrm_code` varchar(4) DEFAULT NULL,
  `dwd_labors` int(11) DEFAULT NULL,
  `dwd_lab_amount` double DEFAULT NULL,
  `dwd_total_amount` double DEFAULT NULL,
  `dwd_matha` int(11) DEFAULT NULL,
  `dwd_totalperson` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_lp_dc_pri_inf`
--

INSERT INTO `H_lp_dc_pri_inf` (`dwd_tabreckey`, `sys_co_code`, `dwd_date`, `dwd_slip_nbr`, `vm_code`, `dwd_cha_no`, `dwd_shed`, `dwd_shift`, `cm_code`, `clrm_code`, `dwd_labors`, `dwd_lab_amount`, `dwd_total_amount`, `dwd_matha`, `dwd_totalperson`) VALUES
(2, '01', '2017-06-15', '1111', 'GP', NULL, 'SHED1', 'SHIFT1', 'M', '02', 2, 396, 475, 237, 2),
(4, '01', '2017-08-03', '1234', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', 2, 376, 2062, 258, 8),
(6, '01', '2017-08-05', '8765', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 1112.74, 278, 4),
(6, '01', '2017-08-05', '8765', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 1112.74, 278, 4),
(18, '01', '2017-08-03', '1498', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 746.97, 124, 6),
(1, '01', '2017-06-13', 'werw', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', 2, 376, 500, 100, 5),
(1, '01', '2017-06-13', 'werw', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', 2, 376, 914.74, 152, 6),
(1, '01', '2017-06-13', 'test', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', 2, 376, 1399.98, 152, 6),
(1, '01', '2017-06-13', 'test', 'GP', NULL, 'SHED1', 'SHIFT1', 'YP', '01', 2, 376, 1399.98, 152, 6),
(25, '01', '2017-08-26', '1811', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 1546.03, 258, 6),
(28, '01', '2017-08-26', '1812', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 1269.37, 635, 2),
(27, '01', '2017-08-26', '1811', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 6298.04, 700, 9),
(25, '01', '2017-08-26', '1811', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '01', NULL, NULL, 1546.03, 258, 6),
(105, '01', '2017-08-25', '1810', 'AK', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3150, 3150, 1);

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_dc_wdtl`
--

DROP TABLE IF EXISTS `H_lp_dc_wdtl`;
CREATE TABLE IF NOT EXISTS `H_lp_dc_wdtl` (
  `dc_wdtl_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `dwd_tabreckey` bigint(20) DEFAULT NULL,
  `wtm_code` varchar(4) DEFAULT NULL,
  `dwd_bags` int(11) DEFAULT NULL,
  `wtm_amount` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_lp_dc_wdtl`
--

INSERT INTO `H_lp_dc_wdtl` (`dc_wdtl_tabreckey`, `dwd_tabreckey`, `wtm_code`, `dwd_bags`, `wtm_amount`) VALUES
(4, 2, 'B5', 100, 150),
(5, 2, 'B', 200, 325.48),
(11, 4, 'B', 100, 162.74),
(12, 4, 'B5', 200, 300),
(13, 4, 'BL', 300, 600),
(14, 4, 'BU', 500, 1000),
(20, 6, 'B', 100, 162.74),
(21, 6, 'B5', 100, 150),
(22, 6, 'BL', 200, 400),
(23, 6, 'BL', 200, 400),
(24, 6, 'B', 100, 162.74),
(25, 6, 'B5', 100, 150),
(26, 6, 'BL', 200, 400),
(27, 6, 'BL', 200, 400),
(45, 18, 'LD', 459, 746.9766000000001),
(1, 1, 'B', 2, 325.48),
(2, 1, 'BL', 40, 8000),
(3, 1, 'PP', 100, 13513),
(50, 1, 'B', 2, 325.48),
(51, 1, 'BL', 40, 8000),
(52, 1, 'PL', 200, 414.74),
(53, 1, 'B', 2, 325.48),
(54, 1, 'BL', 40, 8000),
(55, 1, 'PL', 234, 485.24580000000003),
(56, 1, 'B', 2, 325.48),
(57, 1, 'BL', 40, 8000),
(58, 1, 'PL', 234, 485.25),
(1, 25, 'LD', 950, 1546.03),
(4, 28, 'B', 430, 699.78),
(3, 27, 'LD', 3870, 6298.04),
(2, 25, 'LD', 950, 1546.03),
(82, 105, 'FM', 2100, 3150);

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_gang_m`
--

DROP TABLE IF EXISTS `H_lp_gang_m`;
CREATE TABLE IF NOT EXISTS `H_lp_gang_m` (
  `gm_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `gm_gang_code` varchar(4) DEFAULT NULL,
  `gm_name` varchar(100) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `gm_memcatg` varchar(20) DEFAULT NULL,
  `gm_bankaccnbr` varchar(15) DEFAULT NULL,
  `adv_amount` double(10,2) NOT NULL,
  `adv_os` double(10,2) NOT NULL,
  `gm_name_marathi` varchar(100) NOT NULL,
  `gm_email` varchar(100) DEFAULT NULL,
  `gm_mphonenbr` varchar(10) DEFAULT NULL,
  `gm_pf_no` varchar(8) NOT NULL,
  `gm_esic_no` varchar(12) NOT NULL,
  PRIMARY KEY (`gm_tabreckey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_lp_gang_m`
--

INSERT INTO `H_lp_gang_m` (`gm_tabreckey`, `gm_gang_code`, `gm_name`, `gm_badge_no`, `gm_memcatg`, `gm_bankaccnbr`, `adv_amount`, `adv_os`, `gm_name_marathi`, `gm_email`, `gm_mphonenbr`, `gm_pf_no`, `gm_esic_no`) VALUES
(463, '038A', 'BALU SABALE', '465', 'PERMANENT', '010000010018284', 50000.00, 0.00, '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_labour_rm`
--

DROP TABLE IF EXISTS `H_lp_labour_rm`;
CREATE TABLE IF NOT EXISTS `H_lp_labour_rm` (
  `clrm_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `clrm_code` varchar(4) DEFAULT NULL,
  `clrm_desc` varchar(40) DEFAULT NULL,
  `clrm_rate` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_vessel_m`
--

DROP TABLE IF EXISTS `H_lp_vessel_m`;
CREATE TABLE IF NOT EXISTS `H_lp_vessel_m` (
  `vm_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `vm_code` varchar(4) DEFAULT NULL,
  `vm_name` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_lp_work_tm`
--

DROP TABLE IF EXISTS `H_lp_work_tm`;
CREATE TABLE IF NOT EXISTS `H_lp_work_tm` (
  `wtm_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `wtm_code` varchar(4) DEFAULT NULL,
  `wtm_name` varchar(40) DEFAULT NULL,
  `wtm_rate` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `H_smestar_syscom`
--

DROP TABLE IF EXISTS `H_smestar_syscom`;
CREATE TABLE IF NOT EXISTS `H_smestar_syscom` (
  `sys_co_nbr` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `sys_co_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `H_smestar_syscom`
--

INSERT INTO `H_smestar_syscom` (`sys_co_nbr`, `sys_co_code`, `sys_co_name`) VALUES
(2, '01', 'AJAY INTERNATIONAL'),
(3, '02', 'VILAS TRANSPORT CORPORATION'),
(4, '03', 'M R LOGISTICS');

-- --------------------------------------------------------

--
-- Table structure for table `H_smestar_up`
--

DROP TABLE IF EXISTS `H_smestar_up`;
CREATE TABLE IF NOT EXISTS `H_smestar_up` (
  `up_tabreckey` bigint(20) NOT NULL DEFAULT '0',
  `sys_co_code` varchar(20) DEFAULT NULL,
  `up_uid` varchar(100) DEFAULT NULL,
  `up_ak` varchar(200) DEFAULT NULL,
  `up_regdate` date DEFAULT NULL,
  `up_lockstatus` varchar(30) DEFAULT NULL,
  `up_status` varchar(30) DEFAULT NULL,
  `up_lastaccessdate` date DEFAULT NULL,
  `up_expdate` date DEFAULT NULL,
  `up_mid` varchar(200) DEFAULT NULL,
  `up_eid` varchar(50) DEFAULT NULL,
  `up_radt` date DEFAULT NULL,
  `up_rudt` date DEFAULT NULL,
  `up_rauid` varchar(30) DEFAULT NULL,
  `up_ruuid` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lp_adv_deduct`
--

DROP TABLE IF EXISTS `lp_adv_deduct`;
CREATE TABLE IF NOT EXISTS `lp_adv_deduct` (
  `adduct_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `adduct_date` date DEFAULT NULL,
  `adduct_amt` double(10,2) DEFAULT NULL,
  `adduct_auth` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`adduct_tabreckey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `lp_adv_finyear`
--

DROP TABLE IF EXISTS `lp_adv_finyear`;
CREATE TABLE IF NOT EXISTS `lp_adv_finyear` (
  `fy_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `fy_accyear` varchar(10) DEFAULT NULL,
  `fy_accyearstartdt` date DEFAULT NULL,
  `fy_accyearenddt` date DEFAULT NULL,
  `fy_year` int(11) DEFAULT NULL,
  `fy_month` int(11) DEFAULT NULL,
  `fy_trandtfrom` date DEFAULT NULL,
  `fy_trandtto` date DEFAULT NULL,
  `fy_status` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`fy_tabreckey`),
  UNIQUE KEY `fy_accyear` (`fy_accyear`),
  UNIQUE KEY `fy_year` (`fy_year`),
  UNIQUE KEY `fy_month` (`fy_month`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `lp_adv_finyear`
--

INSERT INTO `lp_adv_finyear` (`fy_tabreckey`, `sys_co_code`, `fy_accyear`, `fy_accyearstartdt`, `fy_accyearenddt`, `fy_year`, `fy_month`, `fy_trandtfrom`, `fy_trandtto`, `fy_status`) VALUES
(1, '01', '2017 2018', '2017-04-01', '2018-03-31', 2017, 8, '2017-08-01', '2017-08-31', 'OPEN');

-- --------------------------------------------------------

--
-- Table structure for table `lp_adv_m`
--

DROP TABLE IF EXISTS `lp_adv_m`;
CREATE TABLE IF NOT EXISTS `lp_adv_m` (
  `am_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `am_advdate` date DEFAULT NULL,
  `am_slip_nbr` varchar(4) DEFAULT NULL,
  `am_amount` double(8,2) DEFAULT NULL,
  `am_desc` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`am_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC AUTO_INCREMENT=7 ;

--
-- Dumping data for table `lp_adv_m`
--

INSERT INTO `lp_adv_m` (`am_tabreckey`, `sys_co_code`, `gm_badge_no`, `am_advdate`, `am_slip_nbr`, `am_amount`, `am_desc`) VALUES
(1, '02', '1', '2017-07-12', '2222', 200.00, 'ssssssss'),
(2, '02', '1', '2017-07-12', '2222', 200.00, 'ssssssss'),
(3, '02', '1', '2017-07-12', '2222', 200.00, 'ssssssss'),
(4, '02', '1', '2017-07-12', '2222', 200.00, 'ssssssss'),
(5, '02', '1', '2017-07-12', '2222', 200.00, 'ssssssss'),
(6, '01', '1', '2017-08-03', '1234', 100.00, 'school fees');

-- --------------------------------------------------------

--
-- Table structure for table `lp_adv_os`
--

DROP TABLE IF EXISTS `lp_adv_os`;
CREATE TABLE IF NOT EXISTS `lp_adv_os` (
  `ao_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `ao_date` date DEFAULT NULL,
  `ao_totadv` double(10,2) DEFAULT NULL,
  `ao_totrecoverd` double(10,2) DEFAULT NULL,
  `ao_balance_amt` double(10,2) DEFAULT NULL,
  `ao_recover_month` int(11) DEFAULT NULL,
  `ao_recover_amt_pm` double(10,2) DEFAULT NULL,
  `ao_process_schedule` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`ao_tabreckey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `lp_commo_m`
--

DROP TABLE IF EXISTS `lp_commo_m`;
CREATE TABLE IF NOT EXISTS `lp_commo_m` (
  `cm_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `cm_code` varchar(4) DEFAULT NULL,
  `cm_name` varchar(40) DEFAULT NULL,
  `cm_price` double(10,2) DEFAULT NULL,
  PRIMARY KEY (`cm_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `lp_commo_m`
--

INSERT INTO `lp_commo_m` (`cm_tabreckey`, `sys_co_code`, `cm_code`, `cm_name`, `cm_price`) VALUES
(1, 'AJAY', 'CM', 'CEMENT', 0.00),
(2, 'AJAY', 'YP', 'YELLOW PEAS', NULL),
(3, 'AJAY', 'M', 'MASUR', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `lp_dc_gdtl`
--

DROP TABLE IF EXISTS `lp_dc_gdtl`;
CREATE TABLE IF NOT EXISTS `lp_dc_gdtl` (
  `dc_gdtl_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `dwd_tabreckey` bigint(20) DEFAULT NULL,
  `gm_gang_code` varchar(4) DEFAULT NULL,
  `gm_badge_no` int(4) DEFAULT NULL,
  PRIMARY KEY (`dc_gdtl_tabreckey`),
  KEY `dwd_tabreckey` (`dwd_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=405 ;

--
-- Dumping data for table `lp_dc_gdtl`
--

INSERT INTO `lp_dc_gdtl` (`dc_gdtl_tabreckey`, `dwd_tabreckey`, `gm_gang_code`, `gm_badge_no`) VALUES
(23, 28, '006', 63),
(24, 28, '006A', 64),
(25, 27, '043C', 533),
(26, 27, '043E', 534),
(27, 27, '043F', 535),
(28, 27, '043G', 536),
(29, 27, '043H', 537),
(30, 27, '043I', 538),
(31, 27, '043J', 539),
(32, 27, '043K', 540),
(33, 27, '031I', 380),
(34, 25, '007B', 79),
(35, 25, '007C', 80),
(36, 25, '007E', 82),
(37, 25, '007G', 84),
(38, 25, '010A', 115),
(39, 25, '007F', 83),
(40, 29, '005', 51),
(41, 29, '005A', 52),
(42, 29, '005G', 58),
(43, 29, '005K', 62),
(44, 30, '016', 190),
(45, 30, '016A', 191),
(46, 30, '016B', 192),
(47, 30, '016C', 193),
(48, 30, '016D', 194),
(49, 30, '012K', 151),
(50, 31, '019', 224),
(51, 31, '019F', 230),
(52, 31, '019I', 233),
(53, 31, '020C', 241),
(54, 31, '020L', 250),
(55, 32, '014', 166),
(56, 32, '014C', 169),
(57, 32, '014G', 173),
(58, 32, '014H', 174),
(59, 32, '011L', 139),
(60, 33, '027', 326),
(61, 33, '027A', 327),
(62, 33, '027B', 328),
(63, 33, '027C', 329),
(64, 33, '027E', 331),
(65, 33, '027G', 333),
(66, 33, '027J', 336),
(67, 34, '040A', 493),
(68, 34, '040C', 495),
(69, 34, '040E', 497),
(70, 34, '040F', 498),
(71, 34, '041E', 509),
(72, 35, '007B', 79),
(73, 35, '007C', 80),
(74, 35, '007E', 82),
(75, 35, '007F', 83),
(76, 35, '007G', 84),
(77, 35, '010A', 115),
(78, 36, '004', 38),
(79, 36, '004A', 39),
(80, 36, '004C', 41),
(81, 36, '004E', 43),
(82, 36, '004J', 48),
(83, 36, '004K', 49),
(84, 36, '004L', 50),
(85, 37, '037', 452),
(86, 37, '037A', 453),
(87, 37, '037C', 455),
(88, 37, '037D', 456),
(89, 37, '037G', 459),
(90, 37, '044', 543),
(91, 37, '044A', 544),
(92, 38, '043C', 533),
(93, 38, '043F', 535),
(94, 38, '043I', 538),
(95, 38, '043J', 539),
(96, 38, '043K', 540),
(97, 38, '031I', 380),
(98, 39, '038', 464),
(99, 39, '038A', 465),
(100, 39, '038C', 467),
(101, 39, '038F', 470),
(102, 39, '038G', 471),
(103, 39, '038H', 472),
(104, 40, '006', 63),
(105, 41, '005', 51),
(106, 41, '005A', 52),
(107, 41, '005C', 54),
(108, 41, '005G', 58),
(109, 41, '005H', 59),
(110, 41, '005K', 62),
(111, 42, '028A', 339),
(112, 43, '008B', 91),
(113, 43, '008D', 93),
(114, 43, '008F', 95),
(115, 43, '008G', 96),
(116, 43, '008I', 98),
(117, 44, '012A', 141),
(118, 44, '012C', 143),
(119, 44, '012D', 144),
(120, 44, '012E', 145),
(121, 44, '012G', 147),
(122, 44, '012H', 148),
(123, 44, '012J', 150),
(124, 45, '018A', 215),
(125, 45, '016E', 195),
(126, 45, '016H', 198),
(127, 45, '038I', 473),
(128, 45, '021K', 263),
(129, 46, 'F08A', 826),
(130, 46, 'F08B', 827),
(131, 46, 'F08C', 828),
(132, 46, 'F08D', 829),
(133, 48, 'F07C', 818),
(134, 49, 'F09', 836),
(135, 49, 'F09A', 837),
(136, 49, 'F09D', 840),
(137, 49, 'F09E', 841),
(138, 49, 'F09G', 843),
(139, 50, 'MS1H', 951),
(140, 51, 'MS3E', 971),
(141, 52, 'MS2A', 956),
(142, 52, 'MS2C', 958),
(143, 52, 'MS2I', 964),
(144, 53, '035', 427),
(145, 53, '035A', 428),
(146, 53, '035B', 429),
(147, 53, '035D', 431),
(148, 53, '035F', 433),
(149, 53, '035H', 435),
(150, 53, '025A', 302),
(151, 53, '025B', 303),
(152, 54, '040A', 493),
(153, 54, '040C', 495),
(154, 54, '040E', 497),
(155, 54, '040F', 498),
(156, 54, '041', 504),
(157, 55, '008B', 91),
(158, 55, '008D', 93),
(159, 55, '008F', 95),
(160, 55, '008G', 96),
(161, 55, '008I', 98),
(162, 56, '037', 452),
(163, 56, '037A', 453),
(164, 56, '037C', 455),
(165, 56, '037D', 456),
(166, 56, '037E', 457),
(167, 56, '044', 543),
(168, 56, '044A', 544),
(169, 57, '009', 102),
(170, 57, '009B', 104),
(171, 57, '009F', 108),
(172, 57, '008J', 99),
(173, 58, '043C', 533),
(174, 58, '043F', 535),
(175, 58, '043I', 538),
(176, 58, '043J', 539),
(177, 58, '031I', 380),
(178, 59, 'FM16', 907),
(179, 60, 'F08', 825),
(180, 60, 'F08A', 826),
(181, 60, 'F08B', 827),
(182, 60, 'F08C', 828),
(183, 60, 'F08D', 829),
(184, 60, 'F08G', 832),
(185, 60, 'F08M', 835),
(186, 61, 'F09', 836),
(187, 61, 'F09A', 837),
(188, 61, 'F09D', 840),
(189, 61, 'F09E', 841),
(190, 61, 'F09F', 842),
(191, 62, 'MS2A', 956),
(192, 63, 'MS1D', 947),
(193, 63, 'MS1H', 951),
(194, 64, 'MS3E', 971),
(195, 64, 'MS3H', 974),
(196, 65, 'MS5C', 998),
(197, 65, 'MS5N', 1009),
(198, 66, '043C', 533),
(199, 66, '043F', 535),
(200, 66, '043I', 538),
(201, 66, '043J', 539),
(202, 66, '031I', 380),
(203, 67, '009B', 104),
(204, 67, '009F', 108),
(205, 67, '008J', 99),
(206, 68, '008A', 90),
(207, 68, '008B', 91),
(208, 68, '008D', 93),
(209, 68, '008F', 95),
(210, 68, '008G', 96),
(211, 68, '008I', 98),
(212, 69, '040A', 493),
(213, 69, '040C', 495),
(214, 69, '040E', 497),
(215, 69, '040F', 498),
(216, 69, '041', 504),
(217, 70, '041A', 505),
(218, 70, '041B', 506),
(219, 70, '041C', 507),
(220, 70, '041D', 508),
(221, 70, '041F', 510),
(222, 70, '041G', 511),
(223, 71, '037', 452),
(224, 71, '037A', 453),
(225, 71, '037C', 455),
(226, 71, '037D', 456),
(227, 71, '037E', 457),
(228, 71, '044', 543),
(229, 71, '044A', 544),
(230, 72, '010', 114),
(231, 72, '010C', 117),
(232, 72, '010E', 119),
(233, 72, '010F', 120),
(234, 72, '010H', 122),
(235, 72, '010I', 123),
(236, 73, '002A', 15),
(237, 73, '002B', 16),
(238, 73, '002H', 22),
(239, 73, '002I', 23),
(240, 73, '002K', 25),
(241, 74, '021', 252),
(242, 74, '021A', 253),
(243, 74, '021J', 262),
(244, 74, '031', 371),
(245, 74, '031C', 374),
(246, 74, '031F', 377),
(247, 75, 'F07A', 816),
(248, 75, 'F07C', 818),
(249, 76, 'F10B', 848),
(250, 76, 'F10E', 850),
(251, 76, 'F10G', 852),
(252, 76, 'F10K', 856),
(253, 77, 'F09', 836),
(254, 77, 'F09A', 837),
(255, 77, 'F09D', 840),
(256, 77, 'F09E', 841),
(257, 77, 'F09F', 842),
(258, 77, 'F09G', 843),
(259, 78, 'MS3A', 967),
(260, 78, 'MS3D', 970),
(261, 78, 'MS3G', 973),
(262, 79, 'MS3A', 967),
(263, 79, 'MS3G', 973),
(264, 79, 'MS3D', 970),
(265, 80, '016 ', 190),
(266, 80, '016A', 191),
(267, 80, '016B', 192),
(268, 80, '016C', 193),
(269, 80, '016D', 194),
(270, 80, '016F', 196),
(271, 80, '012K', 151),
(272, 81, '005 ', 51),
(273, 81, '005A', 52),
(274, 81, '005G', 58),
(275, 81, '005C', 54),
(276, 81, '005H', 59),
(277, 81, '005K', 62),
(278, 82, '006 ', 63),
(279, 82, '', 0),
(280, 85, '013I', 162),
(281, 85, '015H', 188),
(282, 85, '016G', 197),
(283, 85, '019G', 231),
(284, 85, '006C', 66),
(285, 86, '001 ', 1),
(286, 86, '001C', 4),
(287, 86, '001D', 5),
(288, 86, '001E', 6),
(289, 86, '001G', 8),
(290, 86, '001J', 11),
(291, 87, '027 ', 326),
(292, 87, '027A', 327),
(293, 87, '027B', 328),
(294, 87, '027C', 329),
(295, 87, '027D', 330),
(296, 87, '027E', 331),
(297, 87, '027E', 331),
(298, 87, '027F', 332),
(299, 87, '027G', 333),
(300, 87, '027H', 334),
(301, 87, '027H', 334),
(302, 87, '027I', 335),
(303, 87, '027J', 336),
(304, 87, '027K', 337),
(305, 88, '004 ', 38),
(306, 88, '004C', 41),
(307, 88, '004E', 43),
(308, 88, '004F', 44),
(309, 88, '004G', 45),
(310, 88, '004J', 48),
(311, 89, '003 ', 26),
(312, 89, '003B', 28),
(313, 89, '003C', 29),
(314, 89, '003D', 30),
(315, 89, '003G', 33),
(316, 89, '003H', 34),
(317, 89, '003I', 35),
(318, 89, '018H', 222),
(319, 90, '011A', 128),
(320, 90, '011H', 135),
(321, 90, '011I', 136),
(322, 90, '011J', 137),
(323, 90, '011K', 138),
(324, 91, '012A', 141),
(325, 91, '012B', 142),
(326, 91, '012C', 143),
(327, 91, '012D', 144),
(328, 91, '012E', 145),
(329, 91, '012E', 145),
(330, 91, '012G', 147),
(331, 91, '012H', 148),
(332, 91, '012J', 150),
(333, 91, '017B', 203),
(334, 92, '009', 102),
(335, 92, '009F', 108),
(336, 92, '008 ', 89),
(337, 92, '008H', 97),
(338, 93, '014', 166),
(339, 93, '014C', 169),
(340, 93, '014E', 171),
(341, 93, '014F', 172),
(342, 93, '014G', 173),
(343, 93, '014H', 174),
(344, 93, '014J', 176),
(345, 94, 'F03A', 766),
(346, 94, 'F03E', 768),
(347, 94, 'F03I', 771),
(348, 94, 'F03J', 772),
(349, 94, 'F03J', 772),
(350, 94, 'F03N', 776),
(351, 95, 'F06C', 806),
(352, 95, 'F06K', 811),
(353, 95, 'F06N', 814),
(354, 96, 'F06M', 813),
(355, 97, 'F04G', 784),
(356, 97, 'F04I', 786),
(357, 97, 'F04K', 788),
(358, 98, 'F04B', 779),
(359, 98, 'F04F', 783),
(360, 99, '012A', 141),
(361, 99, '012C', 143),
(362, 99, '012D', 144),
(363, 99, '012E', 145),
(364, 99, '012G', 147),
(365, 99, '012J', 150),
(366, 99, '012L', 152),
(367, 100, 'FM14', 905),
(368, 101, 'FM14', 905),
(369, 102, 'FM14', 905),
(370, 103, 'FM16', 907),
(371, 104, 'FM16', 907),
(373, 105, 'FM14', 905),
(374, 106, 'FM44', 935),
(375, 107, 'MS5D', 999),
(376, 107, 'MS5F', 1001),
(377, 107, 'MS5I', 1004),
(378, 108, 'MS1F', 949),
(379, 109, 'MS3A', 967),
(380, 109, 'MS3D', 970),
(381, 109, 'MS3G', 973),
(382, 109, 'MS3N', 980),
(383, 110, 'FM16', 907),
(384, 111, 'FM44', 935),
(385, 112, 'F02A', 754),
(386, 112, 'F02C', 755),
(387, 112, 'F02D', 756),
(388, 112, 'F02E', 757),
(389, 112, 'F02F', 758),
(390, 112, 'F02H', 760),
(391, 112, 'F02j', 762),
(392, 113, 'MS5F', 1001),
(393, 114, '019 ', 224),
(394, 114, '019F', 230),
(395, 114, '019I', 233),
(396, 114, '020C', 241),
(397, 115, '043C', 533),
(398, 115, '043E', 534),
(399, 115, '043F', 535),
(400, 115, '043G', 536),
(401, 115, '043H', 537),
(402, 115, '043J', 539),
(403, 115, '043K', 540),
(404, 115, '031I', 380);

-- --------------------------------------------------------

--
-- Table structure for table `lp_dc_pri_inf`
--

DROP TABLE IF EXISTS `lp_dc_pri_inf`;
CREATE TABLE IF NOT EXISTS `lp_dc_pri_inf` (
  `dwd_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `dwd_date` date DEFAULT NULL,
  `dwd_slip_nbr` varchar(8) DEFAULT NULL,
  `vm_code` varchar(4) DEFAULT NULL,
  `dwd_cha_no` varchar(4) DEFAULT NULL,
  `dwd_shed` varchar(6) DEFAULT NULL,
  `dwd_shift` varchar(6) DEFAULT NULL,
  `cm_code` varchar(4) DEFAULT NULL,
  `clrm_code` varchar(4) DEFAULT NULL,
  `dwd_labors` int(11) DEFAULT NULL,
  `dwd_lab_amount` double(10,2) DEFAULT NULL,
  `dwd_total_amount` double(10,2) DEFAULT NULL,
  `dwd_matha` double(10,2) DEFAULT NULL,
  `dwd_totalperson` int(2) DEFAULT NULL,
  PRIMARY KEY (`dwd_tabreckey`),
  UNIQUE KEY `sys_co_code` (`sys_co_code`,`dwd_slip_nbr`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=116 ;

--
-- Dumping data for table `lp_dc_pri_inf`
--

INSERT INTO `lp_dc_pri_inf` (`dwd_tabreckey`, `sys_co_code`, `dwd_date`, `dwd_slip_nbr`, `vm_code`, `dwd_cha_no`, `dwd_shed`, `dwd_shift`, `cm_code`, `clrm_code`, `dwd_labors`, `dwd_lab_amount`, `dwd_total_amount`, `dwd_matha`, `dwd_totalperson`) VALUES
(25, '01', '2017-08-26', '18113', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1546.03, 257.67, 6),
(27, '01', '2017-08-26', '18114', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 6298.04, 699.78, 9),
(28, '01', '2017-08-26', '18124', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1269.37, 634.68, 2),
(29, '01', '2017-08-26', '18123', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2799.13, 699.78, 4),
(30, '01', '2017-08-26', '18115', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 4898.47, 816.41, 6),
(31, '01', '2017-08-26', '18120', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3498.91, 699.78, 5),
(32, '01', '2017-08-26', '18116', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3498.91, 699.78, 5),
(33, '01', '2017-08-26', '18131', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2205.13, 315.02, 7),
(34, '01', '2017-08-03', '14972', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 292.93, 58.59, 5),
(35, '01', '2017-08-03', '14973', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 351.52, 58.59, 6),
(36, '01', '2017-08-03', '14975', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 410.10, 58.59, 7),
(37, '01', '2017-08-03', '14976', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 410.10, 58.59, 7),
(38, '01', '2017-08-03', '14977', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 393.72, 65.62, 6),
(39, '01', '2017-08-03', '14978', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 410.10, 68.35, 6),
(40, '01', '2017-08-03', '14980', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 58.59, 58.59, 1),
(41, '01', '2017-08-03', '14981', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 351.52, 58.59, 6),
(42, '01', '2017-08-03', '14982', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 58.59, 58.59, 1),
(43, '01', '2017-08-03', '14983', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 292.93, 58.59, 5),
(44, '01', '2017-08-03', '14984', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 746.98, 106.71, 7),
(45, '01', '2017-08-03', '14986', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 838.11, 139.69, 6),
(46, '01', '2017-08-03', '14922', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1432.11, 358.03, 4),
(48, '01', '2017-08-03', '14923', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 32.55, 32.55, 1),
(49, '01', '2017-08-03', '14924', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1790.14, 358.03, 5),
(50, '01', '2017-08-03', '14925', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 274.75, 274.75, 1),
(51, '01', '2017-08-03', '14926', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 274.75, 274.75, 1),
(52, '01', '2017-08-03', '14927', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 150.50, 50.17, 3),
(53, '01', '2017-08-07', '18694', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1423.97, 178.00, 8),
(54, '01', '2017-08-05', '14994', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2227.91, 445.58, 5),
(55, '01', '2017-08-05', '14995', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1012.24, 202.45, 5),
(56, '01', '2017-08-05', '14996', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1419.09, 202.73, 7),
(57, '01', '2017-08-05', '14997', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 810.45, 202.61, 4),
(58, '01', '2017-08-05', '14998', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1012.24, 202.45, 5),
(59, '01', '2017-08-05', '14938', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1034.44, 1034.44, 1),
(60, '01', '2017-08-05', '18645', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1754.34, 250.62, 7),
(61, '01', '2017-08-05', '18646', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1174.98, 235.00, 5),
(62, '01', '2017-08-05', '18647', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 241.50, 241.50, 1),
(63, '01', '2017-08-05', '18648', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 129.50, 64.75, 2),
(64, '01', '2017-08-05', '18649', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 129.50, 64.75, 2),
(65, '01', '2017-08-05', '18650', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 129.50, 64.75, 2),
(66, '01', '2017-08-05', '14928', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 388.95, 77.79, 5),
(67, '01', '2017-08-05', '14930', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 777.90, 259.30, 3),
(68, '01', '2017-08-04', '14931', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 296.19, 49.37, 6),
(69, '01', '2017-08-04', '14932', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 388.95, 77.79, 5),
(70, '01', '2017-08-04', '14933', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 467.06, 77.84, 6),
(71, '01', '2017-08-04', '14935', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 545.18, 77.88, 7),
(72, '01', '2017-08-04', '14936', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 467.06, 77.84, 6),
(73, '01', '2017-08-02', '14902', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1380.04, 276.01, 5),
(74, '01', '2017-08-04', '14937', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 317.34, 52.89, 6),
(75, '01', '2017-08-04', '14987', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 813.70, 406.85, 2),
(76, '01', '2017-08-04', '14989', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1627.40, 406.85, 4),
(77, '01', '2017-08-04', '14992', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2292.15, 382.03, 6),
(78, '01', '2017-08-04', '18695', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 525.00, 175.00, 3),
(79, '01', '2017-08-04', '18696', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 525.00, 175.00, 3),
(80, '01', '2017-08-04', '18801', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 263.64, 37.66, 7),
(81, '01', '2017-08-02', '14905', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1656.69, 276.12, 6),
(82, '01', '2017-08-02', '14906', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 275.03, 275.03, 1),
(85, '01', '2017-08-04', '18804', 'DE', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1602.99, 320.60, 5),
(86, '01', '2017-08-02', '14907', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1931.72, 321.95, 6),
(87, '01', '2017-08-02', '14908', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 3313.39, 236.67, 14),
(88, '01', '2017-08-02', '14909', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1656.69, 276.12, 6),
(89, '01', '2017-08-02', '14968', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 4416.76, 552.10, 8),
(90, '01', '2017-08-02', '14969', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 2249.06, 449.81, 5),
(91, '01', '2017-08-02', '14970', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1687.61, 168.76, 10),
(92, '01', '2017-08-02', '14971', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 235.97, 58.99, 4),
(93, '01', '2017-08-28', '18805', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2244.18, 320.60, 7),
(94, '01', '2017-08-02', '14914', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1669.71, 278.29, 6),
(95, '01', '2017-08-02', '14904', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 906.46, 302.15, 3),
(96, '01', '2017-08-02', '14915', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 203.43, 203.43, 1),
(97, '01', '2017-08-02', '14916', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 906.46, 302.15, 3),
(98, '01', '2017-08-02', '14917', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 406.85, 203.43, 2),
(99, '01', '2017-08-25', '18806', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2244.18, 320.60, 7),
(100, '01', '2017-08-25', '18101', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 750.00, 750.00, 1),
(101, '01', '2017-08-25', '18102', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1275.00, 1275.00, 1),
(102, '01', '2017-08-25', '18103', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3150.00, 3150.00, 1),
(103, '01', '2017-08-02', '14918', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1196.25, 1196.25, 1),
(104, '01', '2017-08-02', '14919', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 750.00, 750.00, 1),
(105, '01', '2017-08-25', '18104', 'AK', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3150.00, 3150.00, 1),
(106, '01', '2017-08-25', '18105', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 1080.00, 1080.00, 1),
(107, '01', '2017-08-02', '14911', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 840.00, 280.00, 3),
(108, '01', '2017-08-02', '14912', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 280.00, 280.00, 1),
(109, '01', '2017-08-03', '14913', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 280.00, 70.00, 4),
(110, '01', '2017-08-02', '14920', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 400.00, 400.00, 1),
(111, '01', '2017-08-02', '14921', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 400.00, 400.00, 1),
(112, '01', '2017-08-25', '18106', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 1383.29, 197.61, 7),
(113, '01', '2017-08-25', '18108', 'DE', NULL, 'SHED1', 'SHIFT1', 'M', '    ', NULL, NULL, 297.50, 297.50, 1),
(114, '01', '2017-08-27', '18807', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 2174.21, 543.55, 4),
(115, '01', '2017-08-27', '18808', 'AK ', NULL, 'SHED1', 'SHIFT1', 'YP', '    ', NULL, NULL, 3266.19, 408.27, 8);

-- --------------------------------------------------------

--
-- Table structure for table `lp_dc_wdtl`
--

DROP TABLE IF EXISTS `lp_dc_wdtl`;
CREATE TABLE IF NOT EXISTS `lp_dc_wdtl` (
  `dc_wdtl_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `dwd_tabreckey` bigint(20) DEFAULT NULL,
  `wtm_code` varchar(4) DEFAULT NULL,
  `dwd_bags` int(11) DEFAULT NULL,
  `wtm_amount` double(10,2) DEFAULT NULL,
  PRIMARY KEY (`dc_wdtl_tabreckey`),
  KEY `dwd_tabreckey` (`dwd_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=94 ;

--
-- Dumping data for table `lp_dc_wdtl`
--

INSERT INTO `lp_dc_wdtl` (`dc_wdtl_tabreckey`, `dwd_tabreckey`, `wtm_code`, `dwd_bags`, `wtm_amount`) VALUES
(5, 28, 'B', 430, 699.78),
(6, 27, 'LD', 3870, 6298.04),
(7, 25, 'LD', 950, 1546.03),
(8, 29, 'B', 1720, 2799.13),
(9, 30, 'B', 3010, 4898.47),
(10, 31, 'B', 2150, 3498.91),
(11, 32, 'B', 2150, 3498.91),
(12, 33, 'LD', 1355, 2205.13),
(13, 34, 'LD', 180, 292.93),
(14, 35, 'LD', 216, 351.52),
(15, 36, 'LD', 252, 410.10),
(16, 37, 'LD', 252, 410.10),
(17, 38, 'LD', 216, 393.72),
(18, 39, 'LD', 252, 410.10),
(19, 40, 'LD', 36, 58.59),
(20, 41, 'LD', 216, 351.52),
(21, 42, 'LD', 36, 58.59),
(22, 43, 'LD', 180, 292.93),
(23, 44, 'LD', 459, 746.98),
(24, 45, 'LD', 343, 558.20),
(25, 46, 'LD', 880, 1432.11),
(26, 48, 'LD', 20, 32.55),
(27, 49, 'LD', 1100, 1790.14),
(28, 50, 'MS', 785, 274.75),
(29, 51, 'MS', 785, 274.75),
(30, 52, 'MS', 430, 150.50),
(31, 53, 'LD', 875, 1423.97),
(32, 54, 'LD', 622, 1012.24),
(33, 55, 'LD', 622, 1012.24),
(34, 56, 'LD', 872, 1419.09),
(35, 57, 'LD', 498, 810.45),
(36, 58, 'LD', 622, 1012.24),
(37, 59, 'ST', 695, 1034.44),
(38, 60, 'FL', 1078, 1754.34),
(39, 61, 'FL', 722, 1174.98),
(40, 62, 'MS', 690, 241.50),
(41, 63, 'MS', 370, 129.50),
(42, 64, 'MS', 370, 129.50),
(43, 65, 'MS', 370, 129.50),
(44, 66, 'LD', 239, 388.95),
(45, 67, 'LD', 143, 232.72),
(46, 68, 'LD', 182, 296.19),
(47, 69, 'LD', 239, 388.95),
(48, 70, 'LD', 287, 467.06),
(49, 71, 'LD', 335, 545.18),
(50, 72, 'LD', 287, 467.06),
(51, 73, 'LD', 848, 1380.04),
(52, 74, 'LD', 195, 317.34),
(53, 75, 'FL', 500, 813.70),
(54, 76, 'FL', 1000, 1627.40),
(55, 77, 'FL', 1500, 2292.15),
(56, 78, 'MS', 1500, 525.00),
(57, 79, 'MS', 1500, 525.00),
(58, 80, 'LD', 162, 263.64),
(59, 81, 'LD', 1018, 1656.69),
(60, 82, 'LD', 169, 275.03),
(61, 85, 'LD', 985, 1602.99),
(62, 86, 'LD', 1187, 1931.72),
(63, 87, 'LD', 2036, 3313.39),
(64, 88, 'LD', 1018, 1656.69),
(65, 89, 'LD', 1357, 2208.38),
(66, 90, 'LD', 691, 1124.53),
(67, 91, 'LD', 1037, 1687.61),
(68, 92, 'LD', 145, 235.97),
(69, 93, 'LD', 1379, 2244.18),
(70, 94, 'FL', 1026, 1669.71),
(71, 95, 'FL', 557, 906.46),
(72, 96, 'FL', 125, 203.43),
(73, 97, 'FL', 557, 906.46),
(74, 98, 'FL', 250, 406.85),
(75, 99, 'LD', 1379, 2244.18),
(76, 100, 'FM', 500, 750.00),
(77, 101, 'FM', 850, 1275.00),
(78, 102, 'FM', 2100, 3150.00),
(79, 103, 'FM', 500, 750.00),
(80, 103, 'SM', 255, 446.25),
(81, 104, 'FM', 500, 750.00),
(83, 105, 'MM', 2100, 3150.00),
(84, 106, 'MM', 1350, 1080.00),
(85, 107, 'MS', 2400, 840.00),
(86, 108, 'MS', 800, 280.00),
(87, 109, 'MS', 800, 280.00),
(88, 110, 'MM', 500, 400.00),
(89, 111, 'MM', 500, 400.00),
(90, 112, 'FL', 850, 1383.29),
(91, 113, 'MS', 850, 297.50),
(92, 114, 'LD', 1336, 2174.21),
(93, 115, 'LD', 2007, 3266.19);

-- --------------------------------------------------------

--
-- Table structure for table `lp_gang_m`
--

DROP TABLE IF EXISTS `lp_gang_m`;
CREATE TABLE IF NOT EXISTS `lp_gang_m` (
  `gm_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `gm_gang_code` varchar(4) DEFAULT NULL,
  `gm_name` varchar(100) DEFAULT NULL,
  `gm_badge_no` varchar(4) DEFAULT NULL,
  `gm_memcatg` varchar(20) DEFAULT NULL,
  `gm_bankaccnbr` varchar(15) DEFAULT NULL,
  `adv_amount` double(10,2) NOT NULL,
  `adv_os` decimal(10,2) NOT NULL,
  `gm_name_marathi` varchar(60) NOT NULL,
  `gm_email` varchar(100) DEFAULT NULL,
  `gm_mphonenbr` varchar(12) DEFAULT NULL,
  `gm_pf_no` varchar(8) NOT NULL,
  `gm_esic_no` varchar(12) NOT NULL,
  PRIMARY KEY (`gm_tabreckey`),
  UNIQUE KEY `gm_badge_no` (`gm_badge_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=801 ;

--
-- Dumping data for table `lp_gang_m`
--

INSERT INTO `lp_gang_m` (`gm_tabreckey`, `gm_gang_code`, `gm_name`, `gm_badge_no`, `gm_memcatg`, `gm_bankaccnbr`, `adv_amount`, `adv_os`, `gm_name_marathi`, `gm_email`, `gm_mphonenbr`, `gm_pf_no`, `gm_esic_no`) VALUES
(1, '001', 'SHIVAJI  HAJARE', '1', 'PERMANENT', '010000010018192', 0.00, '0.00', '', '', '', '', ''),
(2, '001A', 'MARUTI NAMDEO POOJARI', '2', 'PERMANENT', '010000010017746', 0.00, '0.00', '', '', '', '', ''),
(3, '001B', 'ARVIND KOLEKAR', '3', 'PERMANENT', '010000010017650', 0.00, '0.00', '', '', '', '', ''),
(4, '001C', 'BALU MADANE', '4', 'PERMANENT', '010000010017597', 0.00, '0.00', '', '', '', '', ''),
(5, '001D', 'SANJAY MOTE', '5', 'PERMANENT', '010000010017567', 0.00, '0.00', '', '', '', '', ''),
(6, '001E', 'BIRJAPPA D. MANE', '6', 'PERMANENT', '010000010019043', 0.00, '0.00', '', '', '', '', ''),
(7, '001F', 'SOPAN VITHOBA HULGULE', '7', 'PERMANENT', '010000010018358', 0.00, '0.00', '', '', '', '', ''),
(8, '001G', 'BIRAPPA K. MANE', '8', 'PERMANENT', '010000010018257', 0.00, '0.00', '', '', '', '', ''),
(9, '001H', 'ASHOK PATIL', '9', 'PERMANENT', '010000010017764', 0.00, '0.00', '', '', '', '', ''),
(10, '001I', 'ANIL MARUTI SARGAR', '10', 'PERMANENT', '010000010018792', 0.00, '0.00', '', '', '', '', ''),
(11, '001J', 'RAMA TURAI', '11', 'PERMANENT', '010000010018688', 0.00, '0.00', '', '', '', '', ''),
(12, '001K', 'KHANDU DNYANU KOLEKAR', '12', 'DA', '010000010018647', 0.00, '0.00', '', '', '', '', ''),
(13, '001L', 'KHANDU KOLEKAR', '13', 'PERMANENT', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(14, '002', 'TANAJI NANA KOLEKAR', '14', 'PERMANENT', '010000010018388', 0.00, '0.00', '', '', '', '', ''),
(15, '002A', 'TUKARAM GHAGRE', '15', 'PERMANENT', '010000010017724', 0.00, '0.00', '', '', '', '', ''),
(16, '002B', 'APPASO RAMU MANE', '16', 'PERMANENT', '010000010017565', 0.00, '0.00', '', '', '', '', ''),
(17, '002C', 'BAPU SARGAR', '17', 'PERMANENT', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(18, '002D', 'VILAS SHRIPATI CHAVAN', '18', 'PERMANENT', '010000010017564', 0.00, '0.00', '', '', '', '', ''),
(19, '002E', 'APA NAMDEV KOLEKAR', '19', 'PERMANENT', '010000010018354', 0.00, '0.00', '', '', '', '', ''),
(20, '002F', 'DADA GAVANDA', '20', 'PERMANENT', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(21, '002G', 'DADA KOLEKAR', '21', 'PERMANENT', '010000010018053', 0.00, '0.00', '', '', '', '', ''),
(22, '002H', 'BHIMRAO NAMDEO MALI', '22', 'PERMANENT', '010000010018276', 0.00, '0.00', '', '', '', '', ''),
(23, '002I', 'HANMANT KARANDE', '23', 'PERMANENT', '010000010018353', 0.00, '0.00', '', '', '', '', ''),
(24, '002J', 'DHANAJI RAMCHANDRA GORE', '24', 'DA', '010000010018743', 0.00, '0.00', '', '', '', '', ''),
(25, '002K', 'GANPATI SHUBRAV GORE', '25', 'DA', '010000010018512', 0.00, '0.00', '', '', '', '', ''),
(26, '003', 'SHIVAJI GADADE', '26', 'PERMANENT', '010000010018346', 0.00, '0.00', '', '', '', '', ''),
(27, '003A', 'YASHWANT DADA BANDGAR', '27', 'PERMANENT', '010000010018462', 0.00, '0.00', '', '', '', '', ''),
(28, '003B', 'RANGA GUNDA GADADE', '28', 'PERMANENT', '010000010017951', 0.00, '0.00', '', '', '', '', ''),
(29, '003C', 'DILIP GUNDA GADADE', '29', 'PERMANENT', '010000010017957', 0.00, '0.00', '', '', '', '', ''),
(30, '003D', 'MADHUKAR GIRJAPPA GADADE', '30', 'PERMANENT', '010000010017737', 0.00, '0.00', '', '', '', '', ''),
(31, '003E', 'SOMA TATOBA SARGAR', '31', 'PERMANENT', '010000010018556', 0.00, '0.00', '', '', '', '', ''),
(32, '003F', 'VILAS DONGARE BANDAGAR', '32', 'PERMANENT', '010000010017774', 0.00, '0.00', '', '', '', '', ''),
(33, '003G', 'RAMA SHANKAR GHODE', '33', 'PERMANENT', '010000010018003', 0.00, '0.00', '', '', '', '', ''),
(34, '003H', 'BALU SARGAR', '34', 'PERMANENT', '010000010018624', 0.00, '0.00', '', '', '', '', ''),
(35, '003I', 'MANOHAR CHAUGULE', '35', 'PERMANENT', '010000010017676', 100000.00, '0.00', '', '', '', '', ''),
(36, '003J', 'RAJARAM GAVDE', '36', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(37, '003K', 'DEVRAM SARGAR', '37', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(38, '004', 'SANJAY SHANKAR SHIRGIRE', '38', 'PERMANENT', '010000010018396', 0.00, '0.00', '', '', '', '', ''),
(39, '004A', 'RAKHAMAJI PANDHARE', '39', 'PERMANENT', '010000010017760', 0.00, '0.00', '', '', '', '', ''),
(40, '004B', 'RAOSAHEB DADASAHEB KOLEKAR', '40', 'PERMANENT', '010000010017672', 0.00, '0.00', '', '', '', '', ''),
(41, '004C', 'PANDURANG TATOBA SHINDE', '41', 'PERMANENT', '010000010018149', 0.00, '0.00', '', '', '', '', ''),
(42, '004D', 'WAMAN SOPAN KOLEKAR', '42', 'PERMANENT', '010000010018013', 0.00, '0.00', '', '', '', '', ''),
(43, '004E', 'SUKHADEO SOPAN KOLEKAR', '43', 'PERMANENT', '010000010100111', 0.00, '0.00', '', '', '', '', ''),
(44, '004F', 'ASHOK SOPAN VAGARE', '44', 'PERMANENT', '010000010018684', 0.00, '0.00', '', '', '', '', ''),
(45, '004G', 'MADHUKAR KISAN DUDHAL', '45', 'PERMANENT', '010000010018399', 0.00, '0.00', '', '', '', '', ''),
(46, '004H', 'RAVASO RAMU MANE', '46', 'PERMANENT', '010000010018736', 0.00, '0.00', '', '', '', '', ''),
(47, '004I', 'PANDURANG TUKARAM SHENDAGE', '47', 'PERMANENT', '010000010018649', 0.00, '0.00', '', '', '', '', ''),
(48, '004J', 'PANDURANG KOLEKAR', '48', 'DA', '010000010018781', 0.00, '0.00', '', '', '', '', ''),
(49, '004K', 'MAYAPPA GARANDE', '49', 'DA', '010000010018846', 0.00, '0.00', '', '', '', '', ''),
(50, '004L', 'SHANKAR SHIRGIRE', '50', 'DA', '010000010018804', 0.00, '0.00', '', '', '', '', ''),
(51, '005', 'BALASAHEB DADU PANDHARE', '51', 'PERMANENT', '010000010017749', 0.00, '0.00', '', '', '', '', ''),
(52, '005A', 'BHIVA ANUSE', '52', 'PERMANENT', '010000010017668', 0.00, '0.00', '', '', '', '', ''),
(53, '005B', 'POPAT MOTE', '53', 'PERMANENT', '010000010017670', 0.00, '0.00', '', '', '', '', ''),
(54, '005C', 'HARIDAS YAMGAR', '54', 'PERMANENT', '010000010017736', 0.00, '0.00', '', '', '', '', ''),
(55, '005D', 'VIJAY SARGAR', '55', 'PERMANENT', '010000010018728', 0.00, '0.00', '', '', '', '', ''),
(56, '005E', 'SHIVAJI GHODE', '56', 'PERMANENT', '010000010019235', 0.00, '0.00', '', '', '', '', ''),
(57, '005F', 'MAHADEV KOLEKAR', '57', 'PERMANENT', '010000010017639', 0.00, '0.00', '', '', '', '', ''),
(58, '005G', 'JANARDHAN GHERDE', '58', 'PERMANENT', '010000010017959', 0.00, '0.00', '', '', '', '', ''),
(59, '005H', 'SHANKAR GHERDE', '59', 'PERMANENT', '010000010018268', 0.00, '0.00', '', '', '', '', ''),
(60, '005I', 'SAMPATRAO TONE', '60', 'PERMANENT', '010000010017600', 0.00, '0.00', '', '', '', '', ''),
(61, '005J', 'SUKHDEV GORE', '61', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(62, '005K', 'ANANDA MARUTI GORE', '62', 'DA', '010000010018695', 0.00, '0.00', '', '', '', '', ''),
(63, '006', 'GORAKHNATH GAIKWAD', '63', 'PERMANENT', '010000010017684', 0.00, '0.00', '', '', '', '', ''),
(64, '006A', 'RAMCHANDRA BALU PAWAR', '64', 'PERMANENT', '010000010017606', 0.00, '0.00', '', '', '', '', ''),
(65, '006B', 'SHIVAJI JADHAV', '65', 'PERMANENT', '010000010017604', 0.00, '0.00', '', '', '', '', ''),
(66, '006C', 'SHIVAJI SHEJUAL', '66', 'PERMANENT', '010000010018247', 0.00, '0.00', '', '', '', '', ''),
(67, '006D', 'BHAGWAN SARGAR', '67', 'PERMANENT', '010000010017751', 0.00, '0.00', '', '', '', '', ''),
(68, '006E', 'ARVIND JADHAV', '68', 'PERMANENT', '010000010017748', 0.00, '0.00', '', '', '', '', ''),
(69, '006F', 'BHAGAPPA GHERADE', '69', 'PERMANENT', '010000010017605', 0.00, '0.00', '', '', '', '', ''),
(70, '006G', 'DAGADU SABALE', '70', 'PERMANENT', '010000010018296', 0.00, '0.00', '', '', '', '', ''),
(71, '006H', 'SANJAY MOKAKSHI', '71', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(72, '006I', 'SITARAM KHANDEKAR', '72', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(73, '006J', 'BIRA SHINDE', '73', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(74, '006K', 'DHANAJI RAJARAM GADADE', '74', 'DA', '010000010018771', 0.00, '0.00', '', '', '', '', ''),
(75, '006L', 'ANKUSHA BIRU LOKHANDE', '75', 'DA', '010000010018770', 0.00, '0.00', '', '', '', '', ''),
(76, '006M', 'SURESH GADADE', '76', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(77, '007', 'BAPU DIGHE', '77', 'PERMANENT', '010000010018295', 0.00, '0.00', '', '', '', '', ''),
(78, '007A', 'TUKARAM JAYVANT SOLANKAR', '78', 'PERMANENT', '010000010018252', 0.00, '0.00', '', '', '', '', ''),
(79, '007B', 'TANAJI HAJARE', '79', 'PERMANENT', '010000010017662', 0.00, '0.00', '', '', '', '', ''),
(80, '007C', 'NARAYAN NILE', '80', 'PERMANENT', '010000010018271', 0.00, '0.00', '', '', '', '', ''),
(81, '007D', 'BALU KOLEKAR', '81', 'PERMANENT', '010000010018444', 0.00, '0.00', '', '', '', '', ''),
(82, '007E', 'BALASAHEB KASHID NARAYAN', '82', 'PERMANENT', '010000010017669', 0.00, '0.00', '', '', '', '', ''),
(83, '007F', 'BHAGAWAT LAVATE', '83', 'PERMANENT', '010000010017575', 0.00, '0.00', '', '', '', '', ''),
(84, '007G', 'PANDURANG SUBRAO GORE', '84', 'PERMANENT', '010000010018441', 0.00, '0.00', '', '', '', '', ''),
(85, '007H', 'HINDURAV SHINDE', '85', 'PERMANENT', '010000010018406', 0.00, '0.00', '', '', '', '', ''),
(86, '007I', 'RAJENDRA WAGARE', '86', 'PERMANENT', '010000010100197', 0.00, '0.00', '', '', '', '', ''),
(87, '007J', 'NAMDEO WAGHMODE', '87', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(88, '007K', 'BALBHIM SHRIRANG SHINDE', '88', 'DA', '010000010018769', 0.00, '0.00', '', '', '', '', ''),
(89, '008', 'KISAN B KOLEKAR', '89', 'PERMANENT', '010000010017569', 0.00, '0.00', '', '', '', '', ''),
(90, '008A', 'BHANUDAS SHEMBADE', '90', 'PERMANENT', '010000010018639', 0.00, '0.00', '', '', '', '', ''),
(91, '008B', 'VILAS KOLEKAR', '91', 'PERMANENT', '010000010018249', 0.00, '0.00', '', '', '', '', ''),
(92, '008C', 'TANAJI BANDGAR', '92', 'PERMANENT', '010000010017664', 0.00, '0.00', '', '', '', '', ''),
(93, '008D', 'ASHOK BANDU CHORAGE', '93', 'PERMANENT', '010000010017663', 0.00, '0.00', '', '', '', '', ''),
(94, '008E', 'SHIVAJI SHEMBADE', '94', 'PERMANENT', '010000010018263', 0.00, '0.00', '', '', '', '', ''),
(95, '008F', 'ADHIK PATIL', '95', 'PERMANENT', '010000010018262', 0.00, '0.00', '', '', '', '', ''),
(96, '008G', 'DILIP SOLANKAR', '96', 'PERMANENT', '010000010017568', 0.00, '0.00', '', '', '', '', ''),
(97, '008H', 'SHIVAJI BODHAGIRE', '97', 'PERMANENT', '010000010018267', 0.00, '0.00', '', '', '', '', ''),
(98, '008I', 'RAJARAM SHINDE', '98', 'PERMANENT', '010000010017621', 0.00, '0.00', '', '', '', '', ''),
(99, '008J', 'BABASO SHAMRAO SARGAR', '99', 'DA', '010000010018614', 0.00, '0.00', '', '', '', '', ''),
(100, '008K', 'SHIVAJI ALDAR', '100', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(101, '008L', 'LAXIMAN BANDGAR', '101', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(102, '009', 'MACHINDRA PATIL', '102', 'PERMANENT', '010000010019061', 0.00, '0.00', '', '', '', '', ''),
(103, '009A', 'SHRIRANG PADALKAR', '103', 'PERMANENT', '010000010018670', 0.00, '0.00', '', '', '', '', ''),
(104, '009B', 'NANASAHEB GHERADE', '104', 'PERMANENT', '010000010017820', 0.00, '0.00', '', '', '', '', ''),
(105, '009C', 'ARJUN KARANDE', '105', 'PERMANENT', '010000010018711', 0.00, '0.00', '', '', '', '', ''),
(106, '009D', 'ANANDA BABA MANE', '106', 'PERMANENT', '010000010018387', 0.00, '0.00', '', '', '', '', ''),
(107, '009E', 'RAMCHANDRA SHINDE', '107', 'PERMANENT', '010000010018283', 0.00, '0.00', '', '', '', '', ''),
(108, '009F', 'TAMANNA KUMBHAR', '108', 'PERMANENT', '010000010018638', 0.00, '0.00', '', '', '', '', ''),
(109, '009G', 'YASHWANT SHINDE', '109', 'PERMANENT', '010000010017584', 0.00, '0.00', '', '', '', '', ''),
(110, '009H', 'ANANDA SHIRGIRE', '110', 'PERMANENT', '010000010017646', 0.00, '0.00', '', '', '', '', ''),
(111, '009I', 'DNYANDEO KHANDEKAR', '111', 'PERMANENT', '010000010018253', 0.00, '0.00', '', '', '', '', ''),
(112, '009J', 'MOHAN MHARNUR', '112', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(113, '009K', 'SAMADHAN MHARNUR', '113', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(114, '010', 'BIRA GAWADE', '114', 'PERMANENT', '010000010017626', 0.00, '0.00', '', '', '', '', ''),
(115, '010A', 'VASANT NIVRUTTI PATIL', '115', 'PERMANENT', '010000010018032', 0.00, '0.00', '', '', '', '', ''),
(116, '010B', 'DADASAHEB KHANDEKAR', '116', 'PERMANENT', '010000010017607', 0.00, '0.00', '', '', '', '', ''),
(117, '010C', 'BALASAHEB KOLEKAR', '117', 'PERMANENT', '010000010018260', 0.00, '0.00', '', '', '', '', ''),
(118, '010D', 'AVINASH MANE', '118', 'PERMANENT', '010000010018662', 0.00, '0.00', '', '', '', '', ''),
(119, '010E', 'VILAS SHRIPATI CHAVAN', '119', 'PERMANENT', '010000010017564', 0.00, '0.00', '', '', '', '', ''),
(120, '010F', 'VISHWAS SHIVAJI OLEKAR', '120', 'PERMANENT', '010000010017585', 0.00, '0.00', '', '', '', '', ''),
(121, '010G', 'RAMA BAYAGI WAGRE', '121', 'PERMANENT', '010000010018152', 0.00, '0.00', '', '', '', '', ''),
(122, '010H', 'SUBHASH PANDHARE', '122', 'PERMANENT', '010000010018687', 0.00, '0.00', '', '', '', '', ''),
(123, '010I', 'HAYAPPA KOLEKAR', '123', 'PERMANENT', '010000010018226', 0.00, '0.00', '', '', '', '', ''),
(124, '010J', 'DHONDIRAM UTTARE', '124', 'PERMANENT', '010000010017688', 0.00, '0.00', '', '', '', '', ''),
(125, '010K', 'RAHUL SHINDE', '125', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(126, '010L', 'GANPATI NAMDEV SUDAKE', '126', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(127, '011', 'TUKARAM RAMCHANDRA PATIL', '127', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(128, '011A', 'VITTHAL JAYWANT AAWATE', '128', 'PERMANENT', '010000010017594', 0.00, '0.00', '', '', '', '', ''),
(129, '011B', 'SUKHADEV KUNDALIK GORE', '129', 'PERMANENT', '010000010018698', 0.00, '0.00', '', '', '', '', ''),
(130, '011C', 'BAJIRAV BHIMRAO DESAI', '130', 'PERMANENT', '010000010018660', 0.00, '0.00', '', '', '', '', ''),
(131, '011D', 'SHIVAJI GHADGE', '131', 'PERMANENT', '010000010017634', 0.00, '0.00', '', '', '', '', ''),
(132, '011E', 'TANAJI BALU LOKHANDE', '132', 'PERMANENT', '010000010018136', 0.00, '0.00', '', '', '', '', ''),
(133, '011F', 'PRAKASH  KHATAL', '133', 'PERMANENT', '010000010018692', 0.00, '0.00', '', '', '', '', ''),
(134, '011G', 'UTTAM BALU KAMBLE', '134', 'PERMANENT', '010000010019248', 0.00, '0.00', '', '', '', '', ''),
(135, '011H', 'VANSANT DHONDIBA MOTE', '135', 'PERMANENT', '010000010017591', 0.00, '0.00', '', '', '', '', ''),
(136, '011I', 'DNYANESHWR KOLEKAR', '136', 'PERMANENT', '010000010018853', 0.00, '0.00', '', '', '', '', ''),
(137, '011J', 'RAJENDRA BANDGAR', '137', 'DA', '010000010019191', 0.00, '0.00', '', '', '', '', ''),
(138, '011K', 'SHRIPATI AKARAM BANDGAR', '138', 'DA', '010000010019192', 0.00, '0.00', '', '', '', '', ''),
(139, '011L', 'SHANKAR DYANU SARGAR', '139', 'DA', '010000010018742', 0.00, '0.00', '', '', '', '', ''),
(140, '012', 'GKNATH BANDAGAR', '140', 'PERMANENT', '010000010017608', 0.00, '0.00', '', '', '', '', ''),
(141, '012A', 'DEVAPPA SAVDE', '141', 'PERMANENT', '010000010017586', 0.00, '0.00', '', '', '', '', ''),
(142, '012B', 'SHIVAJI GHUTUKDE', '142', 'PERMANENT', '010000010017610', 0.00, '0.00', '', '', '', '', ''),
(143, '012C', 'MAHADEV BANDAGAR', '143', 'PERMANENT', '010000010018025', 0.00, '0.00', '', '', '', '', ''),
(144, '012D', 'DHANAPA SHEJUL', '144', 'PERMANENT', '010000010018266', 0.00, '0.00', '', '', '', '', ''),
(145, '012E', 'BALASO BANDGAR', '145', 'PERMANENT', '010000010018265', 0.00, '0.00', '', '', '', '', ''),
(146, '012F', 'BHAUSO ERAKAR', '146', 'PERMANENT', '010000010018248', 0.00, '0.00', '', '', '', '', ''),
(147, '012G', 'VISHNU VAGARE', '147', 'PERMANENT', '010000010018254', 0.00, '0.00', '', '', '', '', ''),
(148, '012H', 'BAPU PUKALE', '148', 'PERMANENT', '010000010018328', 0.00, '0.00', '', '', '', '', ''),
(149, '012I', 'SUBHASH KUMBHAR', '149', 'PERMANENT', '010000010018237', 0.00, '0.00', '', '', '', '', ''),
(150, '012J', 'TANAJI HARIBA KOLEKAR', '150', 'DA', '010000010018552', 0.00, '0.00', '', '', '', '', ''),
(151, '012K', 'BHAUSO TUKARAM SARGAR', '151', 'DA', '010000010018873', 0.00, '0.00', '', '', '', '', ''),
(152, '012L', 'JAGANANATH CHAWGULE', '152', 'PERMANENT', '010000010017612', 0.00, '0.00', '', '', '', '', ''),
(153, '013', 'DATTATRAY SARAGAR', '153', 'PERMANENT', '010000010018947', 0.00, '0.00', '', '', '', '', ''),
(154, '013A', 'CHANDRAKANT BAPU PAWAR', '154', 'PERMANENT', '010000010018669', 0.00, '0.00', '', '', '', '', ''),
(155, '013B', 'TANAJI ANANDA DHAYAGUDE', '155', 'PERMANENT', '010000010017598', 0.00, '0.00', '', '', '', '', ''),
(156, '013C', 'HARIBA YASHWANT BANDGAR', '156', 'PERMANENT', '010000010018851', 0.00, '0.00', '', '', '', '', ''),
(157, '013D', 'TANAJI DAMU BHUSNAR', '157', 'PERMANENT', '010000010100173', 0.00, '0.00', '', '', '', '', ''),
(158, '013E', 'RAVASO JADHAV', '158', 'PERMANENT', '010000010019091', 0.00, '0.00', '', '', '', '', ''),
(159, '013F', 'SHIRPATI TUKARAM BANDGAR', '159', 'PERMANENT', '010000010018694', 0.00, '0.00', '', '', '', '', ''),
(160, '013G', 'APPASO RAMU MANE', '160', 'PERMANENT', '010000010018307', 35200.00, '0.00', '', '', '', '', ''),
(161, '013H', 'SUBARAV YASHWANT BANDGAR', '161', 'PERMANENT', '010000010017635', 0.00, '0.00', '', '', '', '', ''),
(162, '013I', 'ANKUSH TUKARAM SARGAR', '162', 'PERMANENT', '010000010017570', 0.00, '0.00', '', '', '', '', ''),
(163, '013J', 'LAXMAN GALANDE', '163', 'DA', '010000010018812', 0.00, '0.00', '', '', '', '', ''),
(164, '013K', 'ASHOK PAWAR', '164', 'DA', '010000010018845', 0.00, '0.00', '', '', '', '', ''),
(165, '013L', 'DHANAJI MARUTI MASKE', '165', 'DA', '010000010018545', 0.00, '0.00', '', '', '', '', ''),
(166, '014', 'SAMBHAJI DEVKATE', '166', 'PERMANENT', '010000010017753', 0.00, '0.00', '', '', '', '', ''),
(167, '014A', 'SHATRUGHNA DASHRAT GALVE', '167', 'PERMANENT', '010000010018410', 0.00, '0.00', '', '', '', '', ''),
(168, '014B', 'SUKHADEV KARANDE', '168', 'PERMANENT', '010000010017696', 0.00, '0.00', '', '', '', '', ''),
(169, '014C', 'LAXMAN GEND', '169', 'PERMANENT', '010000010017695', 0.00, '0.00', '', '', '', '', ''),
(170, '014D', 'GORAKH HIPPARKAR', '170', 'PERMANENT', '010000010018632', 0.00, '0.00', '', '', '', '', ''),
(171, '014E', 'ARJUN KARANDE', '171', 'PERMANENT', '010000010100120', 0.00, '0.00', '', '', '', '', ''),
(172, '014F', 'SAHADEV KARANDE', '172', 'PERMANENT', '010000010100512', 0.00, '0.00', '', '', '', '', ''),
(173, '014G', 'BABASO DAJI SAVADE', '173', 'PERMANENT', '010000010018242', 0.00, '0.00', '', '', '', '', ''),
(174, '014H', 'LAXMAN GALAVE', '174', 'PERMANENT', '010000010017601', 0.00, '0.00', '', '', '', '', ''),
(175, '014I', 'ASHOK DADU GHUTUGADE', '175', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(176, '014J', 'TUKARAM NATHA NARALE', '176', 'DA', '010000010018768', 0.00, '0.00', '', '', '', '', ''),
(177, '014K', 'SUKHADEO PADALKAR', '177', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(178, '014L', 'PRAMODA VEER', '178', 'DA', '010000010018822', 0.00, '0.00', '', '', '', '', ''),
(179, '014M', 'SANDEEP RAJARAM PAWAR', '179', 'DA', '010000010018858', 0.00, '0.00', '', '', '', '', ''),
(180, '015', 'RAMCHANDRA MANE', '180', 'PERMANENT', '010000010017860', 0.00, '0.00', '', '', '', '', ''),
(181, '015A', 'ASHOK ALANDAR', '181', 'PERMANENT', '010000010017686', 0.00, '0.00', '', '', '', '', ''),
(182, '015B', 'NIVRUTTI IMADE', '182', 'PERMANENT', '010000010018724', 0.00, '0.00', '', '', '', '', ''),
(183, '015C', 'BALASAHEB ATAPADKAR', '183', 'PERMANENT', '010000010018288', 0.00, '0.00', '', '', '', '', ''),
(184, '015D', 'NAMDEV KARANDE', '184', 'PERMANENT', '010000010017576', 0.00, '0.00', '', '', '', '', ''),
(185, '015E', 'BHAGWAN KARANDE', '185', 'PERMANENT', '010000010018194', 0.00, '0.00', '', '', '', '', ''),
(186, '015F', 'ARJUN NAMDEV LAVTE', '186', 'PERMANENT', '010000010017577', 0.00, '0.00', '', '', '', '', ''),
(187, '015G', 'SHIVAJI ALDAR', '187', 'PERMANENT', '010000010019016', 0.00, '0.00', '', '', '', '', ''),
(188, '015H', 'BANDU GODSE', '188', 'PERMANENT', '010000010017571', 0.00, '0.00', '', '', '', '', ''),
(189, '015I', 'RAMCHANDRA THENGALE', '189', 'PERMANENT', '010000010017573', 0.00, '0.00', '', '', '', '', ''),
(190, '016', 'RAOSO SARGAR', '190', 'PERMANENT', '010000010018014', 0.00, '0.00', '', '', '', '', ''),
(191, '016A', 'MANIK CHANDAR MASAL', '191', 'PERMANENT', '010000010018547', 0.00, '0.00', '', '', '', '', ''),
(192, '016B', 'NANA MASAL', '192', 'PERMANENT', '010000010018235', 0.00, '0.00', '', '', '', '', ''),
(193, '016C', 'SAMBHAJI MASAL', '193', 'PERMANENT', '010000010017681', 0.00, '0.00', '', '', '', '', ''),
(194, '016D', 'DAMU SHANKAR SARAGAR', '194', 'PERMANENT', '010000010018067', 0.00, '0.00', '', '', '', '', ''),
(195, '016E', 'BALU GADADE', '195', 'PERMANENT', '010000010017625', 0.00, '0.00', '', '', '', '', ''),
(196, '016F', 'SHAHIR MOHD SHAIKH', '196', 'PERMANENT', '010000010017631', 0.00, '0.00', '', '', '', '', ''),
(197, '016G', 'BIRU SHIVAJI GHODE', '197', 'PERMANENT', '010000010019012', 0.00, '0.00', '', '', '', '', ''),
(198, '016H', 'SHAHAJI SHINDE', '198', 'PERMANENT', '010000010018569', 0.00, '0.00', '', '', '', '', ''),
(199, '016I', 'BABASAHEB VITHOBA GHODE', '199', 'PERMANENT', '010000010017673', 0.00, '0.00', '', '', '', '', ''),
(200, '016J', 'LAXMAN MANE', '200', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(201, '017', 'TAYAPPA YAGAPPA BANDAGE', '201', 'PERMANENT', '010000010018185', 0.00, '0.00', '', '', '', '', ''),
(202, '017A', 'KAILASH KUNDLIK DUDHAL', '202', 'PERMANENT', '010000010100501', 0.00, '0.00', '', '', '', '', ''),
(203, '017B', 'MAHADEV LAXMAN DUDHAL', '203', 'PERMANENT', '010000010018243', 0.00, '0.00', '', '', '', '', ''),
(204, '017C', 'AVINASH TUKARAM MANE', '204', 'PERMANENT', '010000010018662', 0.00, '0.00', '', '', '', '', ''),
(205, '017D', 'VASANT KUNDALIK GORE', '205', 'PERMANENT', '010000010018400', 0.00, '0.00', '', '', '', '', ''),
(206, '017E', 'GUNDA TUKA GORE', '206', 'PERMANENT', '010000010018663', 0.00, '0.00', '', '', '', '', ''),
(207, '017F', 'VASANT NIVRUTTI PATIL', '207', 'PERMANENT', '010000010018032', 300000.00, '0.00', '', '', '', '', ''),
(208, '017G', 'RAMA BAYAJI WAGRE', '208', 'PERMANENT', '010000010018152', 200000.00, '0.00', '', '', '', '', ''),
(209, '017H', 'SUBHASH PANDHARE', '209', 'PERMANENT', '010000010018687', 0.00, '0.00', '', '', '', '', ''),
(210, '017I', 'HAYAPPA KOLEKAR', '210', 'PERMANENT', '010000010018226', 0.00, '0.00', '', '', '', '', ''),
(211, '017J', 'SAMBHAJI LOKHANDE', '211', 'DA', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(212, '017K', 'RAMCHANDR SARGAR', '212', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(213, '017L', 'APPASO DOMBALE', '213', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(214, '018', 'MOHAN BANDGE', '214', 'PERMANENT', '010000010018474', 0.00, '0.00', '', '', '', '', ''),
(215, '018A', 'SHIVAJI PATIL', '215', 'PERMANENT', '010000010017649', 0.00, '0.00', '', '', '', '', ''),
(216, '018B', 'KAKASO BANDAGAR', '216', 'PERMANENT', '010000010018664', 0.00, '0.00', '', '', '', '', ''),
(217, '018C', 'ARJUN PINGALE', '217', 'PERMANENT', '010000010018659', 0.00, '0.00', '', '', '', '', ''),
(218, '018D', 'DURYODHAN IRKAR', '218', 'PERMANENT', '010000010017800', 0.00, '0.00', '', '', '', '', ''),
(219, '018E', 'MOHAN BANDAGE', '219', 'PERMANENT', '010000010018474', 0.00, '0.00', '', '', '', '', ''),
(220, '018F', 'JYOTIRAM DHADAS', '220', 'PERMANENT', '010000010017697', 0.00, '0.00', '', '', '', '', ''),
(221, '018G', 'ARUN GAVADE', '221', 'PERMANENT', '010000010017683', 0.00, '0.00', '', '', '', '', ''),
(222, '018H', 'BALU GAVADE', '222', 'PERMANENT', '010000010017633', 0.00, '0.00', '', '', '', '', ''),
(223, '018I', 'PANDURANG GYANU TAKALE', '223', 'PERMANENT', '010000010017667', 0.00, '0.00', '', '', '', '', ''),
(224, '019', 'VILAS RUPNAR', '224', 'PERMANENT', '010000010018394', 0.00, '0.00', '', '', '', '', ''),
(225, '019A', 'KAILAS TULASHIRAM RUPANUR', '225', 'PERMANENT', '010000010018650', 0.00, '0.00', '', '', '', '', ''),
(226, '019B', 'SHIVAJI BANDGAR', '226', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(227, '019C', 'BHAUSAHEB BANDGAR', '227', 'PERMANENT', '010000010017613', 0.00, '0.00', '', '', '', '', ''),
(228, '019D', 'MADHUKAR KOLPE', '228', 'PERMANENT', '010000010100176', 0.00, '0.00', '', '', '', '', ''),
(229, '019E', 'SHAHAJI BANDGAR', '229', 'PERMANENT', '010000010017623', 0.00, '0.00', '', '', '', '', ''),
(230, '019F', 'BIRA RUPNAR', '230', 'PERMANENT', '010000010017615', 0.00, '0.00', '', '', '', '', ''),
(231, '019G', 'SAMBHAJI KRISHNA BANGAR', '231', 'PERMANENT', '010000010018976', 0.00, '0.00', '', '', '', '', ''),
(232, '019H', 'TATYASO BANDGAR', '232', 'PERMANENT', '010000010018310', 0.00, '0.00', '', '', '', '', ''),
(233, '019I', 'ROHIDAS KHOSE', '233', 'PERMANENT', '010000010018251', 0.00, '0.00', '', '', '', '', ''),
(234, '019J', 'VITHAL MANE', '234', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(235, '019K', 'SHANKAR MANE', '235', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(236, '019L', 'DONGARI AAPA BANDGAR', '236', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(237, '019M', 'DADASO TULSHIRAM BANDGAR', '237', 'DA', '010000010019051', 0.00, '0.00', '', '', '', '', ''),
(238, '020', 'BHARAT WAGRE', '238', 'PERMANENT', '010000010017712', 0.00, '0.00', '', '', '', '', ''),
(239, '020A', 'UTTAM LAVTE', '239', 'PERMANENT', '010000010018234', 0.00, '0.00', '', '', '', '', ''),
(240, '020B', 'APPA ALDAR', '240', 'PERMANENT', '010000010017580', 0.00, '0.00', '', '', '', '', ''),
(241, '020C', 'ISHWAR WAVRE', '241', 'PERMANENT', '010000010017642', 0.00, '0.00', '', '', '', '', ''),
(242, '020D', 'PANDURANG ALDAR', '242', 'PERMANENT', '010000010100272', 0.00, '0.00', '', '', '', '', ''),
(243, '020E', 'SHIVAJI DONBALE', '243', 'PERMANENT', '010000010019034', 5500.00, '0.00', '', '', '', '', ''),
(244, '020F', 'ASHOK SONAPAPA ALADAR', '244', 'PERMANENT', '010000010018796', 0.00, '0.00', '', '', '', '', ''),
(245, '020G', 'MACHHINDRA SARGAR', '245', 'PERMANENT', '010000010100440', 0.00, '0.00', '', '', '', '', ''),
(246, '020H', 'NAMDEV SARGAR', '246', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(247, '020I', 'BHAGWAN SARGAR', '247', 'PERMANENT', '010000010018442', 0.00, '0.00', '', '', '', '', ''),
(248, '020J', 'RAVINDRA PANDURANG LAVATE', '248', 'DA', '010000010018359', 0.00, '0.00', '', '', '', '', ''),
(249, '020K', 'BALADEV GHADGE', '249', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(250, '020L', 'BHARAT PRALHAD ALDAR', '250', 'DA', '010000010018737', 0.00, '0.00', '', '', '', '', ''),
(251, '020M', 'SAGAR SAMBHAJI LAVTE', '251', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(252, '021', 'SHIDHANATH MASAL', '252', 'PERMANENT', '010000010017700', 0.00, '0.00', '', '', '', '', ''),
(253, '021A', 'TANAJI IRKAR', '253', 'PERMANENT', '010000010018800', 0.00, '0.00', '', '', '', '', ''),
(254, '021B', 'SHIVAJI MANE', '254', 'PERMANENT', '010000010018425', 0.00, '0.00', '', '', '', '', ''),
(255, '021C', 'KANIFNATH SONURE', '255', 'PERMANENT', '010000010018294', 0.00, '0.00', '', '', '', '', ''),
(256, '021D', 'VILAS BANDGAR', '256', 'PERMANENT', '010000010017722', 0.00, '0.00', '', '', '', '', ''),
(257, '021E', 'ASIM BABASO SHAIKH', '257', 'PERMANENT', '010000010018725', 0.00, '0.00', '', '', '', '', ''),
(258, '021F', 'ASHOK WALEKAR', '258', 'PERMANENT', '010000010018008', 0.00, '0.00', '', '', '', '', ''),
(259, '021G', 'ASHOK WALEKAR', '259', 'PERMANENT', '010000010018008', 0.00, '0.00', '', '', '', '', ''),
(260, '021H', 'ASIM BABASO SHAIKH', '260', 'PERMANENT', '010000010018725', 0.00, '0.00', '', '', '', '', ''),
(261, '021I', 'SUBHASH KACHARE', '261', 'PERMANENT', '010000010017708', 0.00, '0.00', '', '', '', '', ''),
(262, '021J', 'SHAHJI VILAS LOKHANDE', '262', 'DA', '010000010017734', 0.00, '0.00', '', '', '', '', ''),
(263, '021K', 'DHANAJI MASKE', '263', 'DA', '010000010018545', 0.00, '0.00', '', '', '', '', ''),
(264, '021L', 'UBHAJI IRKAR', '264', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(265, '022', 'DAJI MANE', '265', 'PERMANENT', '010000010017691', 0.00, '0.00', '', '', '', '', ''),
(266, '022A', 'SUBHASH TENGLE', '266', 'PERMANENT', '010000010017618', 0.00, '0.00', '', '', '', '', ''),
(267, '022B', 'SHANKAR DUDHAL', '267', 'PERMANENT', '010000010017617', 0.00, '0.00', '', '', '', '', ''),
(268, '022C', 'SUBHASH SHEJUL', '268', 'PERMANENT', '010000010017636', 0.00, '0.00', '', '', '', '', ''),
(269, '022D', 'HANMANT IRKAR', '269', 'PERMANENT', '010000010018419', 0.00, '0.00', '', '', '', '', ''),
(270, '022E', 'SAMBHAJI TENGALE', '270', 'PERMANENT', '010000010017616', 50000.00, '0.00', '', '', '', '', ''),
(271, '022F', 'SHIVAJI PAREKAR', '271', 'PERMANENT', '010000010018112', 0.00, '0.00', '', '', '', '', ''),
(272, '022G', 'POPAT LAVTE', '272', 'PERMANENT', '010000010017627', 0.00, '0.00', '', '', '', '', ''),
(273, '022H', 'NATHA VHANAPA TENGLE', '273', 'PERMANENT', '010000010018584', 0.00, '0.00', '', '', '', '', ''),
(274, '022I', 'BHARAT GHODE', '274', 'PERMANENT', '010000010017589', 0.00, '0.00', '', '', '', '', ''),
(275, '022J', 'TUKARAM JAGANNATH AMUNE', '275', 'DA', '010000010018534', 50000.00, '0.00', '', '', '', '', ''),
(276, '022K', 'RAMCHANDRA PANDIT IRAKAR', '276', 'DA', '010000010018801', 0.00, '0.00', '', '', '', '', ''),
(277, '023', 'SHIVAJI NARALE', '277', 'PERMANENT', '010000010017629', 0.00, '0.00', '', '', '', '', ''),
(278, '023A', 'MARUTI ATPADKAR', '278', 'PERMANENT', '010000010019053', 0.00, '0.00', '', '', '', '', ''),
(279, '023B', 'TANAJI LAHU TONE', '279', 'PERMANENT', '010000010017622', 0.00, '0.00', '', '', '', '', ''),
(280, '023C', 'ANANDA TAYAPAPA TONE', '280', 'PERMANENT', '010000010017581', 0.00, '0.00', '', '', '', '', ''),
(281, '023D', 'SHANKAR RAMU MUTEKAR', '281', 'PERMANENT', '010000010018290', 0.00, '0.00', '', '', '', '', ''),
(282, '023E', 'PRAKASH KAVTHEKAR', '282', 'PERMANENT', '010000010100153', 0.00, '0.00', '', '', '', '', ''),
(283, '023F', 'ASHOK WALEKAR', '283', 'PERMANENT', '010000010018008', 0.00, '0.00', '', '', '', '', ''),
(284, '023G', 'ANNA BEHARE', '284', 'PERMANENT', '010000010100124', 0.00, '0.00', '', '', '', '', ''),
(285, '023H', 'NAMDEV BEHERE', '285', 'PERMANENT', '010000010100184', 0.00, '0.00', '', '', '', '', ''),
(286, '023I', 'DAMU BANDAGAR', '286', 'PERMANENT', '010000010018113', 0.00, '0.00', '', '', '', '', ''),
(287, '023J', 'LINGAPPA HAJARE', '287', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(288, '023K', 'SHIVAJI GIDDE', '288', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(289, '024', 'BHIKU DAGDU ALADAR', '289', 'PERMANENT', '010000010018899', 50000.00, '0.00', '', '', '', '', ''),
(290, '024A', 'DHANLAL TATOBA WAGHMODE', '290', 'PERMANENT', '010000010018417', 0.00, '0.00', '', '', '', '', ''),
(291, '024B', 'TANAGI RAJARAM SARGAR', '291', 'PERMANENT', '010000010018541', 50000.00, '0.00', '', '', '', '', ''),
(292, '024C', 'AKARAM SARGAR', '292', 'PERMANENT', '010000010018261', 100000.00, '0.00', '', '', '', '', ''),
(293, '024D', 'LAXMAN BODHGIRE', '293', 'PERMANENT', '010000010018418', 0.00, '0.00', '', '', '', '', ''),
(294, '024E', 'BABASO KOLEKAR', '294', 'PERMANENT', '010000010018072', 0.00, '0.00', '', '', '', '', ''),
(295, '024F', 'SHAHAJI KAMBALE', '295', 'PERMANENT', '010000010018292', 63400.00, '0.00', '', '', '', '', ''),
(296, '024G', 'SADASHIV BODHAGIRE', '296', 'PERMANENT', '010000010017628', 0.00, '0.00', '', '', '', '', ''),
(297, '024H', 'SHRIMANT DEVKATE', '297', 'PERMANENT', '010000010017658', 0.00, '0.00', '', '', '', '', ''),
(298, '024I', 'POPAT SARGAR', '298', 'PERMANENT', '010000010018463', 100000.00, '0.00', '', '', '', '', ''),
(299, '024J', 'KISAN ALDAR', '299', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(300, '024K', 'VISHNU SHAMRAO SARGAR', '300', 'DA', '010000010018859', 0.00, '0.00', '', '', '', '', ''),
(301, '025', 'VISHWAS HAKE', '301', 'PERMANENT', '010000010018246', 0.00, '0.00', '', '', '', '', ''),
(302, '025A', 'BAJRANG GHERDE', '302', 'PERMANENT', '010000010017714', 0.00, '0.00', '', '', '', '', ''),
(303, '025B', 'DHONDIRAM GHERDE', '303', 'PERMANENT', '010000010017699', 0.00, '0.00', '', '', '', '', ''),
(304, '025C', 'DILIP DHUDHAL', '304', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(305, '025D', 'DEVIDAS VITHOBA RUPNER', '305', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(306, '025E', 'SHIVAJI KHOT', '306', 'PERMANENT', '010000010017705', 0.00, '0.00', '', '', '', '', ''),
(307, '025F', 'VISHWNATH YAMGAR', '307', 'PERMANENT', '010000010017582', 0.00, '0.00', '', '', '', '', ''),
(308, '025G', 'SHAHAJI TUREVALE', '308', 'PERMANENT', '010000010019376', 0.00, '0.00', '', '', '', '', ''),
(309, '025H', 'JAGU MANE', '309', 'PERMANENT', '010000010018287', 0.00, '0.00', '', '', '', '', ''),
(310, '025I', 'TUKARAM KHANDEKAR', '310', 'PERMANENT', '010000010018765', 0.00, '0.00', '', '', '', '', ''),
(311, '025J', 'MOHAN YASHWANT DUDHAL', '311', 'TEMPORARY', '010000010017739', 0.00, '0.00', '', '', '', '', ''),
(312, '025K', 'VISHNU BAJRANG GHERDE', '312', 'DA', '010000010017701', 0.00, '0.00', '', '', '', '', ''),
(313, '026', 'HANMANT KUMBHAR', '313', 'PERMANENT', '010000010010700', 0.00, '0.00', '', '', '', '', ''),
(314, '026A', 'UTTAM BHUJINGRO BABAR', '314', 'PERMANENT', '010000010017962', 0.00, '0.00', '', '', '', '', ''),
(315, '026B', 'RAMESH BASAPPA KUMBHAR', '315', 'PERMANENT', '010000010018525', 100000.00, '0.00', '', '', '', '', ''),
(316, '026C', 'SIDHDAPPA BHAU KHARAT', '316', 'PERMANENT', '010000010018434', 0.00, '0.00', '', '', '', '', ''),
(317, '026D', 'ASHOK SHIVAJI SHELKE', '317', 'PERMANENT', '010000010018629', 0.00, '0.00', '', '', '', '', ''),
(318, '026E', 'HANMANT BHIRA MOTE', '318', 'PERMANENT', '010000010017654', 0.00, '0.00', '', '', '', '', ''),
(319, '026F', 'PANDURANG KHANDEKAR', '319', 'PERMANENT', '010000010017982', 0.00, '0.00', '', '', '', '', ''),
(320, '026G', 'SAMBHAJI BANDGAR', '320', 'PERMANENT', '010000010018976', 5500.00, '0.00', '', '', '', '', ''),
(321, '026H', 'SUKHDEV BABA RUPANUR', '321', 'PERMANENT', '010000010018544', 0.00, '0.00', '', '', '', '', ''),
(322, '026I', 'ANKUSH APPA KATRE', '322', 'PERMANENT', '010000010018972', 0.00, '0.00', '', '', '', '', ''),
(323, '026J', 'AAKARAM IRKAR', '323', 'DA', '010000010018543', 0.00, '0.00', '', '', '', '', ''),
(324, '026K', 'SHACHIN MADNE', '324', 'DA', '010000010018550', 0.00, '0.00', '', '', '', '', ''),
(325, '026L', 'GOVIND KHANDEKAR', '325', 'DA', '010000010019077', 0.00, '0.00', '', '', '', '', ''),
(326, '027', 'SHASHIKANT ALDAR', '326', 'PERMANENT', '010000010018239', 0.00, '0.00', '', '', '', '', ''),
(327, '027A', 'SHIVAJI SARGAR', '327', 'PERMANENT', '010000010018259', 0.00, '0.00', '', '', '', '', ''),
(328, '027B', 'DAGDU ALDAR', '328', 'PERMANENT', '010000010017647', 0.00, '0.00', '', '', '', '', ''),
(329, '027C', 'TUKARAM ALDAR', '329', 'PERMANENT', '010000010018273', 0.00, '0.00', '', '', '', '', ''),
(330, '027D', 'VITHOBA MAHADEV SARGAR', '330', 'PERMANENT', '010000010017632', 0.00, '0.00', '', '', '', '', ''),
(331, '027E', 'MANOHAR PANDURANG MANE', '331', 'PERMANENT', '010000010017579', 0.00, '0.00', '', '', '', '', ''),
(332, '027F', 'BHIMRAO SARGAR', '332', 'PERMANENT', '010000010018426', 0.00, '0.00', '', '', '', '', ''),
(333, '027G', 'BHAUSAHEB SARGAR', '333', 'PERMANENT', '010000010017675', 0.00, '0.00', '', '', '', '', ''),
(334, '027H', 'VISHNU ALDAR', '334', 'PERMANENT', '010000010018943', 0.00, '0.00', '', '', '', '', ''),
(335, '027I', 'JAGANNATH ATPATKAR', '335', 'PERMANENT', '010000010018297', 0.00, '0.00', '', '', '', '', ''),
(336, '027J', 'ASHOK SOPAN AALDAR', '336', 'PERMANENT', '010000010017574', 0.00, '0.00', '', '', '', '', ''),
(337, '027K', 'ANNA ALDAR', '337', 'PERMANENT', '010000010018293', 0.00, '0.00', '', '', '', '', ''),
(338, '028', 'DAGADU VITHOBA SARAGAR', '338', 'PERMANENT', '010000010018438', 0.00, '0.00', '', '', '', '', ''),
(339, '028A', 'BHAGWAN WAGHMODE', '339', 'PERMANENT', '010000010017641', 0.00, '0.00', '', '', '', '', ''),
(340, '028B', 'KISAN ALDAR', '340', 'PERMANENT', '010000010017707', 0.00, '0.00', '', '', '', '', ''),
(341, '028C', 'KONDIBA GAVADE', '341', 'PERMANENT', '010000010017619', 0.00, '0.00', '', '', '', '', ''),
(342, '028D', 'DAULAT BURANGE', '342', 'PERMANENT', '010000010017711', 0.00, '0.00', '', '', '', '', ''),
(343, '028E', 'VITHAL ALDAR', '343', 'PERMANENT', '010000010018565', 0.00, '0.00', '', '', '', '', ''),
(344, '028F', 'VITHAL SARGAR', '344', 'PERMANENT', '010000010018981', 0.00, '0.00', '', '', '', '', ''),
(345, '028G', 'BABASAHEB SARGAR', '345', 'PERMANENT', '010000010017644', 0.00, '0.00', '', '', '', '', ''),
(346, '028H', 'DADASAHEB HAJARE', '346', 'PERMANENT', '010000010017750', 0.00, '0.00', '', '', '', '', ''),
(347, '028I', 'GYANDEV KOLEKAR', '347', 'PERMANENT', '010000010019038', 0.00, '0.00', '', '', '', '', ''),
(348, '028J', 'BAPOORAO BHAGWAN SAGAR', '348', 'DA', '010000010018466', 0.00, '0.00', '', '', '', '', ''),
(349, '029', 'RAMCHANDRA SARGAR', '349', 'PERMANENT', '010000010018336', 0.00, '0.00', '', '', '', '', ''),
(350, '029A', 'NARAYAN MAHADKAR', '350', 'PERMANENT', '010000010018424', 0.00, '0.00', '', '', '', '', ''),
(351, '029B', 'SOPAN YAMGAR', '351', 'PERMANENT', '010000010100292', 16100.00, '0.00', '', '', '', '', ''),
(352, '029C', 'SADASHIV WAGARE', '352', 'PERMANENT', '010000010017738', 0.00, '0.00', '', '', '', '', ''),
(353, '029D', 'BASSAPPA HAKE', '353', 'PERMANENT', '010000010017806', 0.00, '0.00', '', '', '', '', ''),
(354, '029E', 'LAXMAN GHAGARE', '354', 'PERMANENT', '010000010017761', 0.00, '0.00', '', '', '', '', ''),
(355, '029F', 'BHIMRAO KOLEKAR', '355', 'PERMANENT', '010000010018942', 0.00, '0.00', '', '', '', '', ''),
(356, '029G', 'VISHNU SHINGADE', '356', 'PERMANENT', '010000010018893', 0.00, '0.00', '', '', '', '', ''),
(357, '029H', 'DADASO PATIL', '357', 'PERMANENT', '010000010018683', 0.00, '0.00', '', '', '', '', ''),
(358, '029I', 'LAXMAN GOYAKAR', '358', 'PERMANENT', '010000010018435', 0.00, '0.00', '', '', '', '', ''),
(359, '029J', 'LAVHU RAVASO SARGAR', '359', 'DA', '010000010018533', 0.00, '0.00', '', '', '', '', ''),
(360, '029K', 'SHANKAR GHAGARE', '360', 'DA', '010000010018967', 0.00, '0.00', '', '', '', '', ''),
(361, '030', 'DASHRATH ALDAR', '361', 'PERMANENT', '010000010017578', 0.00, '0.00', '', '', '', '', ''),
(362, '030A', 'SUBARAV ALDAR', '362', 'PERMANENT', '010000010017638', 0.00, '0.00', '', '', '', '', ''),
(363, '030B', 'BAJRANG ALDAR', '363', 'PERMANENT', '010000010018415', 0.00, '0.00', '', '', '', '', ''),
(364, '030C', 'HARIBHAU ALDAR', '364', 'PERMANENT', '010000010017643', 0.00, '0.00', '', '', '', '', ''),
(365, '030D', 'PRAKASH ALDAR', '365', 'PERMANENT', '010000010100500', 0.00, '0.00', '', '', '', '', ''),
(366, '030E', 'NAMDEV ANAVANE', '366', 'PERMANENT', '010000010018686', 0.00, '0.00', '', '', '', '', ''),
(367, '030F', 'RAJARAM BANDGAR', '367', 'PERMANENT', '010000010018291', 0.00, '0.00', '', '', '', '', ''),
(368, '030G', 'MANIK BAYAJI DHERE', '368', 'PERMANENT', '010000010018238', 0.00, '0.00', '', '', '', '', ''),
(369, '030H', 'ASHOK GOPINATH DHAYGUDE', '369', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(370, '030I', 'RAMCHANDRA SARAGAR', '370', 'PERMANENT', '010000010018398', 0.00, '0.00', '', '', '', '', ''),
(371, '031', 'KUNDLIK ALDAR', '371', 'PERMANENT', '010000010017900', 0.00, '0.00', '', '', '', '', ''),
(372, '031A', 'BIRA ALDAR', '372', 'PERMANENT', '010000010017713', 0.00, '0.00', '', '', '', '', ''),
(373, '031C', 'JAYWANT SARGAR', '374', 'PERMANENT', '010000010018056', 0.00, '0.00', '', '', '', '', ''),
(374, '031D', 'ASHOK NARAYAN ALDAR', '375', 'PERMANENT', '010000010019011', 0.00, '0.00', '', '', '', '', ''),
(375, '031E', 'CHANDRAKANT SARGAR', '376', 'PERMANENT', '010000010018872', 0.00, '0.00', '', '', '', '', ''),
(376, '031F', 'POPAT ALDAR', '377', 'PERMANENT', '010000010017692', 0.00, '0.00', '', '', '', '', ''),
(377, '031G', 'BIRUDAEV SARGAR', '378', 'PERMANENT', '010000010019017', 0.00, '0.00', '', '', '', '', ''),
(378, '031H', 'RAJARAM SARGAR', '379', 'PERMANENT', '010000010018289', 0.00, '0.00', '', '', '', '', ''),
(379, '031I', 'DATTU YASHWANT ALDAR', '380', 'PERMANENT', '010000010018682', 0.00, '0.00', '', '', '', '', ''),
(380, '031K', 'NARAYAN BANDGAR', '382', 'TEMPORARY', '010000010018844', 0.00, '0.00', '', '', '', '', ''),
(381, '031O', 'NARAYAN BANDGAR', '383', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(382, '032', 'NAMDEV BAPU PATIL', '384', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(383, '032A', 'DATTATRAY BORKAR', '385', 'PERMANENT', '010000010018298', 0.00, '0.00', '', '', '', '', ''),
(384, '032B', 'MAHADEV KARANDE', '386', 'PERMANENT', '010000010018409', 0.00, '0.00', '', '', '', '', ''),
(385, '032C', 'SUBHASH SARAWADE', '387', 'PERMANENT', '010000010017727', 0.00, '0.00', '', '', '', '', ''),
(386, '032D', 'KRISHNA GIRAJAPPA GADADE', '388', 'PERMANENT', '010000010017954', 0.00, '0.00', '', '', '', '', ''),
(387, '032E', 'DHARMA MAMRUTI DORLE', '389', 'PERMANENT', '010000010018787', 0.00, '0.00', '', '', '', '', ''),
(388, '032F', 'SAMPATTI VAGHE', '390', 'PERMANENT', '010000010018402', 0.00, '0.00', '', '', '', '', ''),
(389, '032G', 'LAXMAN ALDAR', '391', 'PERMANENT', '010000010018628', 0.00, '0.00', '', '', '', '', ''),
(390, '032H', 'NARAYAN V. TENGALE', '392', 'PERMANENT', '010000010017609', 5500.00, '0.00', '', '', '', '', ''),
(391, '032I', 'DADASO RANGA BHUSNUR', '393', 'PERMANENT', '010000010100551', 0.00, '0.00', '', '', '', '', ''),
(392, '032J', 'SANTOSH DADASAHEB GALANDE', '394', 'DA', '010000010018807', 0.00, '0.00', '', '', '', '', ''),
(393, '032K', 'BHANUDAS GORE', '395', 'DA', '010000010018767', 0.00, '0.00', '', '', '', '', ''),
(394, '032L', 'PANDURANG GORE', '396', 'DA', '010000010019003', 0.00, '0.00', '', '', '', '', ''),
(395, '032N', 'JOTIRAM SOAPAN GHODKE', '397', 'DA', '016000010011309', 0.00, '0.00', '', '', '', '', ''),
(396, '033', 'TANAJI HARICHANDRA KOLEKAR', '398', 'PERMANENT', '010000010017653', 0.00, '0.00', '', '', '', '', ''),
(397, '033A', 'MADHUKAR KOLEKAR', '399', 'PERMANENT', '010000010018054', 0.00, '0.00', '', '', '', '', ''),
(398, '033B', 'TUKARAM KOLEKAR', '400', 'PERMANENT', '010000010100270', 0.00, '0.00', '', '', '', '', ''),
(399, '033C', 'TAYAPPA PAREKAR', '401', 'PERMANENT', '010000010018407', 0.00, '0.00', '', '', '', '', ''),
(400, '033D', 'BALU PAREKAR', '402', 'PERMANENT', '010000010100260', 0.00, '0.00', '', '', '', '', ''),
(401, '033E', 'SHAMRAO BANDGAR', '403', 'PERMANENT', '010000010018458', 0.00, '0.00', '', '', '', '', ''),
(402, '033F', 'ANKUSH PATOLE', '404', 'PERMANENT', '010000010018264', 5500.00, '0.00', '', '', '', '', ''),
(403, '033G', 'TANAJI SURYABA BANDGAR', '405', 'PERMANENT', '010000010017693', 0.00, '0.00', '', '', '', '', ''),
(404, '033H', 'PRABHAKAR SUKHDEV PANDHARE', '406', 'PERMANENT', '010000010018403', 0.00, '0.00', '', '', '', '', ''),
(405, '033I', 'RAJARAM AGNU GUJALE', '407', 'PERMANENT', '010000010018689', 0.00, '0.00', '', '', '', '', ''),
(406, '033J', 'SHANKAR PATIL', '408', 'PERMANENT', '010000010018568', 0.00, '0.00', '', '', '', '', ''),
(407, '033K', 'SHIVAJI MARGALE', '409', 'TEMPORARY', '010000010100413', 0.00, '0.00', '', '', '', '', ''),
(409, '033l', 'BALU PAREKAR', '411', 'PERMANENT', '010000010100260', 0.00, '0.00', '', '', '', '', ''),
(410, '034', 'DURYODHAN LAXMAN IRKAR', '412', 'PERMANENT', '010000010017800', 0.00, '0.00', '', '', '', '', ''),
(411, '034A', 'BALU GANPAT SARGAR', '413', 'PERMANENT', '010000010018624', 0.00, '0.00', '', '', '', '', ''),
(412, '034B', 'ANKUSH RAMA TURAI', '414', 'PERMANENT', '010000010017685', 0.00, '0.00', '', '', '', '', ''),
(413, '034C', 'ARJUN NAMDEOO LAVTE', '415', 'PERMANENT', '010000010017577', 0.00, '0.00', '', '', '', '', ''),
(414, '034D', 'MANOHAR CHAUGULE', '416', 'PERMANENT', '010000010017676', 50000.00, '0.00', '', '', '', '', ''),
(415, '034E', 'TUKARAM RAJARAM SARGAR', '417', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(416, '034F', 'BALU TUKARAM GAVDE', '418', 'PERMANENT', '010000010017633', 0.00, '0.00', '', '', '', '', ''),
(417, '034G', 'ARUN TUKARAM GAVDE', '419', 'PERMANENT', '010000010017683', 0.00, '0.00', '', '', '', '', ''),
(418, '034H', 'RAJARAM JITE', '420', 'PERMANENT', '010000010018322', 0.00, '0.00', '', '', '', '', ''),
(419, '034I', '', '421', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(420, '034J', 'BHANUDAS VILAS GORE', '422', 'DA', '010000010018767', 0.00, '0.00', '', '', '', '', ''),
(421, '034K', 'PANDURANG KISAN GORE', '423', 'DA', '010000010019003', 0.00, '0.00', '', '', '', '', ''),
(422, '034L', '', '424', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(423, '034M', 'APPASO GORE', '425', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(424, '034N', '', '426', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(425, '035', 'SADASHIV GANPAT ALDAR', '427', 'PERMANENT', '010000010018973', 0.00, '0.00', '', '', '', '', ''),
(426, '035A', 'ISHWAR KARANDE', '428', 'PERMANENT', '010000010017703', 0.00, '0.00', '', '', '', '', ''),
(427, '035B', 'SUKHDEV NARALE', '429', 'PERMANENT', '010000010018685', 0.00, '0.00', '', '', '', '', ''),
(428, '035C', 'LAXMAN GALVE', '430', 'PERMANENT', '010000010017601', 0.00, '0.00', '', '', '', '', ''),
(429, '035D', 'SANJAY ALDAR', '431', 'PERMANENT', '010000010017603', 0.00, '0.00', '', '', '', '', ''),
(430, '035E', 'TANAJI BHUSANAR', '432', 'PERMANENT', '010000010100534', 0.00, '0.00', '', '', '', '', ''),
(431, '035F', 'APPASO KARANDE', '433', 'PERMANENT', '010000010018779', 50000.00, '0.00', '', '', '', '', ''),
(432, '035G', 'DNYANU CHAUGHULE', '434', 'PERMANENT', '010000010100314', 0.00, '0.00', '', '', '', '', ''),
(433, '035H', 'RAMESH SARGAR', '435', 'PERMANENT', '010000010018279', 0.00, '0.00', '', '', '', '', ''),
(434, '035I', 'GAJANAN SHELKE', '436', 'PERMANENT', '010000010100309', 0.00, '0.00', '', '', '', '', ''),
(435, '035J', 'SHIVAJI NAMDEV KARANDE', '437', 'TEMPORARY', '010000010018766', 0.00, '0.00', '', '', '', '', ''),
(436, '035K', 'TANAJI BHUSNER', '438', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(437, '035L', '', '439', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(438, '036', 'MANOHAR MANSINGH MANE', '440', 'PERMANENT', '010000010017677', 0.00, '0.00', '', '', '', '', ''),
(439, '036A', 'DEVIDAS MARUTI PATIL', '441', 'PERMANENT', '010000010100481', 2600.00, '0.00', '', '', '', '', ''),
(440, '036B', 'VILAS GAIKWAD', '442', 'PERMANENT', '010000010018071', 0.00, '0.00', '', '', '', '', ''),
(441, '036C', 'TUKARAM SHINDE', '443', 'PERMANENT', '010000010100318', 0.00, '0.00', '', '', '', '', ''),
(442, '036D', 'KRUSHANA YEDKE', '444', 'PERMANENT', '010000010018646', 0.00, '0.00', '', '', '', '', ''),
(443, '036E', 'SUBHASH PANDHARE', '445', 'PERMANENT', '010000010018465', 0.00, '0.00', '', '', '', '', ''),
(444, '036F', 'KRUSHANA MANE', '446', 'PERMANENT', '010000010017679', 0.00, '0.00', '', '', '', '', ''),
(445, '036G', 'SOPAN BUSNUR', '447', 'PERMANENT', '010000010018467', 0.00, '0.00', '', '', '', '', ''),
(446, '036H', 'RAJENDRA CHAUGULE', '448', 'PERMANENT', '010000010017867', 0.00, '0.00', '', '', '', '', ''),
(447, '036I', 'SUBHASH PAREKAR', '449', 'PERMANENT', '010000010018898', 0.00, '0.00', '', '', '', '', ''),
(448, '036J', 'LAXMAN MANE', '450', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(449, '036K', 'SHRIRANG MANE', '451', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(450, '037', 'ANANDA MOTE', '452', 'PERMANENT', '010000010018451', 0.00, '0.00', '', '', '', '', ''),
(451, '037A', 'NANASO KONDIKIRE', '453', 'PERMANENT', '010000010017979', 0.00, '0.00', '', '', '', '', ''),
(452, '037B', 'SANTAJI SHINGADE', '454', 'PERMANENT', '010000010018940', 0.00, '0.00', '', '', '', '', ''),
(453, '037C', 'JAKKAPPA TUKARAM GADADE', '455', 'PERMANENT', '010000010018329', 0.00, '0.00', '', '', '', '', ''),
(454, '037D', 'ANANDA SOLANKAR', '456', 'PERMANENT', '010000010018453', 0.00, '0.00', '', '', '', '', ''),
(455, '037E', 'SADHU DUDHAL', '457', 'PERMANENT', '010000010017802', 0.00, '0.00', '', '', '', '', ''),
(456, '037F', 'KALAPPA RAOTTAPPA BANSODE', '458', 'PERMANENT', '010000010018618', 0.00, '0.00', '', '', '', '', ''),
(457, '037G', 'RAJENDRA DEVKATE', '459', 'PERMANENT', '010000010017978', 0.00, '0.00', '', '', '', '', ''),
(458, '037H', 'JAYVANT NARALE', '460', 'PERMANENT', '010000010018370', 0.00, '0.00', '', '', '', '', ''),
(459, '037I', 'SHIVCHAND GUPTA', '461', 'PERMANENT', '010000010018197', 0.00, '0.00', '', '', '', '', ''),
(460, '037J', 'VITTHAL GANPAT MANE', '462', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(461, '037K', 'ANKUSH LOKHANDE', '463', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(462, '038', 'YUVARAJ HANMANT GHAGARE', '464', 'PERMANENT', '010000010018423', 0.00, '0.00', '', '', '', '', ''),
(463, '099A', 'BALU SABALE', '465', 'PERMANENT', '010000010018284', 50000.00, '0.00', '', NULL, NULL, '', ''),
(464, '038B', 'ARJUN NARALE', '466', 'PERMANENT', '010000010019687', 0.00, '0.00', '', '', '', '', ''),
(465, '038C', 'MARUTI GHERDE', '467', 'PERMANENT', '010000010013045', 0.00, '0.00', '', '', '', '', ''),
(466, '038D', 'ASHOK GHUTUGADE', '468', 'PERMANENT', '010000010100207', 0.00, '0.00', '', '', '', '', ''),
(467, '038E', 'PANDURANG DAMU HASABE', '469', 'PERMANENT', '010000010018747', 0.00, '0.00', '', '', '', '', ''),
(468, '038F', 'MANOJ KOLEKAR', '470', 'PERMANENT', '010000010018654', 0.00, '0.00', '', '', '', '', ''),
(469, '038G', 'DATTA GALAVE', '471', 'PERMANENT', '010000010018648', 0.00, '0.00', '', '', '', '', ''),
(470, '038H', 'KASHILING BANDGAR', '472', 'PERMANENT', '010000010019596', 0.00, '0.00', '', '', '', '', ''),
(471, '038I', 'DHONDIRAM UTTARE', '473', 'PERMANENT', '010000010017688', 0.00, '0.00', '', '', '', '', ''),
(472, '038J', 'SATYAVAN SABALE', '474', 'PERMANENT', '010000010018285', 0.00, '0.00', '', '', '', '', ''),
(473, '038K', 'DNYANU SUKHDEO MAHARNUR', '475', 'DA', '010000010018553', 0.00, '0.00', '', '', '', '', ''),
(474, '038L', 'DHANAJI RAMCHANDRA GORE', '476', 'DA', '010000010018743', 0.00, '0.00', '', '', '', '', ''),
(475, '039', 'DNYANU RAMCHANDRA SARGAR', '477', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', '');
INSERT INTO `lp_gang_m` (`gm_tabreckey`, `gm_gang_code`, `gm_name`, `gm_badge_no`, `gm_memcatg`, `gm_bankaccnbr`, `adv_amount`, `adv_os`, `gm_name_marathi`, `gm_email`, `gm_mphonenbr`, `gm_pf_no`, `gm_esic_no`) VALUES
(476, '039A', 'VILAS DAGADU BODHGIRE', '478', 'PERMANENT', '010000010100507', 0.00, '0.00', '', '', '', '', ''),
(477, '039B', 'VISHNU NAMDEO SARGAR', '479', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(478, '039D', 'LINGAPPA DHONDIBA ALDAR', '480', 'PERMANENT', '010000010100490', 0.00, '0.00', '', '', '', '', ''),
(479, '039E', 'SADASHIV GANPAT ALDAR', '481', 'PERMANENT', '010000010018973', 0.00, '0.00', '', '', '', '', ''),
(480, '039F', 'SHIVAJI SAMBHAJI SARGAR', '482', 'PERMANENT', '010000010100401', 0.00, '0.00', '', '', '', '', ''),
(481, '039G', 'UTTAM MARUTI GADADE', '483', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(482, '039H', '', '484', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(483, '039J', 'RAMESH ALDAR', '485', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(484, '039K', 'VIJAY  PANDHARE', '486', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(485, '039L', 'GORAKHA ALDAR', '487', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(486, '039M', 'SAMADHAN BHODGIRE', '488', 'DA', '010000010018819', 0.00, '0.00', '', '', '', '', ''),
(487, '039N', 'SANTOSH SARGAR', '489', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(488, '039O', 'DATTA SARGAR', '490', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(489, '039P', 'SUBHASH SARGAR', '491', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(490, '040', 'BHAUSAHEB A.PINGALE', '492', 'PERMANENT', '010000010017620', 0.00, '0.00', '', '', '', '', ''),
(491, '040A', 'HIMANT PANDIT MASAL', '493', 'PERMANENT', '010000010018454', 0.00, '0.00', '', '', '', '', ''),
(492, '040B', 'SHANKAR SURYABA JANAKAR', '494', 'PERMANENT', '010000010018286', 0.00, '0.00', '', '', '', '', ''),
(493, '040C', 'BHAUSO DADA TAKALE', '495', 'PERMANENT', '010000010018309', 0.00, '0.00', '', '', '', '', ''),
(494, '040D', 'ANIL GINJE', '496', 'PERMANENT', '010000010018391', 0.00, '0.00', '', '', '', '', ''),
(495, '040E', 'DADASO BABU GALANDE', '497', 'PERMANENT', '010000010018250', 0.00, '0.00', '', '', '', '', ''),
(496, '040F', 'RAVASAHEB DUDHAL', '498', 'PERMANENT', '010000010019079', 0.00, '0.00', '', '', '', '', ''),
(497, '040G', 'SHIVAJI TUKARAM KHADKE', '499', 'PERMANENT', '010000010018199', 0.00, '0.00', '', '', '', '', ''),
(498, '040H', 'JAYSING LAVTE', '500', 'PERMANENT', '010000010019059', 0.00, '0.00', '', '', '', '', ''),
(499, '040I', 'BALU DHAYGUDE', '501', 'PERMANENT', '010000010018700', 0.00, '0.00', '', '', '', '', ''),
(500, '040J', 'KONDIRAM JANKAR', '502', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(501, '040K', 'DNYANU SUKHADEV MAHARNUR', '503', 'DA', '010000010018553', 0.00, '0.00', '', '', '', '', ''),
(502, '041', 'PIRAJI SHANKAR BANDGAR', '504', 'PERMANENT', '010000010018236', 0.00, '0.00', '', '', '', '', ''),
(503, '041A', 'SAMBHAJI SHIRGIRE', '505', 'PERMANENT', '010000010017645', 0.00, '0.00', '', '', '', '', ''),
(504, '041B', 'VILAS KARANDE', '506', 'PERMANENT', '010000010018084', 0.00, '0.00', '', '', '', '', ''),
(505, '041C', 'BABASO SADA SHINDE', '507', 'PERMANENT', '010000010018040', 0.00, '0.00', '', '', '', '', ''),
(506, '041D', 'ANIL MADANE', '508', 'PERMANENT', '010000010017674', 0.00, '0.00', '', '', '', '', ''),
(507, '041E', 'RAJU DASHARATH RUPNAR', '509', 'PERMANENT', '010000010018258', 0.00, '0.00', '', '', '', '', ''),
(508, '041F', 'MHALAPPA HAKKE', '510', 'PERMANENT', '010000010018360', 0.00, '0.00', '', '', '', '', ''),
(509, '041G', 'JAYWANT GAWADE', '511', 'PERMANENT', '010000010017735', 0.00, '0.00', '', '', '', '', ''),
(510, '041H', 'KANTILAL SOPAN GAWADE', '512', 'PERMANENT', '010000010018272', 0.00, '0.00', '', '', '', '', ''),
(511, '041I', 'VASANT GALVE', '513', 'PERMANENT', '010000010018979', 0.00, '0.00', '', '', '', '', ''),
(512, '041J', 'RAHUL SHINDE', '514', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(513, '041K', 'SUBHASH SARVDE', '515', '', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(514, '042', 'MARUTI KRUSHNA LAVATE', '516', 'PERMANENT', '010000010018006', 0.00, '0.00', '', '', '', '', ''),
(515, '042A', 'ANANDA JAVIR', '517', 'PERMANENT', '010000010018240', 0.00, '0.00', '', '', '', '', ''),
(516, '042B', 'SANTOSHA WHANMANE', '518', 'PERMANENT', '010000010107595', 0.00, '0.00', '', '', '', '', ''),
(517, '042C', 'SAMBHAJI PANDHARE', '519', 'PERMANENT', '010000010018470', 0.00, '0.00', '', '', '', '', ''),
(518, '042D', 'TANAJI DHEKALE', '520', 'PERMANENT', '010000010018308', 0.00, '0.00', '', '', '', '', ''),
(519, '042E', 'GORAKHA VITHOBA NARLE', '521', 'PERMANENT', '010000010019483', 0.00, '0.00', '', '', '', '', ''),
(520, '042F', 'VITTHAL BANDGAR', '522', 'PERMANENT', '010000010018464', 0.00, '0.00', '', '', '', '', ''),
(521, '042G', 'SHRIPATI NARALE', '523', 'PERMANENT', '010000010018241', 0.00, '0.00', '', '', '', '', ''),
(522, '042H', 'DILIP WHANMANE', '524', 'PERMANENT', '010000010017728', 0.00, '0.00', '', '', '', '', ''),
(523, '042I', 'KERU SHINDE', '525', 'PERMANENT', '010000010017903', 0.00, '0.00', '', '', '', '', ''),
(524, '042J', 'SAMADHAN BODHGIRE', '526', 'DA', '010000010018819', 0.00, '0.00', '', '', '', '', ''),
(525, '042K', 'SAGAR TAYAPPA LAVATE', '527', 'DA', '010000010018738', 0.00, '0.00', '', '', '', '', ''),
(526, '042L', 'DARYABA GADADE', '528', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(527, '042M', 'RAMCHANDRA KHARAT', '529', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(528, '042N', 'LAXMAN KAKASO PANDHARE', '373', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(529, '043', 'ANANDA KERU KOLEKAR', '530', 'PERMANENT', '010000010017599', 0.00, '0.00', '', '', '', '', ''),
(530, '043A', 'BHARAT BURUNGALE', '531', 'PERMANENT', '010000010018815', 0.00, '0.00', '', '', '', '', ''),
(531, '043B', 'MAHADEV BHAIRU ALDAR', '532', 'PERMANENT', '010000010100389', 0.00, '0.00', '', '', '', '', ''),
(532, '043C', 'TANAJI ALDAR', '533', 'PERMANENT', '010000010018256', 0.00, '0.00', '', '', '', '', ''),
(533, '043E', 'SADASHIV LAVATE', '534', 'PERMANENT', '010000010018651', 0.00, '0.00', '', '', '', '', ''),
(534, '043F', 'DADASO SUKHADEO SARGAR', '535', 'PERMANENT', '010000010018010', 0.00, '0.00', '', '', '', '', ''),
(535, '043G', 'DAGADU SOMA KOLEKAR', '536', 'PERMANENT', '010000010018364', 0.00, '0.00', '', '', '', '', ''),
(536, '043H', 'KUNDALIK SHYAMRAO ALDAR', '537', 'PERMANENT', '010000010018478', 0.00, '0.00', '', '', '', '', ''),
(537, '043I', 'MADHUKAR DEVKATE', '538', 'PERMANENT', '010000010018392', 0.00, '0.00', '', '', '', '', ''),
(538, '043J', 'DILIP SUBRAV ALDAR', '539', 'DA', '010000010018723', 0.00, '0.00', '', '', '', '', ''),
(539, '043K', 'SHRIMANT SARGAR', '540', 'DA', '010000010016655', 0.00, '0.00', '', '', '', '', ''),
(540, '043L', 'DADASO DANGE', '541', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(541, '043M', 'EKNATH KOLEKAR', '542', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(542, '044', 'KAKASO DOMBALE', '543', 'PERMANENT', '010000010018274', 0.00, '0.00', '', '', '', '', ''),
(543, '044A', 'JYOTIBA BANDGAR', '544', 'PERMANENT', '010000010018255', 0.00, '0.00', '', '', '', '', ''),
(544, '044B', 'SHANKAR GANPATI WALEKAR', '545', 'PERMANENT', '010000010018429', 0.00, '0.00', '', '', '', '', ''),
(545, '044C', 'NIVRUTI MAHARNUR', '546', 'PERMANENT', '010000000000000', 0.00, '0.00', '', '', '', '', ''),
(546, '044D', 'VILAS KHANDEKAR', '547', 'PERMANENT', '010000010100285', 0.00, '0.00', '', '', '', '', ''),
(547, '044E', 'MADAN TAWARE', '548', 'PERMANENT', '010000010019486', 0.00, '0.00', '', '', '', '', ''),
(548, '044F', 'RAMCHANDRA KHUTALE', '549', 'PERMANENT', '010000010017666', 0.00, '0.00', '', '', '', '', ''),
(549, '044G', 'CHANDRAKANT MAHARNUR', '550', 'PERMANENT', '010000010017661', 0.00, '0.00', '', '', '', '', ''),
(550, '044H', 'RAMA TURAI', '551', 'PERMANENT', '010000010018688', 206500.00, '0.00', '', '', '', '', ''),
(551, '044I', 'KASHILING BANDGAR', '552', 'PERMANENT', '010000010100442', 0.00, '0.00', '', '', '', '', ''),
(552, '044J', 'BANDU MAHARNUR', '553', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(553, '047', 'ANANDA KERU KOLEKAR', '572', 'PERMANENT', '010000010017599', 64000.00, '0.00', '', '', '', '', ''),
(554, '047E', 'SANJAY ALDAR', '576', 'PERMANENT', '010000010017603', 264000.00, '0.00', '', '', '', '', ''),
(555, '047J', 'DATTATRAYA AMRUT NARALE', '579', 'PERMANENT', '010000010018164', 0.00, '0.00', '', '', '', '', ''),
(556, '048A', 'PANDURANG GYANU TAKALE', '581', 'PERMANENT', '010000010017667', 64000.00, '0.00', '', '', '', '', ''),
(557, '048D', 'VILAS BANDGAR', '584', 'PERMANENT', '010000010017722', 14000.00, '0.00', '', '', '', '', ''),
(558, '048L', 'SUBHASH KACHARE', '586', 'PERMANENT', '010000010017708', 14000.00, '0.00', '', '', '', '', ''),
(559, '049A', 'DILIP WHANMANE', '588', 'PERMANENT', '010000010017728', 214000.00, '0.00', '', '', '', '', ''),
(560, '049E', 'DADA HAJARE', '591', 'PERMANENT', '010000010017750', 14000.00, '0.00', '', '', '', '', ''),
(561, '049I', 'KERU BALU SHINDE', '594', 'PERMANENT', '010000010017903', 150000.00, '0.00', '', '', '', '', ''),
(562, '050K', 'BALU MADANE', '599', 'PERMANENT', '010000010017597', 264000.00, '0.00', '', '', '', '', ''),
(563, '051D', 'DHONDIRAM BHIMRAO UTARE', '602', 'PERMANENT', '010000010017688', 164000.00, '0.00', '', '', '', '', ''),
(564, '051I', 'DHONDIBA WAGHMODE', '604', 'PERMANENT', '010000010017588', 114000.00, '0.00', '', '', '', '', ''),
(565, '051J', 'BHARAT GHODE', '605', 'PERMANENT', '010000010017589', 14000.00, '0.00', '', '', '', '', ''),
(566, '053K', 'RAMCHANDRA KHUTALE', '618', 'PERMANENT', '010000010017666', 114000.00, '0.00', '', '', '', '', ''),
(567, '053L', 'CHANDRAKANT MAHARNUR', '619', 'PERMANENT', '010000010017661', 64000.00, '0.00', '', '', '', '', ''),
(568, 'F01', 'PARAMASIVAN PANIKAR', '744', 'PERMANENT', '010000010017614', 0.00, '0.00', '', '', '', '', ''),
(569, 'F01A', 'KANNAN VANNIYER', '745', 'PERMANENT', '010000010018729', 0.00, '0.00', '', '', '', '', ''),
(570, 'F01B', 'P.PHILIPRAJ', '746', 'PERMANENT', '010000010018954', 0.00, '0.00', '', '', '', '', ''),
(571, 'F01C', 'KADARA MOHIDIN', '747', 'PERMANENT', '010000010017689', 0.00, '0.00', '', '', '', '', ''),
(572, 'F01D', 'V.CHINADURAI', '748', 'PERMANENT', '010000010017719', 0.00, '0.00', '', '', '', '', ''),
(573, 'F01E', 'SELVARAJ KUMAR NADAR', '749', 'PERMANENT', '010000010017980', 0.00, '0.00', '', '', '', '', ''),
(574, 'F01F', 'APPARAO ANIL S KARANAM', '750', 'PERMANENT', '010000010017958', 0.00, '0.00', '', '', '', '', ''),
(575, 'F01G', 'M. SELVAM', '751', 'PERMANENT', '010000010018355', 0.00, '0.00', '', '', '', '', ''),
(576, 'F01H', 'SOLOMON CHITIRAI NADAR', '752', 'TEMPORARY', '010000010017694', 0.00, '0.00', '', '', '', '', ''),
(577, 'F02', 'KASHINATHAN ASUPATI SHETTY', '753', 'PERMANENT', '010000010017652', 0.00, '0.00', '', '', '', '', ''),
(578, 'F02A', 'PALANIVEL ARMUGUM', '754', 'PERMANENT', '010000010018708', 0.00, '0.00', '', '', '', '', ''),
(579, 'F02C', 'A.MARIYA AROGYA SWAMI', '755', 'PERMANENT', '010000010018990', 0.00, '0.00', '', '', '', '', ''),
(580, 'F02D', 'P. RAYPAN PAKIYAM', '756', 'PERMANENT', '010000010018961', 0.00, '0.00', '', '', '', '', ''),
(581, 'F02E', 'AAKESHAVAN AMMASI', '757', 'PERMANENT', '010000010018971', 0.00, '0.00', '', '', '', '', ''),
(582, 'F02F', 'ARON PAKIYAN', '758', 'PERMANENT', '010000010017716', 0.00, '0.00', '', '', '', '', ''),
(583, 'F02H', 'S. CHINNAPPAN', '760', 'PERMANENT', '010000010018699', 0.00, '0.00', '', '', '', '', ''),
(584, 'F02I', 'DOMANIK PICHAI', '761', 'PERMANENT', '010000010017715', 0.00, '0.00', '', '', '', '', ''),
(585, 'F02J', 'SELVANATHAN MUTHAIYAN', '762', 'DA', '010000010018327', 0.00, '0.00', '', '', '', '', ''),
(586, 'F02K', 'S.JAGDISHAN', '763', 'TEMPORARY', '010000010019799', 0.00, '0.00', '', '', '', '', ''),
(587, 'F03', 'ANTHONY SWAMY', '765', 'TEMPORARY', '010000010018043', 0.00, '0.00', '', '', '', '', ''),
(588, 'F03A', 'S.LOURDUNATHAN', '766', 'PERMANENT', '010000010018342', 0.00, '0.00', '', '', '', '', ''),
(589, 'F03E', 'K.SENTHIL KUMAR', '768', 'PERMANENT', '010000010018026', 0.00, '0.00', '', '', '', '', ''),
(590, 'F03G', 'MATHEW SUSAI', '769', 'PERMANENT', '010000010017698', 174300.00, '0.00', '', '', '', '', ''),
(591, 'F03H', 'AROKIADAS XAVIER', '770', 'PERMANENT', '010000010017755', 300000.00, '0.00', '', '', '', '', ''),
(592, 'F03I', 'DOMINIL ISSAAC SAVIO', '771', 'PERMANENT', '010000010018953', 0.00, '0.00', '', '', '', '', ''),
(593, 'F03J', 'S.MAGIMAINTHAN SOOSAI', '772', 'PERMANENT', '010000010018526', 0.00, '0.00', '', '', '', '', ''),
(594, 'F03L', 'SHOMA MUTHAYAN SUNDARAM', '774', 'PERMANENT', '010000010018701', 0.00, '0.00', '', '', '', '', ''),
(595, 'F03M', 'MOIES CHINNAPPAN', '775', 'PERMANENT', '010000010018982', 0.00, '0.00', '', '', '', '', ''),
(596, 'F03N', 'PANNER SELEVAM', '776', 'PERMANENT', '010000010019282', 5500.00, '0.00', '', '', '', '', ''),
(597, 'F04', 'GOVINDASWAMI NARAYANSWAMI', '777', 'TEMPORARY', '010000010017733', 0.00, '0.00', '', '', '', '', ''),
(598, 'F04A', 'ANTHONY DASS', '778', 'PERMANENT', '010000010017726', 0.00, '0.00', '', '', '', '', ''),
(599, 'F04B', 'GOPI RAMASWAMY', '779', 'PERMANENT', '010000010018984', 173900.00, '0.00', '', '', '', '', ''),
(600, 'F04D', 'JAYARAMAN DURAI SAMY', '781', 'DA', '010000010018562', 0.00, '0.00', '', '', '', '', ''),
(601, 'F04E', 'SELVARAJ CHINNASAMY', '782', 'PERMANENT', '010000010018009', 0.00, '0.00', '', '', '', '', ''),
(602, 'F04F', 'SWAMY ANTHONY SUBIKESH', '783', 'PERMANENT', '010000010017741', 0.00, '0.00', '', '', '', '', ''),
(603, 'F04G', 'A.SUDHAKAR', '784', 'PERMANENT', '010000010018888', 0.00, '0.00', '', '', '', '', ''),
(604, 'F04H', 'I EDWIN NADAR', '785', 'PERMANENT', '010000010018007', 0.00, '0.00', '', '', '', '', ''),
(605, 'F04I', 'SOHEB ALI KHAN', '786', 'PERMANENT', '010000010018656', 0.00, '0.00', '', '', '', '', ''),
(606, 'F04K', 'PRAYAPPAN SAAMI', '788', 'PERMANENT', '010000010018896', 0.00, '0.00', '', '', '', '', ''),
(607, 'F05', 'S. ANTHONY PUSHPAM', '789', 'PERMANENT', '010000010019009', 0.00, '0.00', '', '', '', '', ''),
(608, 'F05B', 'ELUMALAI PICHAI KARAN', '791', 'PERMANENT', '010000010018977', 0.00, '0.00', '', '', '', '', ''),
(609, 'F05C', 'JOSEPH SAWARIMUTHU', '792', 'PERMANENT', '010000010017706', 500000.00, '0.00', '', '', '', '', ''),
(610, 'F05F', 'L.ANTHONY SWAMY', '793', 'PERMANENT', '010000010018344', 0.00, '0.00', '', '', '', '', ''),
(611, 'F05H', 'E. MOIES', '794', 'PERMANENT', '010000010017969', 0.00, '0.00', '', '', '', '', ''),
(612, 'F05I', 'M.PERIYA SWAMY', '795', 'PERMANENT', '010000010018337', 0.00, '0.00', '', '', '', '', ''),
(613, 'F05J', 'KUMAR GANESHAN', '796', 'TEMPORARY', '010000010019625', 0.00, '0.00', '', '', '', '', ''),
(614, 'F05K', 'V. VEENKATSHAN', '797', 'TEMPORARY', '010000010019676', 0.00, '0.00', '', '', '', '', ''),
(615, 'F05M', 'AROKIADASS', '799', 'TEMPORARY', '010000010019715', 0.00, '0.00', '', '', '', '', ''),
(616, 'F05N', 'NARAYAN', '800', '', '', 0.00, '0.00', '', '', '', '', ''),
(617, 'F05O', 'ANAND DURAISWAMI', '801', 'TEMPORARY', '010000010019613', 0.00, '0.00', '', '', '', '', ''),
(618, 'F05P', 'YESURAJ', '802', 'TEMPORARY', '010000010019619', 0.00, '0.00', '', '', '', '', ''),
(619, 'F06', 'DNYANAPRAKASH SUSAI ES', '803', 'PERMANENT', '010000010018782', 5500.00, '0.00', '', '', '', '', ''),
(620, 'F06B', 'AROKIADASS GYANPRAKASH', '805', 'PERMANENT', '010000010017981', 0.00, '0.00', '', '', '', '', ''),
(621, 'F06C', 'V.SIVAKUMAR', '806', 'PERMANENT', '010000010017720', 0.00, '0.00', '', '', '', '', ''),
(622, 'F06F', 'AYYAPPAN ALAGESHAN KAVANDAR', '807', 'PERMANENT', '010000010017897', 0.00, '0.00', '', '', '', '', ''),
(623, 'F06G', 'ANANDKUMAR MAUKA SAKET', '808', 'PERMANENT', '010000010018955', 0.00, '0.00', '', '', '', '', ''),
(624, 'F06I', 'KULANDHAI EASU SIMON', '809', 'PERMANENT', '010000010018303', 0.00, '0.00', '', '', '', '', ''),
(625, 'F06J', 'M. AROKIARAJ', '810', '', '', 0.00, '0.00', '', '', '', '', ''),
(626, 'F06K', 'K MURUGAN', '811', 'PERMANENT', '010000010018617', 0.00, '0.00', '', '', '', '', ''),
(627, 'F06L', 'KUMAR THANGAVEL KAVANDAR', '812', 'PERMANENT', '010000010017660', 0.00, '0.00', '', '', '', '', ''),
(628, 'F06M', 'R.ARUMUGAM', '813', 'PERMANENT', '010000010018887', 500000.00, '0.00', '', '', '', '', ''),
(629, 'F06N', 'MESIYAS THANISLAS', '814', 'DA', '010000010018716', 0.00, '0.00', '', '', '', '', ''),
(630, 'F07', 'PICHYAMANI CHINUKAN', '815', 'PERMANENT', '010000010017656', 0.00, '0.00', '', '', '', '', ''),
(631, 'F07A', 'RAVICHANDARAN MURIYAN', '816', 'PERMANENT', '010000010017745', 0.00, '0.00', '', '', '', '', ''),
(632, 'F07B', 'RAM LINGAM RAJU', '817', 'PERMANENT', '010000010017659', 0.00, '0.00', '', '', '', '', ''),
(633, 'F07C', 'SUBRAMANI RATINAM', '818', 'PERMANENT', '010000010017731', 0.00, '0.00', '', '', '', '', ''),
(634, 'F07E', 'POONGAN SADIYAN', '819', 'TEMPORARY', '010000010018609', 0.00, '0.00', '', '', '', '', ''),
(635, 'F07F', 'N.MUNUSWAMY', '820', 'PERMANENT', '010000010019062', 0.00, '0.00', '', '', '', '', ''),
(636, 'F07G', 'ABDUL MUTHALIF', '821', 'TEMPORARY', '010000010017671', 0.00, '0.00', '', '', '', '', ''),
(637, 'F07H', 'MANILAL SHANKAR CHAUDHARY', '822', 'PERMANENT', '010000010017730', 0.00, '0.00', '', '', '', '', ''),
(638, 'F07I', 'VENKATESH DURAISAMI', '823', 'TEMPORARY', '010000010019724', 0.00, '0.00', '', '', '', '', ''),
(639, 'F07K', 'D. VENKETESH', '824', 'TEMPORARY', '010000010019724', 0.00, '0.00', '', '', '', '', ''),
(640, 'F08', 'K. MAYAVAN', '825', 'PERMANENT', '010000010017754', 0.00, '0.00', '', '', '', '', ''),
(641, 'F08A', 'KAMALAKANNAN  ARUMUGAM', '826', 'PERMANENT', '010000010018015', 0.00, '0.00', '', '', '', '', ''),
(642, 'F08B', 'MUNUSWAMY VARDHAN NAVAN', '827', 'PERMANENT', '010000010017758', 0.00, '0.00', '', '', '', '', ''),
(643, 'F08C', 'K.KALAIARASAN', '828', 'PERMANENT', '010000010017841', 0.00, '0.00', '', '', '', '', ''),
(644, 'F08D', 'KUPAPUSWAMI SINARAJ', '829', 'PERMANENT', '010000010018640', 0.00, '0.00', '', '', '', '', ''),
(645, 'F08E', 'S. RAJA SEGENI', '830', 'PERMANENT', '010000010017657', 0.00, '0.00', '', '', '', '', ''),
(646, 'F08F', 'G. SELVARAJ', '831', 'PERMANENT', '010000010017747', 0.00, '0.00', '', '', '', '', ''),
(647, 'F08G', 'S. RAMDASS SAMUEL', '832', 'PERMANENT', '010000010018894', 0.00, '0.00', '', '', '', '', ''),
(648, 'F08H', 'R. RAMESH', '833', 'PERMANENT', '010000010017819', 0.00, '0.00', '', '', '', '', ''),
(649, 'F08I', 'VEERAMANI KALIYAN', '834', 'DA', '010000010018714', 0.00, '0.00', '', '', '', '', ''),
(650, 'F08M', 'PALANISWAMY TANGAVEL', '835', 'PERMANENT', '010000010018062', 0.00, '0.00', '', '', '', '', ''),
(651, 'F09', 'POPAT ABASO NALAWADE', '836', 'PERMANENT', '010000010017709', 0.00, '0.00', '', '', '', '', ''),
(652, 'F09A', 'VINOD CHIKANE', '837', 'PERMANENT', '010000010017592', 0.00, '0.00', '', '', '', '', ''),
(653, 'F09C', 'SHIVPRAKASH SHIVDHARI SINGH', '839', 'PERMANENT', '010000010017710', 0.00, '0.00', '', '', '', '', ''),
(654, 'F09D', 'RUPESH  GORULE', '840', 'PERMANENT', '010000010018672', 0.00, '0.00', '', '', '', '', ''),
(655, 'F09E', 'UBASH JAGADHARI YADAV', '841', 'PERMANENT', '010000010018702', 0.00, '0.00', '', '', '', '', ''),
(656, 'F09F', 'ABDUL RAHIM MALEK', '842', 'DA', '026000010011726', 0.00, '0.00', '', '', '', '', ''),
(657, 'F09G', 'LAXMAN SRIMANT GHERDE', '843', 'PERMANENT', '010000010018349', 0.00, '0.00', '', '', '', '', ''),
(658, 'F09K', 'VIJAY KUMAR VERMA', '845', 'PERMANENT', '010000010019019', 0.00, '0.00', '', '', '', '', ''),
(659, 'F10', 'MOHAMMAD JAMALUDDIN', '846', 'PERMANENT', '010000010017611', 0.00, '0.00', '', '', '', '', ''),
(660, 'F10A', 'MOHIDDIN SA', '847', 'TEMPORARY', '010000010017717', 0.00, '0.00', '', '', '', '', ''),
(661, 'F10B', 'THOMAS RAJRNDRAN', '848', 'PERMANENT', '010000010018350', 0.00, '0.00', '', '', '', '', ''),
(662, 'F10D', 'NAGAPILLAN NAVAN', '849', 'PERMANENT', '010000010017690', 0.00, '0.00', '', '', '', '', ''),
(663, 'F10E', 'S.JAYARAJ SAPASHTEEN', '850', 'PERMANENT', '010000010018343', 500000.00, '0.00', '', '', '', '', ''),
(664, 'F10F', 'BHAGYARAJ RATNANAM', '851', 'PERMANENT', '010000010019020', 0.00, '0.00', '', '', '', '', ''),
(665, 'F10G', 'SHANKAR KALIYAN', '852', 'PERMANENT', '010000010019018', 5500.00, '0.00', '', '', '', '', ''),
(666, 'F10H', 'RAMRAJ NAGAPPA', '853', 'PERMANENT', '010000010019884', 0.00, '0.00', '', '', '', '', ''),
(667, 'F10I', 'RAMALINGAM', '854', 'PERMANENT', '010000010018904', 73000.00, '0.00', '', '', '', '', ''),
(668, 'F10J', 'VIRMANI AMMAVASI', '855', 'DA', '010000010017742', 0.00, '0.00', '', '', '', '', ''),
(669, 'F10K', 'SHAIKH MOHAMEO', '856', 'PERMANENT', '010000010017718', 0.00, '0.00', '', '', '', '', ''),
(670, 'F10L', 'SELVAKUMAR KANAGASABAI', '857', 'PERMANENT', '010000010019041', 0.00, '0.00', '', '', '', '', ''),
(671, 'F10M', 'DILDAR ABDUL HAMID FAKI', '858', 'DA', '010000010018168', 0.00, '0.00', '', '', '', '', ''),
(672, 'F10N', 'ARUL DEVASAGYAM', '859', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(673, 'F11', 'NAVNITHAN', '860', 'TEMPORARY', '000000000000000', 100000.00, '0.00', '', '', '', '', ''),
(674, 'F11A', 'MUTTAYYA KURUSWAMI YADAV', '861', 'DA', '010000010018764', 0.00, '0.00', '', '', '', '', ''),
(675, 'F11B', 'HARIBALAKRISHNAN NADAR', '862', 'TEMPORARY', '010000010018690', 0.00, '0.00', '', '', '', '', ''),
(676, 'F11D', 'KANIDURAI THIRAVIYAM NADAR', '863', 'DA', '010000010018752', 50000.00, '0.00', '', '', '', '', ''),
(677, 'F11E', 'REJAVEL RANGA SWAMY', '864', 'TEMPORARY', '010000010018519', 100000.00, '0.00', '', '', '', '', ''),
(678, 'F11F', 'FRANNSIS ANTHONY SWAMY', '865', 'DA', '010000010018585', 0.00, '0.00', '', '', '', '', ''),
(679, 'F11G', 'FRANNSIS ANTHONI SWAMI', '866', 'DA', '010000010018585', 50000.00, '0.00', '', '', '', '', ''),
(680, 'F11H', 'GOVERNOR ANNAMALAI HARIJAN', '867', 'DA', '010000010018529', 0.00, '0.00', '', '', '', '', ''),
(681, 'F11I', 'S.IYAPPAN', '868', 'TEMPORARY', '010000010019879', 0.00, '0.00', '', '', '', '', ''),
(682, 'F11K', 'ANTHONY AROKKIYA S MAGIMAIRAJ', '869', 'TEMPORARY', '010000010019878', 0.00, '0.00', '', '', '', '', ''),
(683, 'F11L', 'K.FRANCES', '870', 'TEMPORARY', '010000010019761', 0.00, '0.00', '', '', '', '', ''),
(684, 'F11M', 'A.PARAMSHIVAM', '871', 'TEMPORARY', '010000010019760', 0.00, '0.00', '', '', '', '', ''),
(685, 'F11O', 'R. SHANKAR', '872', 'TEMPORARY', '010000010019649', 0.00, '0.00', '', '', '', '', ''),
(686, 'F12', 'K.ANANDAN', '873', 'DA', '010000010018848', 0.00, '0.00', '', '', '', '', ''),
(687, 'F12A', 'SELVARAJ ARUNDUDIYAR', '874', 'DA', '010000010018518', 0.00, '0.00', '', '', '', '', ''),
(688, 'F12B', 'K.GANESHAN', '875', 'DA', '010000010018891', 0.00, '0.00', '', '', '', '', ''),
(689, 'F12C', 'PARSURAMAN GOVINDSWAMY', '876', 'DA', '010000010018838', 0.00, '0.00', '', '', '', '', ''),
(690, 'F12G', 'AMBUROSE', '879', 'DA', '010000010018839', 0.00, '0.00', '', '', '', '', ''),
(691, 'F12H', 'RAMLINGAM VIRASHASTRI', '880', 'DA', '010000010018531', 0.00, '0.00', '', '', '', '', ''),
(692, 'F12I', 'MAGIMAIRAJ DEVASTHUTHYNATHAN', '881', 'DA', '010000010018536', 0.00, '0.00', '', '', '', '', ''),
(693, 'F12J', 'DONBOSCO', '882', 'DA', '010000010018847', 0.00, '0.00', '', '', '', '', ''),
(694, 'F12K', 'DEVDAS', '883', 'DA', '010000010018855', 0.00, '0.00', '', '', '', '', ''),
(695, 'F12N', 'ARUL ANTHONY SELVAM', '884', 'TEMPORARY', '010000010019839', 0.00, '0.00', '', '', '', '', ''),
(696, 'FM01', 'LIYAKAT MUKADAM', '892', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(697, 'FM02', 'BADE MUKADAM', '893', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(698, 'FM03', 'BAJBALKAR MUKADAM (RAJARAM)', '894', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(699, 'FM04', 'PARMESHWAR BORDE MUKADAM', '895', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(700, 'FM05', 'JUGNU MUKADAM', '896', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(701, 'FM06', 'TAYMUR KANAN MUKADAM', '897', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(702, 'FM07', 'AKHILESH MUKADAM', '898', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(703, 'FM08', 'ANKUSH ALDAR', '899', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(704, 'FM09', 'JYOTI MUKADAM', '900', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(705, 'FM10', 'PUNIT MUKADAM', '901', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(706, 'FM11', 'MEHBOOD MUKADUM', '902', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(707, 'FM12', 'ARIF MUKADAM', '903', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(708, 'FM13', 'RAMDHIN MUKADAM', '904', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(709, 'FM14', 'ASHOK MUKADAM', '905', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(710, 'FM15', 'SATYANARAYAN MUKADAM', '906', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(711, 'FM16', 'BARKAT MUKADAM', '907', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(712, 'FM17', 'BADRUDHIN MUKADAM', '908', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(713, 'FM18', 'RAMBALAK MUKADAM', '909', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(714, 'FM19', 'EDAL MUKADAM', '910', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(715, 'FM20', 'BANSHI MUKADAM', '911', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(716, 'FM21', 'UDYARAJ MUKADAM', '912', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(717, 'FM22', 'MANIRUL MUKADAM', '913', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(718, 'FM23', 'MEDKARI MAKDAM', '914', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(719, 'FM24', 'NAMDEV MUKADAM', '915', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(720, 'FM25', 'NISARKHAN MUK', '916', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(721, 'FM26', 'MOKAL MUKADAM', '917', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(722, 'FM27', 'PURAN MUKADAM', '918', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(723, 'FM28', 'SHYAM MUKADAM', '919', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(724, 'FM29', 'S.S TRADER', '920', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(725, 'FM30', 'PRABHAKAR MUKADAM', '921', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(726, 'FM31', 'VISHWAJIT GANG', '922', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(727, 'FM32', 'AKTARUL MUKADAM', '923', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(728, 'FM33', 'MAHADEV MUKADAM', '924', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(729, 'FM34', 'SALIM MUKADAM', '925', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(730, 'FM35', 'RSULA SHIKH', '926', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(731, 'FM36', 'NASHRUL MUKADAM', '927', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(732, 'FM37', 'SOMNATH MUKADAM', '928', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(733, 'FM38', 'SHANKAR MUKADAM', '929', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(734, 'FM39', 'ASHRAF MUKADAM', '930', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(735, 'FM40', 'MAHESH PASWAN', '931', 'TEMPORARY', '010000010019651', 5500.00, '0.00', '', '', '', '', ''),
(736, 'FM41', 'BADRUDDHIN MUKADAM', '932', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(737, 'FM42', 'SUMAN KUMAR', '933', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(738, 'FM43', 'BHARAT MUKADAM', '934', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(739, 'FM44', 'SUJIT MUKADAM', '935', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(740, 'FM45', 'EMTIYAJ MUKADAM', '936', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(741, 'FM46', 'KARIM MUKADAM', '937', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(742, 'FM47', 'SHAFIQ MUKADAM', '938', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(743, 'MS1A', 'DINESH BINDESHWARI MUKHIYA', '944', 'TEMPORARY', '010000010018314', 5500.00, '0.00', '', '', '', '', ''),
(744, 'MS1B', 'LALAN RAMUDAY MUKHIYA', '945', 'TEMPORARY', '010000010018703', 5500.00, '0.00', '', '', '', '', ''),
(745, 'MS1C', 'VIJAY ISHWAR MUKHIYA', '946', 'TEMPORARY', '010000010019647', 5500.00, '0.00', '', '', '', '', ''),
(746, 'MS1D', 'VIJAY  BHOILAL MUKHIYA', '947', 'TEMPORARY', '010000010018854', 0.00, '0.00', '', '', '', '', ''),
(747, 'MS1E', 'KAMLESHWAR VIESHWARI MUKHIYA', '948', 'TEMPORARY', '010000010018209', 5500.00, '0.00', '', '', '', '', ''),
(748, 'MS1F', 'SATYADEO NUNOO MUKHIYA', '949', 'TEMPORARY', '010000010019616', 0.00, '0.00', '', '', '', '', ''),
(749, 'MS1H', 'RAMBABU RAMDEO ROY', '951', 'TEMPORARY', '010000010018357', 0.00, '0.00', '', '', '', '', ''),
(750, 'MS1I', 'RAJKISHOR RAMDEO ROY', '952', 'TEMPORARY', '010000010019648', 5500.00, '0.00', '', '', '', '', ''),
(751, 'MS1K', 'SUNIL MAHAVEER MUKHIYA', '954', 'TEMPORARY', '010000010019600', 5500.00, '0.00', '', '', '', '', ''),
(752, 'MS1L', 'SHAYAM MUKHIYA', '955', 'TEMPORARY', '010000010019631', 5500.00, '0.00', '', '', '', '', ''),
(753, 'MS2A', 'VASANT RAJKUMAR MUKHIYA', '956', 'TEMPORARY', '010000010018837', 5500.00, '0.00', '', '', '', '', ''),
(754, 'MS2B', 'KEDAR YOGENDRA MUKHIYA', '957', 'TEMPORARY', '010000010019772', 5500.00, '0.00', '', '', '', '', ''),
(755, 'MS2C', 'SAGAR BANARSI MUKHIYA', '958', 'TEMPORARY', '010000010018282', 0.00, '0.00', '', '', '', '', ''),
(756, 'MS2E', 'SANJAY JAGADISH MUKHIYA', '960', 'TEMPORARY', '010000010018333', 5500.00, '0.00', '', '', '', '', ''),
(757, 'MS2G', 'MUKESH RAMDEO MUKHIYA', '962', 'TEMPORARY', '010000010019485', 5500.00, '0.00', '', '', '', '', ''),
(758, 'MS2H', 'PANKAJ RAM MUKHIYA', '963', 'TEMPORARY', '010000010019661', 5500.00, '0.00', '', '', '', '', ''),
(759, 'MS2I', 'AMRUT MAKESHWARI MUKHIYA', '964', 'TEMPORARY', '010000010019484', 5500.00, '0.00', '', '', '', '', ''),
(760, 'MS2J', 'DHANESHWAR BINDESHWARI MUKHIYA', '965', 'TEMPORARY', '010000010018280', 5500.00, '0.00', '', '', '', '', ''),
(761, 'MS3A', 'SANJAY SUKHADEO SINGH', '967', 'TEMPORARY', '010000010018216', 5500.00, '0.00', '', '', '', '', ''),
(762, 'MS3B', 'SAHENDAR CHHATHU SINGH', '968', 'TEMPORARY', '010000010019775', 0.00, '0.00', '', '', '', '', ''),
(763, 'MS3C', 'MAHENDRA CHHATHU SINGH', '969', 'TEMPORARY', '010000010019771', 5500.00, '0.00', '', '', '', '', ''),
(764, 'MS3D', 'SARWANKUMAR SHREEMADAN SINGH', '970', 'TEMPORARY', '010000010019762', 5500.00, '0.00', '', '', '', '', ''),
(765, 'MS3E', 'DABLU  SHIVPRASAD PASWAN', '971', 'TEMPORARY', '010000010019679', 5500.00, '0.00', '', '', '', '', ''),
(766, 'MS3G', 'KAPIL RANANAND SINGH', '973', 'TEMPORARY', '010000010018857', 5500.00, '0.00', '', '', '', '', ''),
(767, 'MS3H', 'SANDEEP ANANDEE SINGH', '974', 'TEMPORARY', '010000010018705', 5500.00, '0.00', '', '', '', '', ''),
(768, 'MS3J', 'VINAY SUKHADEO SINGH', '976', 'TEMPORARY', '010000010019622', 5500.00, '0.00', '', '', '', '', ''),
(769, 'MS3K', 'MANOJ WASIDEO SINGH', '977', 'TEMPORARY', '010000010018842', 5500.00, '0.00', '', '', '', '', ''),
(770, 'MS3L', 'RAVI DEVENDRA SINGH', '978', 'TEMPORARY', '010000010019568', 0.00, '0.00', '', '', '', '', ''),
(771, 'MS3M', 'PARSHURAM', '979', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(772, 'MS3N', 'RANJAN SHIVPRASAD PASWAN', '980', 'TEMPORARY', '010000010019527', 5500.00, '0.00', '', '', '', '', ''),
(773, 'MS3O', 'RAVINDRA PASWAN', '981', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(774, 'MS4A', 'RAMBALAK BIKU MUKHIYA', '982', 'TEMPORARY', '010000010018205', 5500.00, '0.00', '', '', '', '', ''),
(775, 'MS4B', 'RAJIV YOGESHWAR MUKHIYA', '983', 'TEMPORARY', '010000010018332', 5500.00, '0.00', '', '', '', '', ''),
(776, 'MS4C', 'PAPPU TRIVENI MUKHIYA', '984', 'TEMPORARY', '010000010018335', 5500.00, '0.00', '', '', '', '', ''),
(777, 'MS4D', 'JITENDRA VIKU MUKHIYA', '985', 'TEMPORARY', '010000010018331', 5500.00, '0.00', '', '', '', '', ''),
(778, 'MS4E', 'SURENDRA BIKU MUKHIYA', '986', 'TEMPORARY', '010000010018334', 5500.00, '0.00', '', '', '', '', ''),
(779, 'MS4F', 'RAJESH SONU MUKHIYA', '987', 'TEMPORARY', '010000010018347', 5500.00, '0.00', '', '', '', '', ''),
(780, 'MS4G', 'SIKANDAR YOGENDAR MUKHIYA', '988', 'TEMPORARY', '010000010019598', 5500.00, '0.00', '', '', '', '', ''),
(781, 'MS4H', 'SAHDEV MUKHIYA', '989', 'TEMPORARY', '010000010019645', 5500.00, '0.00', '', '', '', '', ''),
(782, 'MS4I', 'VISHNUDEV MUKHIYA', '990', 'TEMPORARY', '010000010019780', 0.00, '0.00', '', '', '', '', ''),
(783, 'MS4J', 'PARSHURAM SINGH', '991', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(784, 'MS4K', 'SARWAN KUMAR', '992', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(785, 'MS4L', 'SUNIL LALTESHWAR MUKHIYA', '993', 'TEMPORARY', '010000010019042', 5500.00, '0.00', '', '', '', '', ''),
(786, 'MS4M', 'RAJA PARMANAND MUKHIYA', '994', 'TEMPORARY', '010000010019044', 5500.00, '0.00', '', '', '', '', ''),
(787, 'MS4N', 'RAVINDRA BHAVIKSHAN MUKHIYA', '995', 'TEMPORARY', '010000010019046', 5500.00, '0.00', '', '', '', '', ''),
(788, 'MS5A', 'RAMSAGAR BAHOR MUKHIYA', '996', 'TEMPORARY', '010000010018281', 5500.00, '0.00', '', '', '', '', ''),
(789, 'MS5B', 'SONU PANDAY', '997', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(790, 'MS5C', 'RANVEER SIYASARAN YADAV', '998', 'TEMPORARY', '010000010018704', 5500.00, '0.00', '', '', '', '', ''),
(791, 'MS5D', 'MEVALAL MAHAVEER YADAV', '999', 'TEMPORARY', '010000010019045', 5500.00, '0.00', '', '', '', '', ''),
(792, 'MS5E', 'VIJAY BALESHWAR MUKHIYA', '1000', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(793, 'MS5F', 'RAJU PASWAN', '1001', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(794, 'MS5G', 'ARUN RAMDEV ROY', '1002', 'TEMPORARY', '000000000000000', 0.00, '0.00', '', '', '', '', ''),
(795, 'MS5I', 'NOOR MOHAMADJANUDDEEN SHAIKH', '1004', 'TEMPORARY', '010000010018211', 5500.00, '0.00', '', '', '', '', ''),
(796, 'MS5K', 'BINDUSHWAR', '1006', 'TEMPORARY', '010000010019814', 0.00, '0.00', '', '', '', '', ''),
(797, 'MS5L', 'AAJAY SINGH', '1007', 'TEMPORARY', '010000010019697', 0.00, '0.00', '', '', '', '', ''),
(798, 'MS5M', 'BANCHAN SINGH', '1008', 'TEMPORARY', '010000010019815', 0.00, '0.00', '', '', '', '', ''),
(799, 'MS5N', 'ARUNDAS', '1009', 'TEMPORARY', '010000010019540', 5500.00, '0.00', '', '', '', '', ''),
(800, 'SKE', 'SHREE KRISHNA ENTERPRISE', '1023', 'M', '000000000000000', 0.00, '0.00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `lp_labour_rm`
--

DROP TABLE IF EXISTS `lp_labour_rm`;
CREATE TABLE IF NOT EXISTS `lp_labour_rm` (
  `clrm_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `clrm_code` varchar(4) DEFAULT NULL,
  `clrm_desc` varchar(40) DEFAULT NULL,
  `clrm_rate` double(10,2) DEFAULT NULL,
  PRIMARY KEY (`clrm_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `lp_labour_rm`
--

INSERT INTO `lp_labour_rm` (`clrm_tabreckey`, `sys_co_code`, `clrm_code`, `clrm_desc`, `clrm_rate`) VALUES
(1, 'AJAY', '01', 'LO.AND FILLER{PL}', 188.00),
(2, 'AJAY', '02', 'MAHA.MUKADAM P/L LAB', 198.00),
(3, 'AJAY', '03', 'BCM.N/P LAB(11APR13)', 200.00),
(4, 'AJAY', '04', 'LO.AND FILLER N/P LA', 188.00),
(5, 'AJAY', '05', 'OTHER MUKADAM', 200.00),
(6, 'AJAY', '06', 'FI.A/I (MUKADAM LAB)', 175.00),
(7, NULL, '    ', 'NIL', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `lp_pay_m`
--

DROP TABLE IF EXISTS `lp_pay_m`;
CREATE TABLE IF NOT EXISTS `lp_pay_m` (
  `gm_tabreckeyPrimary` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) NOT NULL,
  `py_year_mm` int(6) NOT NULL,
  `py_badge_no` int(4) NOT NULL,
  `py_gang_code` varchar(4) NOT NULL,
  `category` varchar(20) NOT NULL,
  `account_number` varchar(20) DEFAULT NULL,
  `basic` double(10,2) NOT NULL,
  `da` double(10,2) DEFAULT NULL COMMENT '(basic *  64.47) / 100',
  `hra` double(10,2) DEFAULT NULL COMMENT '(basic+da) * 0.03',
  `pf` double(12,4) DEFAULT NULL COMMENT '(basic+da) * 0.12',
  `ptax` double(10,2) DEFAULT NULL COMMENT 'monthly :0 if (basic+da) <750,200 if bbasic+da > 1000 else175 ',
  `advance` double(10,2) DEFAULT NULL,
  `esic_e` double(10,2) DEFAULT NULL COMMENT 'monthly : (basic+da+hra) * 1.75',
  `esic_o` double(10,2) DEFAULT NULL COMMENT 'monthly:  (basic+da+hra) * 4.75',
  `no_of_days` int(2) NOT NULL,
  `net_salary` double(10,2) NOT NULL,
  PRIMARY KEY (`gm_tabreckeyPrimary`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=76 ;

--
-- Dumping data for table `lp_pay_m`
--

INSERT INTO `lp_pay_m` (`gm_tabreckeyPrimary`, `sys_co_code`, `py_year_mm`, `py_badge_no`, `py_gang_code`, `category`, `account_number`, `basic`, `da`, `hra`, `pf`, `ptax`, `advance`, `esic_e`, `esic_o`, `no_of_days`, `net_salary`) VALUES
(1, '01', 201706, 1, '001', 'PERMANENT', '010000010018192', 882.59, 569.01, 43.55, 174.1915, 0.00, 0.00, 26.17, 71.02, 4, 1294.79),
(2, '01', 201706, 2, '001A', 'PERMANENT', '010000010017746', 1000.59, 645.08, 49.37, 197.4804, 0.00, 0.00, 29.66, 80.51, 5, 1467.90),
(3, '01', 201706, 3, '001B', 'PERMANENT', '010000010017650', 879.57, 567.06, 43.40, 173.5955, 0.00, 0.00, 26.08, 70.78, 4, 1290.35),
(4, '01', 201706, 4, '001C', 'PERMANENT', '010000010017597', 879.57, 567.06, 43.40, 173.5955, 0.00, 0.00, 26.08, 70.78, 4, 1290.35),
(5, '01', 201706, 5, '001D', 'PERMANENT', '010000010017567', 410.45, 264.62, 20.25, 81.0081, 0.00, 0.00, 12.17, 33.03, 2, 602.14),
(6, '01', 201708, 6, '001E', 'PERMANENT', '010000010019043', 258.00, 166.33, 12.73, 50.9199, 0.00, 0.00, 7.65, 20.76, 1, 378.49),
(7, '01', 201708, 7, '001F', 'PERMANENT', '010000010018358', 258.00, 166.33, 12.73, 50.9199, 0.00, 0.00, 7.65, 20.76, 1, 378.49),
(8, '01', 201708, 8, '001G', 'PERMANENT', '010000010018257', 258.00, 166.33, 12.73, 50.9199, 0.00, 0.00, 7.65, 20.76, 1, 378.49),
(9, '01', 201708, 38, '004', 'PERMANENT', '010000010018396', 317.59, 204.75, 15.67, 62.6808, 0.00, 0.00, 9.42, 25.56, 2, 465.91),
(10, '01', 201708, 39, '004A', 'PERMANENT', '010000010017760', 317.59, 204.75, 15.67, 62.6808, 0.00, 0.00, 9.42, 25.56, 2, 465.91),
(11, '01', 201708, 40, '004B', 'PERMANENT', '010000010017672', 259.01, 166.98, 12.78, 51.1192, 0.00, 0.00, 7.68, 20.84, 1, 379.97),
(12, '01', 201708, 41, '004C', 'PERMANENT', '010000010018149', 317.59, 204.75, 15.67, 62.6808, 0.00, 0.00, 9.42, 25.56, 2, 465.91),
(13, '01', 201708, 42, '004D', 'PERMANENT', '010000010018013', 259.01, 166.98, 12.78, 51.1192, 0.00, 0.00, 7.68, 20.84, 1, 379.97),
(14, '01', 201708, 43, '004E', 'PERMANENT', '010000010100111', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(15, '01', 201708, 48, '004J', 'DA', '010000010018781', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(16, '01', 201708, 49, '004K', 'DA', '010000010018846', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(17, '01', 201708, 50, '004L', 'DA', '010000010018804', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(18, '01', 201708, 63, '006', 'PERMANENT', '010000010017684', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(19, '01', 201708, 79, '007B', 'PERMANENT', '010000010017662', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(20, '01', 201708, 80, '007C', 'PERMANENT', '010000010018271', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(21, '01', 201708, 82, '007E', 'PERMANENT', '010000010017669', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(22, '01', 201708, 83, '007F', 'PERMANENT', '010000010017575', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(23, '01', 201708, 84, '007G', 'PERMANENT', '010000010018441', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(24, '01', 201708, 91, '008B', 'PERMANENT', '010000010018249', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(25, '01', 201708, 93, '008D', 'PERMANENT', '010000010017663', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(26, '01', 201708, 95, '008F', 'PERMANENT', '010000010018262', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(27, '01', 201708, 96, '008G', 'PERMANENT', '010000010017568', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(28, '01', 201708, 98, '008I', 'PERMANENT', '010000010017621', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(29, '01', 201708, 115, '010A', 'PERMANENT', '010000010018032', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(30, '01', 201708, 141, '012A', 'PERMANENT', '010000010017586', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(31, '01', 201708, 143, '012C', 'PERMANENT', '010000010018025', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(32, '01', 201708, 144, '012D', 'PERMANENT', '010000010018266', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(33, '01', 201708, 145, '012E', 'PERMANENT', '010000010018265', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(34, '01', 201708, 147, '012G', 'PERMANENT', '010000010018254', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(35, '01', 201708, 148, '012H', 'PERMANENT', '010000010018328', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(36, '01', 201708, 151, '012K', 'DA', '010000010018873', 139.95, 90.23, 6.91, 27.6211, 0.00, 0.00, 4.15, 11.26, 1, 205.32),
(37, '01', 201708, 190, '016', 'PERMANENT', '010000010018014', 139.95, 90.23, 6.91, 27.6211, 0.00, 0.00, 4.15, 11.26, 1, 205.32),
(38, '01', 201708, 195, '016E', 'PERMANENT', '010000010017625', 111.63, 71.97, 5.51, 22.0317, 0.00, 0.00, 3.31, 8.98, 1, 163.77),
(39, '01', 201708, 198, '016H', 'PERMANENT', '010000010018569', 111.63, 71.97, 5.51, 22.0317, 0.00, 0.00, 3.31, 8.98, 1, 163.77),
(40, '01', 201708, 203, '017B', 'PERMANENT', '010000010018243', 106.72, 68.80, 5.27, 21.0627, 0.00, 0.00, 3.16, 8.59, 1, 156.57),
(41, '01', 201708, 215, '018A', 'PERMANENT', '010000010017649', 111.63, 71.97, 5.51, 22.0317, 0.00, 0.00, 3.31, 8.98, 1, 163.77),
(42, '01', 201708, 263, '021K', 'DA', '010000010018545', 111.63, 71.97, 5.51, 22.0317, 0.00, 0.00, 3.31, 8.98, 1, 163.77),
(43, '01', 201708, 339, '028A', 'PERMANENT', '010000010017641', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(44, '01', 201708, 380, '031I', 'PERMANENT', '010000010018682', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(45, '01', 201708, 452, '037', 'PERMANENT', '010000010018451', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(46, '01', 201708, 453, '037A', 'PERMANENT', '010000010017979', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(47, '01', 201708, 455, '037C', 'PERMANENT', '010000010018329', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(48, '01', 201708, 456, '037D', 'PERMANENT', '010000010018453', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(49, '01', 201708, 459, '037G', 'PERMANENT', '010000010017978', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(50, '01', 201708, 464, '038', 'PERMANENT', '010000010018423', 68.35, 44.07, 3.37, 13.4898, 0.00, 0.00, 2.03, 5.50, 1, 100.27),
(51, '01', 201708, 465, '038A', 'PERMANENT', '010000010018284', 68.35, 44.07, 3.37, 13.4898, 0.00, 0.00, 2.03, 5.50, 1, 100.27),
(52, '01', 201708, 467, '038C', 'PERMANENT', '010000010013045', 68.35, 44.07, 3.37, 13.4898, 0.00, 0.00, 2.03, 5.50, 1, 100.27),
(53, '01', 201708, 471, '038G', 'PERMANENT', '010000010018648', 68.35, 44.07, 3.37, 13.4898, 0.00, 0.00, 2.03, 5.50, 1, 100.27),
(54, '01', 201708, 472, '038H', 'PERMANENT', '010000010019596', 68.35, 44.07, 3.37, 13.4898, 0.00, 0.00, 2.03, 5.50, 1, 100.27),
(55, '01', 201708, 473, '038I', 'PERMANENT', '010000010017688', 111.63, 71.97, 5.51, 22.0317, 0.00, 0.00, 3.31, 8.98, 1, 163.77),
(56, '01', 201708, 493, '040A', 'PERMANENT', '010000010018454', 73.00, 47.06, 3.60, 14.4076, 0.00, 0.00, 2.16, 5.87, 1, 107.09),
(57, '01', 201708, 495, '040C', 'PERMANENT', '010000010018309', 73.00, 47.06, 3.60, 14.4076, 0.00, 0.00, 2.16, 5.87, 1, 107.09),
(58, '01', 201708, 497, '040E', 'PERMANENT', '010000010018250', 73.00, 47.06, 3.60, 14.4076, 0.00, 0.00, 2.16, 5.87, 1, 107.09),
(59, '01', 201708, 498, '040F', 'PERMANENT', '010000010019079', 73.00, 47.06, 3.60, 14.4076, 0.00, 0.00, 2.16, 5.87, 1, 107.09),
(60, '01', 201708, 533, '043C', 'PERMANENT', '010000010018256', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(61, '01', 201708, 535, '043F', 'PERMANENT', '010000010018010', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(62, '01', 201708, 538, '043I', 'PERMANENT', '010000010018392', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(63, '01', 201708, 539, '043J', 'DA', '010000010018723', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(64, '01', 201708, 540, '043K', 'DA', '010000010016655', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(65, '01', 201708, 543, '044', 'PERMANENT', '010000010018274', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(66, '01', 201708, 544, '044A', 'PERMANENT', '010000010018255', 58.58, 37.77, 2.89, 11.5616, 0.00, 0.00, 1.74, 4.71, 1, 85.94),
(67, '01', 201708, 826, 'F08A', 'PERMANENT', '010000010018015', 358.02, 230.82, 17.67, 70.6603, 0.00, 0.00, 10.61, 28.81, 1, 525.24),
(68, '01', 201708, 827, 'F08B', 'PERMANENT', '010000010017758', 358.02, 230.82, 17.67, 70.6603, 0.00, 0.00, 10.61, 28.81, 1, 525.24),
(69, '01', 201708, 828, 'F08C', 'PERMANENT', '010000010017841', 358.02, 230.82, 17.67, 70.6603, 0.00, 0.00, 10.61, 28.81, 1, 525.24),
(70, '01', 201708, 829, 'F08D', 'PERMANENT', '010000010018640', 358.02, 230.82, 17.67, 70.6603, 0.00, 0.00, 10.61, 28.81, 1, 525.24),
(71, '02', 201707, 1, '001', 'PERMANENT', '010000010018192', 7397.00, 4768.85, 364.98, 1459.9015, 200.00, 0.00, 219.29, 595.21, 1, 10651.64),
(72, '02', 201707, 2, '001A', 'PERMANENT', '010000010017746', 7397.00, 4768.85, 364.98, 1459.9015, 200.00, 0.00, 219.29, 595.21, 1, 10651.64),
(73, '02', 201707, 3, '001B', 'PERMANENT', '010000010017650', 7397.00, 4768.85, 364.98, 1459.9015, 200.00, 0.00, 219.29, 595.21, 1, 10651.64),
(74, '02', 201707, 4, '001C', 'PERMANENT', '010000010017597', 7397.00, 4768.85, 364.98, 1459.9015, 200.00, 0.00, 219.29, 595.21, 1, 10651.64),
(75, '02', 201707, 5, '001D', 'PERMANENT', '010000010017567', 7397.00, 4768.85, 364.98, 1459.9015, 200.00, 0.00, 219.29, 595.21, 1, 10651.64);

-- --------------------------------------------------------

--
-- Table structure for table `lp_vessel_m`
--

DROP TABLE IF EXISTS `lp_vessel_m`;
CREATE TABLE IF NOT EXISTS `lp_vessel_m` (
  `vm_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `vm_code` varchar(4) DEFAULT NULL,
  `vm_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`vm_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `lp_vessel_m`
--

INSERT INTO `lp_vessel_m` (`vm_tabreckey`, `sys_co_code`, `vm_code`, `vm_name`) VALUES
(1, 'AJAY', 'GP', 'GURUPRASAD'),
(2, 'AJAY', 'K', 'KIBALI'),
(3, 'AJAY', 'MO', 'MODESTY'),
(4, 'AJAY', 'NA', 'NANDAPARNA'),
(5, 'AJAY', 'ST', 'STAR AQURIOUS'),
(6, 'AJAY', 'ZA', 'ZEALAND AMSTERDAM'),
(7, 'AJAY', 'PY', 'PRIYANKA'),
(8, 'AJAY', 'DE', 'DENSA JAGUAR'),
(9, 'AJAY', 'AK ', 'AKILI'),
(10, 'AJAY', 'AK', 'AKILI');

-- --------------------------------------------------------

--
-- Table structure for table `lp_work_tm`
--

DROP TABLE IF EXISTS `lp_work_tm`;
CREATE TABLE IF NOT EXISTS `lp_work_tm` (
  `wtm_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `wtm_code` varchar(4) DEFAULT NULL,
  `wtm_name` varchar(40) DEFAULT NULL,
  `wtm_rate` double(10,2) DEFAULT NULL,
  PRIMARY KEY (`wtm_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `lp_work_tm`
--

INSERT INTO `lp_work_tm` (`wtm_tabreckey`, `sys_co_code`, `wtm_code`, `wtm_name`, `wtm_rate`) VALUES
(1, 'AJAY', 'B', 'BUNDAL LO.50 kg', 162.74),
(2, 'AJAY', 'B5', 'BUNDAL UNLO.50 KG', 150.00),
(3, 'AJAY', 'BL', 'bundle lo.100 kg', 200.00),
(4, 'AJAY', 'BP', 'BUNDLE PAKING', 15.28),
(5, 'AJAY', 'BU', 'BUNDAL UNLO.100KG', 200.00),
(6, 'AJAY', 'CL', 'CEMENT LOADING', 182.28),
(7, 'AJAY', 'CM', 'TRUCK LOADING CEMENT', 182.28),
(8, 'AJAY', 'CU', 'CEMENT UNLOADING', 161.71),
(9, 'AJAY', 'CW', 'CEMENT UN. WARNI ', 235.20),
(10, 'AJAY', 'FK', 'FILLING KATA', 152.81),
(11, 'AJAY', 'FL', 'FILLING', 162.74),
(12, 'AJAY', 'LD', 'TRUCK LOADING', 162.74),
(13, 'AJAY', 'LL', 'LOOSE LO. P.M.T.', 34.73),
(14, 'AJAY', 'LT ', 'TRUCK LO.THA.(WAGAN)', 207.37),
(15, 'AJAY', 'PL', 'PALTI', 207.37),
(16, 'AJAY', 'PP', 'PALTI PALA', 135.13),
(17, 'AJAY', 'ST', 'STACKING', 148.84),
(18, 'AJAY', 'TT', 'TRUCK THAPI', 87.32),
(19, 'AJAY', 'U', 'UNLOADING LOT', 185.23),
(20, 'AJAY', 'UH', 'UNLOADING H. FILLING', 141.89),
(21, 'AJAY', 'UL', 'TRUCK UNLOADING', 141.89),
(22, 'AJAY', 'UW', 'TRUCK UN. WARNI', 207.37),
(23, 'AJAY', 'W ', 'WARNI', 87.32),
(24, 'AJAY', 'WG', 'UNLOADING (WAGAN)', 271.95),
(25, 'AJAY', 'WR', 'WARFARE', 91.29),
(26, 'AJAY', 'MS', 'MACHIN STITCHING', 35.00),
(27, 'AJAY', 'MM', 'MUKADAM MACHIN', 80.00),
(28, 'AJAY', 'FM', 'FILLING MUKADAM', 150.00),
(29, 'AJAY', 'BM', 'BUNDAL MUKADAM ', 500.00),
(30, 'AJAY', 'SM', 'STACKING MUKADAM', 175.00);

-- --------------------------------------------------------

--
-- Table structure for table `prog_file`
--

DROP TABLE IF EXISTS `prog_file`;
CREATE TABLE IF NOT EXISTS `prog_file` (
  `pg_seq` int(11) NOT NULL AUTO_INCREMENT,
  `pg_nm` varchar(100) DEFAULT NULL,
  `prg_file` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pg_seq`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `prog_file`
--

INSERT INTO `prog_file` (`pg_seq`, `pg_nm`, `prg_file`) VALUES
(1, 'Company Master', 'companymaster'),
(2, 'Application User Registration', 'applicationuserregistration'),
(3, 'Gang Code Master', 'gangcodemaster'),
(4, 'Commodity Master', 'commoditymaster'),
(5, 'Vessel Master', 'vesselmaster'),
(6, 'Work Type Master', 'worktypemaster'),
(7, 'Casual Labour Rate Master', 'casuallabourratemaster'),
(8, 'Advance Payment', 'advancepayment'),
(9, 'Daily Challan', 'dailychallan'),
(10, 'Balance Process', 'advancerecover_proc'),
(11, 'Advance Outstanding', 'advanceoutstanding'),
(12, 'Advance Deduction', 'advancededuction'),
(13, 'Financial Year', 'financialyear');

-- --------------------------------------------------------

--
-- Table structure for table `smestar_syscom`
--

DROP TABLE IF EXISTS `smestar_syscom`;
CREATE TABLE IF NOT EXISTS `smestar_syscom` (
  `sys_co_nbr` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `sys_co_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sys_co_nbr`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `smestar_syscom`
--

INSERT INTO `smestar_syscom` (`sys_co_nbr`, `sys_co_code`, `sys_co_name`) VALUES
(2, '01', 'M R MARITIME AND LOGISTICS'),
(3, '02', 'AAJAY INTERNATIONAL'),
(4, '03', 'VILAS TRANSPORT COMPANY');

-- --------------------------------------------------------

--
-- Table structure for table `smestar_up`
--

DROP TABLE IF EXISTS `smestar_up`;
CREATE TABLE IF NOT EXISTS `smestar_up` (
  `up_tabreckey` bigint(20) NOT NULL AUTO_INCREMENT,
  `sys_co_code` varchar(20) DEFAULT NULL,
  `up_uid` varchar(100) DEFAULT NULL,
  `up_ak` varchar(200) DEFAULT NULL,
  `up_regdate` date DEFAULT NULL,
  `up_lockstatus` varchar(30) DEFAULT NULL,
  `up_status` varchar(30) DEFAULT NULL,
  `up_lastaccessdate` date DEFAULT NULL,
  `up_expdate` date DEFAULT NULL,
  `up_mid` varchar(200) DEFAULT NULL,
  `up_eid` varchar(50) DEFAULT NULL,
  `up_radt` date DEFAULT NULL,
  `up_rudt` date DEFAULT NULL,
  `up_rauid` varchar(30) DEFAULT NULL,
  `up_ruuid` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`up_tabreckey`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `smestar_up`
--

INSERT INTO `smestar_up` (`up_tabreckey`, `sys_co_code`, `up_uid`, `up_ak`, `up_regdate`, `up_lockstatus`, `up_status`, `up_lastaccessdate`, `up_expdate`, `up_mid`, `up_eid`, `up_radt`, `up_rudt`, `up_rauid`, `up_ruuid`) VALUES
(1, 'AJAY', 'LUBAL', '061da701845b6d9d4ff682ebda913139d6adc4f7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'AJAY', 'SWAPNIL', 'SWAPNIL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lp_dc_gdtl`
--
ALTER TABLE `lp_dc_gdtl`
  ADD CONSTRAINT `lp_dc_gdtl_ibfk_1` FOREIGN KEY (`dwd_tabreckey`) REFERENCES `lp_dc_pri_inf` (`dwd_tabreckey`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lp_dc_wdtl`
--
ALTER TABLE `lp_dc_wdtl`
  ADD CONSTRAINT `lp_dc_wdtl_ibfk_1` FOREIGN KEY (`dwd_tabreckey`) REFERENCES `lp_dc_pri_inf` (`dwd_tabreckey`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
