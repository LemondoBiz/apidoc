<?php
@session_start();
@ob_start();
@ob_implicit_flush(0);
error_reporting(E_ALL & ~E_NOTICE);
@ini_set('error_reporting', E_ALL ^ E_NOTICE);
@ini_set('error_reporting', E_ALL & ~E_NOTICE);
@ini_set('display_errors', '1');
@ini_set('display_startup_errors', '1');
@ini_set('ignore_repeated_errors', '1');
@ini_set('session.gc_maxlifetime', '18000');
@error_reporting(E_ALL ^ E_NOTICE);
@ini_set('display_errors', true);
@ini_set('html_errors', true);
@ini_set('upload_max_filesize', '4M');
@session_cache_expire(1440);
@ignore_user_abort(1);
@set_time_limit(0);

ini_set('memory_limit', '200M');
ini_set('memory_limit', '200M');

$GLOBALS['basep'] = "BASEPATH";

//define root path
$GLOBALS['doc_root'] = preg_replace("!{$_SERVER['SCRIPT_NAME']}$!", '', $_SERVER['SCRIPT_FILENAME']);

require_once("Helpers.php");
require_once("TUser.php");

function connect_db()
{
    $username = "apidocuser";
    $password = "cz3ZoQtAgDKW3QSV";

    // Create connection
    $conn = new PDO("mysql:host=localhost;dbname=apidocdb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("SET NAMES utf8");
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());

    }
    return $conn;
}

function select_db($sql)
{
    $conn = connect_db();
    $result = $conn->query($sql);
    return $result->fetchall(PDO::FETCH_ASSOC);
}