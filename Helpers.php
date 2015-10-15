<?php
if ($GLOBALS['basep'] !== "BASEPATH") {
    die("<h1>404 Not Found</h1>");
}

class Helpers
{
    public static function isIE()
    {
        $isIE = preg_match("/MSIE ([0-9]{1,}[\.0-9]{0,})/", $_SERVER['HTTP_USER_AGENT'], $version);
        if ($isIE) {
            return true;
        }
        return false;
    }

    public static function generateInclude($include)
    {
        return BASE_INCLUDE_NAME . $include . ".php";
    }

    public static function getHeader()
    {
        require_once(self::generateInclude("header"));
    }

    public static function getFooter()
    {
        require_once(self::generateInclude("footer"));
    }

    public static function getContent($page)
    {
        if (self::IsNullOrEmptyString($page)) {
            $page = "main";
        }
        $page = htmlspecialchars($page);
        $pg = $GLOBALS['doc_root'] . "/" . $page . ".php";

        if (file_exists($pg)) {
            require_once $pg;
        } else {
            require_once $GLOBALS['doc_root'] . "/login.php";
        }
    }

    public static function IsNullOrEmptyString($str)
    {
        return (!isset($str) || trim($str) === '');
    }

    public static function parseJSONResponse($json)
    {
        $out = json_decode($json, true);
        if ($out != null && sizeof($out) > 0) {
            return $out;
        }
    }

    public static function isInt($var)
    {
        if (empty($var)) return false;
        return preg_match('/^\d+$/', $var);
    }

    public static function strip_html_tags($str)
    {
        $str = preg_replace('/(<|>)\1{2}/is', '', $str);
        $str = preg_replace(
            array( // Remove invisible content
                '@<head[^>]*?>.*?</head>@siu',
                '@<style[^>]*?>.*?</style>@siu',
                '@<script[^>]*?.*?</script>@siu',
                '@<noscript[^>]*?.*?</noscript>@siu',
            ),
            "", //replace above with nothing
            $str);
        $str = self::replaceWhitespace($str);
        $str = strip_tags($str);
        $str = str_replace("'", "", $str);
        $str = str_replace("\"", "", $str);
        return $str;
    }

    public static function replaceWhitespace($str)
    {
        $result = $str;
        foreach (array(
                     "  ", " \t", " \r", " \n",
                     "\t\t", "\t ", "\t\r", "\t\n",
                     "\r\r", "\r ", "\r\t", "\r\n",
                     "\n\n", "\n ", "\n\t", "\n\r",
                 ) as $replacement) {
            $result = str_replace($replacement, $replacement[0], $result);
        }
        return $str !== $result ? self::replaceWhitespace($result) : $result;
    }

    public static function showFirstXWords($text, $wordCount)
    {
        $shortArticle = strip_html_tags($text);
        $shortArticle = explode(' ', $shortArticle);
        $shortArticle = array_slice($shortArticle, 0, $wordCount);
        $shortArticle = implode(' ', $shortArticle);
        echo $shortArticle;
    }

    public static function quote_smart($value)
    {
        return mysql_real_escape_string($value);
    }

    public static function GetDayDiff($dt)
    {
        $now = time(); // or your date as well
        $your_date = strtotime($dt);
        $datediff = $your_date - $now;
        echo floor($datediff / (60 * 60 * 24));
    }

    public static function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $randomString;
    }

    public static function createConnection($username, $password, $hostname, $db_name)
    {
        //connection to the database
        $handle = mysql_connect($hostname, $username, $password)
        or die("Unable to connect to MySQL");
        mysql_select_db($db_name, $handle)
        or die("Could not select DB");
        mysql_set_charset('utf8', $handle);
        mysql_query("SET CHARACTER SET utf8");
        return $handle;
    }

    public static function closeConnection($dbh)
    {
        //close the connection
        if ($dbh) {
            mysql_close($dbh);
        }
    }

    public function get_client_ip() {
        $ipaddress = '';
        if ($_SERVER['HTTP_CLIENT_IP'])
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if($_SERVER['HTTP_X_FORWARDED_FOR'])
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if($_SERVER['HTTP_X_FORWARDED'])
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if($_SERVER['HTTP_FORWARDED_FOR'])
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if($_SERVER['HTTP_FORWARDED'])
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if($_SERVER['REMOTE_ADDR'])
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
}

?>