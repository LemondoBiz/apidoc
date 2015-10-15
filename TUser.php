<?php
if ($GLOBALS['basep'] !== "BASEPATH") {
    die("<h1>404 Not Found</h1>");
}

class TUser
{

    public static function login($POST)
    {
        if (isset($POST["username"])) {
            $login = $POST['username'];
            $password = $POST['password'];
            $password_encoded = md5($password);
            $row_sql = "select * from users where username='$login' and password = '$password_encoded'";
            $result = select_db($row_sql);
            if ($result) {
                $_SESSION['username'] = $login;
                $_SESSION['userid'] = $result[0]['id'];
                $_SESSION['roleid'] = $result[0]['roleid'];
                return "1";
            } else {
                return "0";
            }
        }
        return "0";
    }

    public static function checkApidocAccess($title){
        $id = $_SESSION['userid'];
        $roleid = $_SESSION['roleid'];
        if($roleid == 1)
            return "1";

        $res = select_db("SELECT 1 FROM apis WHERE userid = ". $id . " AND title = N'".$title."'");
        if($res)return "1";
            else return "0";

    }

    public static function logout()
    {
        session_start();
        session_destroy();
        header("location:login.php");
    }

    public static function isLoggedIn()
    {
        @session_start();
        if (!isset($_SESSION["username"]))
            header("Location:login.php");
    }

    public static function userAlreadyExist($user)
    {
        $query = mysql_query("SELECT 1 FROM user where username = N'" . $user . "'") or die("");
        if (mysql_num_rows($query) > 0) {
            return true;
        }
        return false;
    }

    public static function redirectToMainPage()
    {
        header("location:index.php");
    }

    public static function getProtocol()
    {
        return 'http' . (((!empty($_SERVER['HTTPS']) &&
                $_SERVER['HTTPS'] !== 'off') ||
            $_SERVER['SERVER_PORT'] == 443) ? 's' : '');
    }

    public static function changePassword($id, $p)
    {
        $con = connect_db();
        $sql = "UPDATE users set user_password = md5('" . $p . "') WHERE id = " . $id;
        $res = $con->query($sql);
        if ($res) return 'true';
    }

    private static function checkDBTable($obj)
    {
        return !Helpers::IsNullOrEmptyString($obj) && in_array($obj, self::getValidTables());
    }

    public static function deleteObject($id, $obj)
    {
        if (!self::checkDBTable($obj)) return '0';
        $con = connect_db();
        $sql = "UPDATE " . $obj . " SET ddate = now() WHERE id = " . $id;
        $res = $con->query($sql);
        if ($res) return '1';   
    }

    public static function getTotalOfObject($obj, $search, $fs)
    {
        if (!self::checkDBTable($obj)) return 1;
        $con = connect_db();
        $res = $con->query("SELECT COUNT(*) FROM " . $obj . " WHERE ddate IS NULL " . $txtFilter);
        $retval = ceil($res->fetchColumn() / 20);
        return $retval == 0 ? 1 : $retval;
    }

    public static function getObjectById($id, $obj)
    {
        if (!self::checkDBTable($obj)) return '';
        $con = connect_db();
        $select = $con->query("select * from " . $obj . " where ddate IS NULL AND id = " . $id);
        $result = $select->fetchAll(PDO::FETCH_ASSOC);
        $json = array();
        $json['data'] = $result;
        return json_encode($json);
    }

    public static function getListOfUsers($id = null)
    {
        $con = connect_db();
        $json = array();
        $where = Helpers::IsNullOrEmptyString($id) ? "" : " WHERE id = ".$id;
        $sql = "SELECT *
                FROM users WHERE ddate IS NULL ";
        $select = $con->query($sql);
        $result = $select->fetchAll(PDO::FETCH_ASSOC);

        if ($result) {
            $json['data'] = $result;
            return json_encode($json);
        }
    }

    public static function addEditUser($data)
    {
        $con = connect_db();
        if (Helpers::IsNullOrEmptyString($data['id'])) {
            $sql = "INSERT INTO users (fullname) VALUES (N'" . $data['fullname'] . "')";
            $res = $con->query($sql);
        } else {
            $sql = "UPDATE users
                    SET
                    fullname = N'" . $data['fullname'] . "' WHERE id = " . $data['id'];
            $res = $con->query($sql);
        }
        if ($res) return '1';
    }


}
