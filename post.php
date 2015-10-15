<?php
require_once("conn.php");
if ($GLOBALS['basep'] !== "BASEPATH") {
    die("<h1>404 Not Found</h1>");
}
if ($_POST) {
    $POST = $_POST;
    choosePOSTType($POST);
}

die();

function choosePOSTType($POST)
{
    if ($POST["posttype"] && strlen($POST["posttype"])) {
        $posttype = $POST["posttype"];
        switch ($posttype) {
            case "login";
                echo TUser::login($POST);
                break;
            case "checkapi";
                echo TUser::checkApidocAccess($POST['title']);
                break;
            case "userlist";
                print TUser::getListOfUsers($POST['id']);
                break;            
            case "objById";
                print TUser::getObjectById($POST['id'], $POST['object']);
                break;
            case "total";
                print TUser::getTotalOfObject($POST['object']);
                break;
            case "addEditUser";
                print TUser::addEditUser($POST);
                break;
            case "addEditTask";
                print TUser::addEditTask($POST);
                break;                
            case "delete";
                print TUser::deleteObject($POST['id'], $POST['object']);
                break;
            case "changePass";
                print TUser::changePassword($POST['id'], $POST['p']);
                break;
        }
    }
}
