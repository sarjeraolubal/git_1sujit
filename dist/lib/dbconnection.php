<?php
/*-------------------------------------------------------
Author      : SWAPNIL LUBAL
Function of this program: db connectivity utility
--------------------------------------------------------
Version History:
--------------------------------------------------------
Ver.| Date      | Author       | Remarks
--------------------------------------------------------
1.0 |13-Feb-2015| Vaikunth Raul| Tested Code Release
-------------------------------------------------------*/

class DBconnectionUtil
{
	private static $dbName = 'mercombu_mercdmaps' ; 
	private static $dbHost = 'localhost' ;
	private static $dbUsername = 'mercombu_mrm';
	private static $dbUserPassword = 'rameshbhau';
    
    
   //  for local host change as bellow 
  //private static $dbUsername = 'root';
  //  private static $dbUserPassword = '';


	private static $cont  = null;
	
	public function __construct() {
		exit('Init function is not allowed');
	}
	
	public static function connect()
	{
	   // One connection through whole application
       if ( null == self::$cont )
       {      
        try 
        {
          self::$cont =  new PDO( "mysql:host=".self::$dbHost.";"."dbname=".self::$dbName, self::$dbUsername, self::$dbUserPassword);  
        }
        catch(PDOException $e) 
        {
          die($e->getMessage());  
        }
       } 
       return self::$cont;
	}
	
	public static function disconnect()
	{
		self::$cont = null;
	}
}
?>